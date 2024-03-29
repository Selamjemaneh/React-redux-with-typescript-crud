import { Employee } from "./features/Employee/Employee";

function App() {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">React Redux with Typescript CRUD </a>
        </div>
      </nav>
      <div className="container is-max-desktop">
        <Employee />
      </div>
    </>
  );
}

export default App;
