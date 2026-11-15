import CodeBlock from "../components/CodeBlock";
import renderFiles from "../assets/renderFiles.png";
import siteConfig from "../assets/siteConfig.png";
import deploymentLog from "../assets/deploymentLog.png";
import routerConfig from "../assets/routerConfig.png";
import workFlow from "../assets/workFlow.png";

export function RenderDeployments() {
  return (
    <>
      <h3>1. Verify that your project builds locally</h3>
      <p>Before deploying, open your project in VS Code and run:</p>
      <pre>
        <CodeBlock>{`npm run build`}</CodeBlock>
      </pre>
      <p>
        Vite will create a dist directory containing the production-ready
        version of your application.
      </p>
      <p>You can then preview the production build locally:</p>
      <pre>
        <CodeBlock>{`npm run preview`}</CodeBlock>
      </pre>
      <p>If everything looks correct, you're ready to deploy.</p>

      <h3>2. Push your project to GitHub</h3>
      <p>
        Assuming you've already created your GitHub repository and connected it
        to your local project:
      </p>
      <pre>
        <CodeBlock>
          git add .<br />
          git commit -m "Prepare project for deployment"
          <br />
          git push origin main
        </CodeBlock>
      </pre>

      <p>Make sure your GitHub repository contains the following:</p>
      <img src={renderFiles} alt="Render file structure" />
      <p>
        You do not need to commit node_modules or dist. Render will install your
        dependencies and generate the production build itself.
      </p>

      <h3>3. Create a new Static Site on Render</h3>
      <ol>
        <li>Log in to the Render Dashboard.</li>
        <li>Click + New in the upper-right corner.</li>
        <li>Select Static Site.</li>
        <li>Select GitHub as your Git provider.</li>
        <li>Locate your project's repository.</li>
        <li>Click Connect.</li>
      </ol>

      <p>
        If your repository isn't listed, you may need to update Render's GitHub
        permissions to include the new repository.
      </p>

      <h3>4. Configure your Static Site</h3>
      <p>This is the most important part of the setup.</p>
      <p>Use the following settings for a standard Vite + React project:</p>

      <img src={siteConfig} alt="Render Site Config settings" />

      <p>
        These settings assume your Vite project is located at the root of your
        repository and uses the default Vite build configuration.
      </p>

      <h6>What do these settings actually do?</h6>

      <table className="table table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Setting</th>
            <th scope="col">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Branch</td>
            <td>Tells Render which Git branch to deploy.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Root Directory</td>
            <td>Tells Render where your application is located.</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Branch</td>
            <td>Tells Render which Git branch to deploy.</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>npm install</td>
            <td>Installs your project's dependencies.</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>npm run build</td>
            <td>Generates the production version of your application.</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>dist</td>
            <td>Tells Render which directory to publish.</td>
          </tr>
        </tbody>
      </table>

      <p>Important: Vite uses dist, whereas Create React App uses build.</p>

      <h3>5. Deploy your Static Site</h3>
      <p>Click Deploy Static Site at the bottom of the configuration page.</p>
      <p>
        Render will begin the deployment process. You can watch the progress in
        the deployment logs.
      </p>
      <img src={deploymentLog} alt="Render deployment log" />
      <p>
        Once the deployment is complete, Render provides a public URL similar
        to:
      </p>
      <pre>
        <CodeBlock>https://my-react-project.onrender.com</CodeBlock>
      </pre>
      <p>You can use this URL without purchasing a custom domain.</p>

      <h3>6. Configure React Router (if applicable)</h3>
      <p>
        This is particularly important if you're using BrowserRouter, like you
        are on your portfolio.
      </p>
      <p>
        In your Render dashboard, navigate to your new Static Site and select
        Redirects/Rewrites.
      </p>
      <p>Add the following rule:</p>

      <img src={routerConfig} alt="Redirect and Rewrite rules" />
      <p>
        This prevents 404 errors when someone refreshes or directly visits a
        React Router page.
      </p>

      <p>For example:</p>

      <pre>
        <CodeBlock>https://my-react-project.onrender.com/about</CodeBlock>
      </pre>

      <p>
        Without the rewrite, Render looks for an actual file at /about. With the
        rewrite, Render serves index.html and lets React Router handle the
        navigation.
      </p>
      <p>
        If your application doesn't use client-side routing, you can skip this
        step.
      </p>

      <h3>7. Verify automatic deployments</h3>
      <p>
        Under your Static Site's settings, make sure Auto-Deploy is enabled for
        commits.
      </p>
      <p>
        Since you typically use a main and development branch, your existing
        workflow will work perfectly with this setup.
      </p>

      <img src={workFlow} alt="My standard workflow" />
      <p>
        Render will deploy when changes reach main, not when you push changes to
        development or a feature branch.
      </p>
      <pre>
        <CodeBlock></CodeBlock>
      </pre>
    </>
  );
}
