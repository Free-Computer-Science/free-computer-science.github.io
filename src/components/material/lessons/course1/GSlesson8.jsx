import { Link } from "react-router-dom";

const GSlesson8 = (props) => {

    return (
     <div>
     <p>Saving Your Code: Git</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
     </div>
    );
};

export default GSlesson8;