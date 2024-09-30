import { Link } from "react-router-dom";

const GSlesson5 = (props) => {

    return (
     <div>
     <p>Learning How to Learn</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
     </div>
    );
};

export default GSlesson5;