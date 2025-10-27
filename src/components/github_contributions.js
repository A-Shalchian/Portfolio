export async function getContributions() {
  try {
    console.log("Fetching contributions from API...");
    const response = await fetch('/api/github/contributions');

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    console.log(`API returned ${data.totalContributions} total contributions across ${data.weeks.length} weeks`);

    return data.weeks;
  } catch (error) {
    console.error("Error fetching contributions:", error.message);
    throw error;
  }
}

export async function getLatestCommit() {
  try {
    console.log("Fetching latest commit from API...");
    const response = await fetch('/api/github/latest-commit');

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error("Error fetching latest commit:", error.message);
    throw error;
  }
}

// Create a named object for the default export
const GitHubContributions = {
  getContributions,
  getLatestCommit
};

export default GitHubContributions;
