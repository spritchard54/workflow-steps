export function GitWorkFlow() {
  return (
    <>
      <h1>Git Workflow</h1>
      <p>
        This page documents my standard Git Workflow for creating branches,
        committing changes, pushing to GitHub, and opening pull requests.
      </p>
      <h2>Create a new branch.</h2>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git checkout -b feature/page-name`}</code>
      </pre>
      <h2>Commit Changes</h2>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`Git add . git commit -m "descriptive note about commit"`}</code>
      </pre>
      <h2>Push Branch</h2>
      <pre className="bg-dark text-light p-3 rounded">
        <code>{`git push -u origin feature/page-name`}</code>
      </pre>
    </>
  );
}
