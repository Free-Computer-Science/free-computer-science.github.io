import { Link } from "react-router-dom";

const GSlesson1 = (props) => {
    return (
      <div>
        <h2>Lesson 1: Seeing from the Stars: A High-Level Overview of the Program</h2>
        <p>This is the content for Lesson 1...</p>
  
        {/* Navigation buttons */}
        <div className="lesson-nav">
          <Link to="/gettingstarted"><button>Back to Course</button></Link>
           <Link to={props.nextLesson}><button>Next Lesson</button></Link>
        </div>
      </div>
    );
  };

  export default GSlesson1;