import { Command } from 'commander';
import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
});

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
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    });

    data.filter((issue: any) => !issue.pull_request).sort((a: any, b: any) => a.number - b.number)
    .forEach((issue: any) => {
      console.log(`#${issue.number} - ${issue.title}`);
    });
  } catch (error: any) {
    console.error('Error fetching issues:', error.message);
  }
};

// Add comment to the issue
const addComment = async (owner: string, repo: string, issue: number, comment: string) => {
  try {
    const { data } = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
      owner,
      repo,
      issue_number: issue,
      body: comment,
    });
    console.log('Comment added:', data.html_url);
  } catch (error: any) {
    console.error('Error adding comment:', error.message);
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
