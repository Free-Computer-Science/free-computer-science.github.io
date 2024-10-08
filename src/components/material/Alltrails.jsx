import { Link } from "react-router-dom";
const Allpaths = () => {
  return (
    <>
      <div>
        <h1>The Trails</h1>
        <ul>
          <li>
            <Link to="/foundations">
              <button>Introductory Computer Science</button>
            </Link>
          </li>
          <li>
            <Link to="/systems">
              <button>Introductory Systems with C and Assembly</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Allpaths;
