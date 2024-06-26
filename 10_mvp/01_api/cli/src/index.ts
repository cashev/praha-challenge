import { Command } from 'commander';
import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
});

type listIssuesResponse = Endpoints['GET /repos/{owner}/{repo}/issues']['response'];
type createCommentResponse = Endpoints['POST /repos/{owner}/{repo}/issues/{issue_number}/comments']['response'];

const program = new Command();

program
  .argument('<owner>', 'Github Owner Name')
  .argument('<repo>', 'Github Repository Name')
  .option('-i --issue <issue>', 'Issue number to add comment to')
  .option('-c --comment <comment>', 'Comment to add to the issue')
  .parse(process.argv);

const owner = program.args[0];
const repo = program.args[1];
const options = program.opts();

// Fetch issues from the repository
const fetchIssues = async (owner: string, repo: string) => {
  try {
    const { data }: listIssuesResponse = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    });

    // PRも含まれるので、Issueのみを表示する
    data.filter((issue) => !issue.pull_request).sort((a, b) => a.number - b.number)
    .forEach((issue) => {
      console.log(`#${issue.number} - ${issue.title}`);
    });
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
};

// Add comment to the issue
const addComment = async (owner: string, repo: string, issue: number, comment: string) => {
  try {
    const { data }: createCommentResponse = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
      owner,
      repo,
      issue_number: issue,
      body: comment,
    });
    console.log('Comment added:', data.html_url);
  } catch (error) {
    console.error('Error adding comment:', error);
  }
}

if (options.issue || options.comment) {
  if (!options.issue) {
    console.error('Issue number is required');
    process.exit(1);
  }
  if (!options.comment) {
    console.error('Comment is required');
    process.exit(1);
  }
  addComment(owner, repo, parseInt(options.issue), options.comment);
} else  {
  fetchIssues(owner, repo);
}
