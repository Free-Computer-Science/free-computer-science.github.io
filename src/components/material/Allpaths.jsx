import {  Link } from "react-router-dom";
const Allpaths = () => {
  return (
    <>
      <div>
        <h1>The paths</h1>
        <ul>
          <li>
            <Link to="/foundations"><button>Foundations of Computer Science</button></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Allpaths;
