import { Command } from 'commander';
import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
});

const program = new Command();

program
  .argument('<owner>', 'Github Owner Name')
  .argument('<repo>', 'Github Repository Name')
  .option('-c --comment <comment>', 'Comment to add to the issue')
  .parse(process.argv);

const owner = program.args[0];
const repo = program.args[1];
const options = program.opts();

const fetchIssuesOctokit = async (owner: string, repo: string) => {
  try {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    });

    data.filter((issue: any) => !issue.pull_request).forEach((issue: any) => {
      console.log(`#${issue.number} - ${issue.title}`);
    });
  } catch (error: any) {
    console.error('Error fetching issues:', error.message);
  }
};

if (options.comment) {
  process.exit(1);
} else  {
  fetchIssuesOctokit(owner, repo);
}
