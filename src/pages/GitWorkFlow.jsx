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
    </>
  );
}
