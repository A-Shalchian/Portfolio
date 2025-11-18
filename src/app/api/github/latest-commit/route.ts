import { NextResponse } from 'next/server';
import axios from 'axios';

interface Commit {
  message: string;
  committedDate: string;
  author: {
    name: string;
  };
}

interface Repository {
  name: string;
  url: string;
  defaultBranchRef?: {
    target: Commit;
  };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GITHUB_TOKEN is not set in environment variables");
    return NextResponse.json(
      { error: "GitHub token is missing. Please set GITHUB_TOKEN in environment variables." },
      { status: 500 }
    );
  }

  const query = `
    query {
      viewer {
        repositories(first: 100, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            name
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  message
                  committedDate
                  author {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log("Fetching latest commit with GraphQL...");
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const repos = response.data.data.viewer.repositories.nodes as Repository[];

    // Find the 2 most recent commits across all repos
    const commits: Array<{ commit: Commit; repo: Repository; date: Date }> = [];

    repos.forEach((repo) => {
      if (repo.defaultBranchRef?.target) {
        const commit = repo.defaultBranchRef.target;
        const commitDate = new Date(commit.committedDate);
        commits.push({ commit, repo, date: commitDate });
      }
    });

    // Sort by date and get top 2
    commits.sort((a, b) => b.date.getTime() - a.date.getTime());
    const topCommits = commits.slice(0, 2);

    if (topCommits.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(
      topCommits.map(({ commit, repo, date }) => ({
        message: commit.message.split('\n')[0], // Get first line only
        repo: repo.name,
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        url: repo.url
      }))
    );
  } catch (error) {
    console.error("Error fetching latest commit:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest commit" },
      { status: 500 }
    );
  }
}
