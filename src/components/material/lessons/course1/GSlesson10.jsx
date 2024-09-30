import { Link } from "react-router-dom";

const Gslesson10 = (props) => {

    return (
     <div>
     <p>Time and Life Management</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
     </div>
    );
};

export default Gslesson10;