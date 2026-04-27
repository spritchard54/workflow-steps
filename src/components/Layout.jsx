import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          
          {/* <aside className="col-12 col-md-3 col-lg-2 bg-light border-end p-3"> */}
          <aside className="col-md-3 col-lg-2 d-md-block bg-light border-end p-3">
            <Sidebar />
          </aside>
          
          <main className="col-12 col-md-9 col-lg-10 p-4">
            <Outlet />
          </main>
        
        </div>
      </div>
    </>
  );
}
