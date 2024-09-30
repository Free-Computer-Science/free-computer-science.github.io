import { Link } from "react-router-dom";

const GSlesson12 = (props) => {

    return (
     <div>
     <p>A Look Ahead</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
        </div>
     </div>
    );
};

export default GSlesson12;