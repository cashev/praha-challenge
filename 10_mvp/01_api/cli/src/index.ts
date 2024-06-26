import axios from 'axios';
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI to fetch GitHub issues')
  .option('-r, --repo <repo>', 'GitHub repository in the format owner/repo')
  .parse(process.argv);

const options = program.opts();

if (!options.repo) {
  console.error('Please specify a repository using the -r or --repo option.');
  process.exit(1);
}

const fetchIssues = async (repo: string) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repo}/issues`);
    const issues = response.data;

    const filteredIssues = issues.filter((issue: any) => !issue.pull_request);

    filteredIssues.forEach((issue: any) => {
      console.log(`#${issue.number} - ${issue.title}`);
    });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching issues:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

fetchIssues(options.repo);
