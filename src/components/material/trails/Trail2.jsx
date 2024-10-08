import { Link } from "react-router-dom";
const Trail2 = () => {

    return (
     <div>
     <p>The Systems Trail</p>
     <ul>
     <li>
          <Link to="/progincbasics">
            <button>Programming in C</button>
          </Link>
        </li>
     </ul>
     </div>
    );
};

export default Trail2;