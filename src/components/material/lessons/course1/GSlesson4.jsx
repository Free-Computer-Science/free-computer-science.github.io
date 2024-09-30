import { Link } from "react-router-dom";

const GSlesson4 = (props) => {

    return (
     <div>
     <p>Computer Science vs Software Engineering</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
     </div>
    );
};

export default GSlesson4;