import { Link } from "react-router-dom";
const Path1 = () => {
  return (
    <div>
      <h1>Introductory  Computer Science</h1>

      <ul>
        <li>
          <Link to="/gettingstarted">
            <button>Getting Started</button>
          </Link>
        </li>
        <li>
          <button>Introduction to Programming</button>
        </li>
        <li>
          <button>Computer Science Principles</button>
        </li>
        <li>
          <button>College Placement Preparation with Java</button>
        </li>
        <li>
          <Link to="/proginc">
            <button>Programming in C</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Path1;
