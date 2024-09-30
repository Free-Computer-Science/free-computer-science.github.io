import { Link } from "react-router-dom";

const GSlesson7 = (props) => {

    return (
     <div>
     <p>Text Editors and IEDs</p>
     <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
          <Link to={props.prevLesson}><button>Previous Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
     </div>
    );
};

export default GSlesson7;