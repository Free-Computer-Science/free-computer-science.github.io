import { Link } from "react-router-dom";

const Itclesson9 = (props) => {

    return (
     <div>
     <p>Getting Started</p>
     <h1>Lesson Title</h1>
     
     <h2>Objective(s):</h2>
     <ul>
       <li>Understand Concept</li>
       <li>Explain Concept</li>
     </ul>
     
     <h2>Introduction:</h2>
     <p>
       Start by reading this section carefully to understand what you will
       learn today.
     </p>
     <p>Brief Explanation</p>
     
     <h2>Lesson Content:</h2>
     <h3>1. Key Concepts to Know:</h3>
     <ul>
       <li>
         <strong>Concept 1:</strong>
       </li>
       <li>
         <strong>Concept 2:</strong>
       </li>
       <li>
         <strong>Concept 3:</strong>
       </li>
     </ul>
     
     <h2>Outside Resources:</h2>
     <p>For further exploration of this topic, check out these resources:</p>
     <ul>
       <li>
         <strong>Interactive Simulation:</strong>
       </li>
       <li>
         <strong>Video Explanation:</strong>
       </li>
       <li>
         <strong>Article:</strong>
       </li>
       <li>
         <strong>Supplementary Reading:</strong>
       </li>
       <li>
         <strong>Further Practice:</strong>
       </li>
     </ul>
     
     <h3>2. How Does Work?</h3>
     <ol>
       <li>
         <strong>Step 1:</strong>
       </li>
       <li>
         <strong>Step 2:</strong>
       </li>
       <li>
         <strong>Step 3:</strong>
       </li>
     </ol>
     
     <h2>Check Your Understanding:</h2>
     <p>
       Before moving on, check if you understand the basics of the topic by
       answering these questions:
     </p>
     <ul>
       <li>What is [key concept]?</li>
       <li>How does [process or topic] work?</li>
       <li>Why is [aspect of the topic] important?</li>
     </ul>
     
     <h2>Practice Activity:</h2>
     <ol>
       <li>[Describe the activity]</li>
       <li>[Another activity to reinforce understanding]</li>
     </ol>
     
     <h2>Independent Practice:</h2>
     <p>Complete the following task to solidify what you&apos;ve learned:</p>
     <p>
       <strong>Task:</strong> [Provide an independent task for students]
     </p>
     
     <h2>Reflection:</h2>
     <p>After completing this lesson, reflect on what you learned:</p>
     <ul>
       <li>What surprised you about [topic]?</li>
       <li>How do you think [topic] is applied in real life?</li>
     </ul>
     
     <h2>Assessment:</h2>
     <p>Answer the following questions to test your understanding:</p>
     <ul>
       <li>What is the function of [key concept] in this process?</li>
       <li>Why is [topic] important?</li>
       <li>How does [specific concept] relate to [another concept]?</li>
     </ul>
     
     <h2>Next Steps:</h2>
     <p>
       In the next lesson, you&apos;ll dive deeper into [related topic] and see
       how it connects to what you learned today.
     </p>
     
     <h2>Key Vocabulary:</h2>
     <ul>
       <li>
         <strong>Term 1:</strong> [Definition]
       </li>
       <li>
         <strong>Term 2:</strong> [Definition]
       </li>
       <li>
         <strong>Term 3:</strong> [Definition]
       </li>
     </ul>
     <div className="lesson-nav">
     <Link to="/progincbasics">
          <button>Back to Course</button>
        </Link>
        <Link to={props.prevLesson}>
          <button>Previous Course</button>
        </Link>
        <Link to={props.nextLesson}>
          <button>Next Lesson</button>
        </Link>
      </div>
     </div>
    );
};

export default Itclesson9;