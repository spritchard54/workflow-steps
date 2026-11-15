import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { GitWorkFlow } from "./pages/GitWorkFlow";
import { ViteSetup } from "./pages/ViteSetup";
import { RenderDeployments } from "./pages/RenderDeployments";
import { Troubleshooting } from "./pages/Troubleshooting";

function App() {
  return (
    //  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/git-workflow" element={<GitWorkFlow />} />
        <Route path="/vite-setup" element={<ViteSetup />} />
        <Route path="/render-deployments" element={<RenderDeployments />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
      </Route>
    </Routes>
    //</BrowserRouter>
  );
}

export default App;
