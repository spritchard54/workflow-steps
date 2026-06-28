export function GitWorkFlow() {
  return (
    <>
      <h1>Git Workflow</h1>
      <p>
        This page documents my standard Git Workflow for creating branches,
        committing changes, pushing to GitHub, and opening pull requests.
      </p>
      <h3>1. Start from a clean, current main:</h3>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git checkout main`}</code>
      </pre>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git pull origin main`}</code>
      </pre>
      <h3>2. Create a new branch:</h3>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git checkout -b feature/page-name`}</code>
      </pre>
      <h3>3. Work Locally:</h3>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`npm run dev`}</code>
      </pre>
      <h3>4. Before Committing:</h3>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`npm run build`}</code>
      </pre>
      <h3>5. Commit and push your feature branch:</h3>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git add .`}</code>
      </pre>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git commit -m "Commit Message"`}</code>
      </pre>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git push -u origin feature/page-name`}</code>
      </pre>
      <h3>6. Open a Pull Request on GitHub</h3>
      <p>feature/page-name &rarr; main</p>
      <p>Review the chnages, then merge the PR</p>
      <h5>Deployment Rule</h5>
      <p>
        Once the PR is merged into main, GitHub Actions automatically deploys.
      </p>
      <h3>7. After Merge:</h3>
      <p>
        Update your local main:
      </p>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git checkout main`}</code>
      </pre>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git pull origin main`}</code>
      </pre>
      <p>
        Delete the local branch:
      </p>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git branch -d feature/page-name`}</code>
      </pre>
      <p>
        Delete the remote feature branch:
      </p>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git push origin --delete feature/page-name`}</code>
      </pre>
      <h5>Syncing Commands</h5>
<p>Useful commands for keeping your local and remote repositories synchronized.</p>

<h3>8. Sync Repositories</h3>

<p>
  Check the current status of your repository. This is usually the first command
  you should run before making changes.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git status`}</code>
</pre>

<p>
  Show all local and remote branches.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git branch -a`}</code>
</pre>

<p>
  Show local branches, their tracking branches, latest commit, and whether they
  are ahead or behind their remote counterparts.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git --no-pager branch -vv`}</code>
</pre>

<p>
  Download the latest information from GitHub without changing your local
  branches.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git fetch origin`}</code>
</pre>

<p>
  Update your local <strong>main</strong> branch from GitHub.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git checkout main`}</code>
</pre>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git pull origin main`}</code>
</pre>

<p>
  Update your local <strong>development</strong> branch from GitHub.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git checkout development`}</code>
</pre>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git pull origin development`}</code>
</pre>

<p>
  Compare two branches and display the code differences.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git diff main..development`}</code>
</pre>

<p>
  Display a summary of the files that differ between two branches.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git diff --stat main..development`}</code>
</pre>

<p>
  Show commits that exist in <strong>development</strong> but not in{" "}
  <strong>main</strong>.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git log --oneline main..development`}</code>
</pre>

<p>
  Show commits that exist in <strong>main</strong> but not in{" "}
  <strong>development</strong>.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git log --oneline development..main`}</code>
</pre>

<p>
  Compare the latest commit hash on two branches to verify they point to the
  same commit.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git rev-parse main`}</code>
</pre>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git rev-parse development`}</code>
</pre>

<p>
  Remove remote-tracking branches that no longer exist on GitHub.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git fetch --prune`}</code>
</pre>

<p>
  Display detailed information about your remote repository, including tracked
  branches and stale references.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git remote show origin`}</code>
</pre>

<p>
  Delete the local feature branch after it has been merged.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git branch -d feature/page-name`}</code>
</pre>

<p>
  Delete the remote feature branch from GitHub.
</p>
<pre className="bg-dark text-light p-3 rounded">
  <code>{`git push origin --delete feature/page-name`}</code>
</pre>
    </>
  );
}
