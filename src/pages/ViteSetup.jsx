import viteSetup from "../assets/ViteSetup.png";
import importantFiles from "../assets/importantFiles.png";
import viteStart from "../assets/viteStartPage.jpeg";
import appLoading from "../assets/appLoading.png";
import CodeBlock from "../components/CodeBlock";

export function ViteSetup() {
  return (
    <>
      <h1>Vite Setup</h1>
      <h3>Step 1: Navigate to your projects directory</h3>
      <p>
        Open your terminal and navigate to the directory where you keep your
        development projects.
      </p>
      <CodeBlock>{`cd ~/Dev/Projects`}</CodeBlock>
      <p>Confirm you're in the correct directory:</p>
      <CodeBlock>
        <code>{`pwd`}</code>
      </CodeBlock>
      <p>You can also use "ls" to see your existing projects.</p>
      <h3>Step 2: Verify Node.js and npm</h3>
      <p>Make sure Node.js and npm are installed.</p>
      <CodeBlock>
        <code>
          node -v <br />
          npm -v
        </code>
      </CodeBlock>
      <p>
        These commands return the installed version numbers. I'd recommend using
        a supported LTS version of Node.js that meets Vite's requirements.
      </p>
      <h3>Step 3: Create the Vite project</h3>
      <p>Run the following command:</p>
      <CodeBlock>
        <code>npm create vite@latest</code>
      </CodeBlock>
      <p>Vite will walk you through several prompts.</p>
      <p>If prompted to install create-vite, enter y.</p>
      <p>Project name:</p>
      <CodeBlock>
        <code>my-react-project</code>
      </CodeBlock>
      <p>Select a framework:</p>
      <CodeBlock>
        <code>
          Vanilla <br />
          Vue <br />
          React <span style={{ color: "#96f4e4" }}>← Select this</span>
          <br />
          Preact <br />
          ...
        </code>
      </CodeBlock>
      <p>Select a variant:</p>
      <CodeBlock>
        <code>
          <br />
          TypeScript
          <br />
          JavaScript{" "}
          <span style={{ color: "#96f4e4" }}>
            ← Select this
            <br />
          </span>
          ...
        </code>
      </CodeBlock>
      <p>
        Depending on the Vite version, you may see additional prompts. For a
        standard setup, you can decline experimental options.
      </p>
      <p>
        Alternatively, you can accomplish the same basic setup with one command:
      </p>
      <CodeBlock>
        <code>npm create vite@latest my-react-project -- --template react</code>
      </CodeBlock>
      <h3>Step 4: Navigate into the new project</h3>
      <CodeBlock>
        <code>cd my-react-project</code>
      </CodeBlock>
      <p>
        Vite has now created your project directory and populated it with the
        necessary starter files.
      </p>
      <h3>Step 5: Install dependencies</h3>
      <CodeBlock>
        <code>npm install</code>
      </CodeBlock>
      <p>This command:</p>
      <ul>
        <li>Reads your package.json file.</li>
        <li>Installs the required dependencies, including React and Vite.</li>
        <li>Creates the node_modules directory.</li>
        <li>Generates a package-lock.json file.</li>
      </ul>
      <p>
        If Vite already installed the dependencies during setup, you can skip
        this step.
      </p>
      <h3>Step 6: Open the project in VS Code</h3>
      <CodeBlock>
        <code>code .</code>
      </CodeBlock>
      <p>The . represents your current directory.</p>
      <p>Your project structure should look approximately like this:</p>
      <img src={viteSetup} alt="Vite folder confuration looks like this..." />
      <p>Here are the most important files to understand:</p>
      <img src={importantFiles} alt="important files and what they do..." />
      <h3>Step 7: Start the development server</h3>
      <p>In your VS Code terminal, run:</p>
      <CodeBlock>
        <code>npm run dev</code>
      </CodeBlock>
      <p>You should see output similar to:</p>
      <CodeBlock>
        <code>
          VITE ready
          <br />
          ➜ Local: http://localhost:5173/
          <br />➜ Network: use --host to expose
        </code>
      </CodeBlock>
      <p>Open http://localhost:5173/ in your browser.</p>
      <img src={viteStart} alt="Vite default start page" />
      <p>You should see the default Vite + React starter page.</p>
      <p>At this point, you have a fully functioning React application.</p>
      <h3>Step 8: Clean up the starter files</h3>
      <p>Remove the default Vite content before starting development.</p>
      <p>Replace the contents of App.jsx with:</p>
      <CodeBlock>
        <code>
          {`
          import "./App.css";

          function App() {
            return (
              <>
                <h1>My React Project</h1>
                <p>Welcome to my new application!</p>
              </> 
            );
            }

          export default App;`}
        </code>
      </CodeBlock>
      <p>You can then:</p>
      <ul>
        <li>Clear the contents of App.css.</li>
        <li>Clear the contents of index.css.</li>
        <li>Delete src/assets/react.svg.</li>
        <li>Delete public/vite.svg.</li>
        <li>
          Remove the Vite favicon reference and update the title in index.html.
        </li>
      </ul>
      <p>
        Your browser should automatically update when you save your changes.
        This is Vite's Hot Module Replacement (HMR) functionality.
      </p>
      <h3>Step 9: Understand how the application loads</h3>
      <p>
        This is particularly worth reviewing as part of your ongoing developer
        practice.
      </p>
      <img src={appLoading} alt="How the applications loads..." />
      <p>
        The browser loads index.html, which loads main.jsx, which renders
        App.jsx, which can render additional components.
      </p>
      <p>
        This is essentially the same architecture you're using in your existing
        React portfolio.
      </p>
      <h3>Step 10: Install additional packages (optional)</h3>
      <p>
        Based on the stack you're already comfortable with, you might want to
        install the following:
      </p>
      <table>
        <colgroup>
          <col style={{ width: "300px" }} />
          <col style={{ width: "300px" }} />
        </colgroup>
        <tr>
          <th>Package</th>
          <th>Instalation command</th>
        </tr>
        <tr>
          <td>Bootstrap</td>
          <td>
            <span className="commandEl">npm install bootstrap</span>
          </td>
        </tr>
        <tr>
          <td>React Router</td>
          <td>
            <span className="commandEl"> npm install react-router-dom</span>
          </td>
        </tr>
        <tr>
          <td>React Icons</td>
          <td>
            <span className="commandEl">npm install react-icons</span>
          </td>
        </tr>
        <tr>
          <td>Day.js</td>
          <td>
            <span className="commandEl">npm install dayjs</span>
          </td>
        </tr>
      </table>
      <br />
      <p>If you're using Bootstrap, add this import to main.jsx:</p>
      <CodeBlock>
        <code>import "bootstrap/dist/css/bootstrap.min.css";</code>
      </CodeBlock>

      <p>For Bootstrap's interactive components, also add:</p>
      <CodeBlock>
        <code>import "bootstrap/dist/js/bootstrap.bundle.min.js";</code>
      </CodeBlock>
      <p>Only install packages as you actually need them.</p>

      <h3>Step 11: Initialize Git</h3>
      <p>
        If you typically use a main and development branch workflow, you can
        establish that structure immediately.
      </p>
      <CodeBlock>
        <code>
          git init -b mainswitch -c development
          <br />
          git add .<br />
          git commit -m "Initial Vite React projectsetup"
          <br />
          git switch -c development
          <br />
        </code>
      </CodeBlock>
      <p>
        You can then create an empty GitHub repository and connect your local
        project to it.
      </p>
      <h3>Step 12: Verify the production build</h3>
      <CodeBlock>
        <code>npm run build</code>
      </CodeBlock>
      <p>
        This creates a dist directory containing your production-ready
        application.
      </p>
      <p>You can preview that build locally using:</p>
      <CodeBlock>
        <code>npm run preview</code>
      </CodeBlock>
      <p>
        This is the same build process that Render uses when deploying your
        React portfolio.
      </p>
    </>
  );
}
