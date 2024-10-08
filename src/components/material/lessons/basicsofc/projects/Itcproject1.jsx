import { Link } from "react-router-dom"
const Itcproject1 = (props) => {

    return (
        <div>
        <h1>Project Title</h1>
        
        <h2>Objective:</h2>
        <p>[Provide a clear objective of the project]</p>
        
        <h2>Requirements:</h2>
        <ul>
          <li>Language: [Programming Language(s)]</li>
          <li>Tools: [Software, IDEs, Libraries]</li>
          <li>Prerequisite Knowledge: [Skills or topics needed]</li>
          <li>Time Estimate: [How long the project should take]</li>
        </ul>
        
        <h2>Explanation:</h2>
        <p>[Explain the problem or task that this project aims to solve or demonstrate.]</p>
        <p>[Briefly describe any important concepts or techniques used in the project.]</p>
        
        <h2>Steps:</h2>
        <ol>
          <li><strong>Step 1:</strong> [Describe the first step in the project]</li>
          <li><strong>Step 2:</strong> [Describe the second step in the project]</li>
          <li><strong>Step 3:</strong> [Describe the third step in the project]</li>
          <li><strong>Step 4:</strong> [Additional steps as necessary]</li>
        </ol>
        
        <h2>Additional Resources:</h2>
        <p>Check out the following resources to further understand the concepts or tools used in this project:</p>
        <ul>
          <li><strong>Official Documentation:</strong> [Link to relevant documentation]</li>
          <li><strong>Video Tutorials:</strong> [Link to tutorials]</li>
          <li><strong>Supplementary Articles:</strong> [Link to useful articles or guides]</li>
          <li><strong>Practice Problems:</strong> [Link to additional exercises related to the project]</li>
        </ul>
        
        <div className="lesson-nav">
          <Link to="/progincbasics">
            <button>Back to Course</button>
          </Link>
          <Link to={props.nextLesson}>
            <button>Next Lesson</button>
          </Link>
        </div>
      </div>
    );
};

export default Itcproject1;