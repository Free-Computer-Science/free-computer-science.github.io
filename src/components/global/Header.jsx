// src/components/Header.js
 import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    
    <nav>
      <div>
        <div>
          <div>
            <div>
            <Link to="/"><button>Free Computer Science</button></Link>
            </div>
          </div>
          <div>
            <div>
              <Link to="/alltrails"><button>All Paths</button></Link>
              <Link to= "/about"><button>About</button></Link>
              <Link to="/contribute"><button>Contribute</button></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>

  );
};

export default Header;
