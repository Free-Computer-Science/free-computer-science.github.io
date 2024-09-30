import { Routes, Route, Link, useLocation } from "react-router-dom";

import GSlesson1 from "/src/components/material/lessons/course1/GSlesson1.jsx";
import GSlesson2 from "/src/components/material/lessons/course1/GSlesson2.jsx";
import GSlesson3 from "/src/components/material/lessons/course1/GSlesson3.jsx";
import GSlesson4 from "/src/components/material/lessons/course1/GSlesson4.jsx";
import GSlesson5 from "/src/components/material/lessons/course1/GSlesson5.jsx";
import GSlesson6 from "/src/components/material/lessons/course1/GSlesson6.jsx";
import GSlesson7 from "/src/components/material/lessons/course1/GSlesson7.jsx";
import GSlesson8 from "/src/components/material/lessons/course1/GSlesson8.jsx";
import GSlesson9 from "/src/components/material/lessons/course1/GSlesson9.jsx";
import GSlesson10 from "/src/components/material/lessons/course1/GSlesson10.jsx";
import GSlesson11 from "/src/components/material/lessons/course1/GSlesson11.jsx";
import GSlesson12 from "/src/components/material/lessons/course1/GSlesson12.jsx";

const Course1 = () => {
  const location = useLocation();

  const isLessonRoute = location.pathname !== "/gettingstarted";

  return (
    <div>
      {!isLessonRoute && <h1>Getting Started</h1>}
      {!isLessonRoute && (
        <ul>
          <li>
            <Link to="programoverview" >
              <button>
                Seeing from the Stars: A High-Level Overview of the Program
              </button>
            </Link>
          </li>
          <li>
            <Link to="findingwhy">
              <button>Finding your Why</button>
            </Link>
          </li>
          <li>
            <Link to="historyofcs">
              <button>A History of Computer Science</button>
            </Link>
          </li>
          <li>
            <Link to="csvsswe">
              <button>CS Vs Software Engineering</button>
            </Link>
          </li>
          <li>
            <Link to="learninghowtolearn">
              <button>Learning how to Learn</button>
            </Link>
          </li>
          <li>
            <Link to="settingupos">
              <button>Setting up your environment: Operating Systems</button>
            </Link>
          </li>
          <li>
            <Link to="texteditors">
              <button>Text Editors and IDEs</button>
            </Link>
          </li>
          <li>
            <Link to="introtogit">
              <button>Saving Your Code: Git</button>
            </Link>
          </li>
          <li>
            <Link to="settingupgit">
              <button>Setting up Git</button>
            </Link>
          </li>
          <li>
            <Link to="timeandlifemanagement">
              <button>Time and Life Management</button>
            </Link>
          </li>
          <li>
            <Link to="introprojectmanagement">
              <button>Project Management Basics</button>
            </Link>
          </li>
          <li>
            <Link to="alookahead">
              <button>A Look Ahead</button>
            </Link>
          </li>
        </ul>
      )}

      {/* Lesson routes - these will only show when the path matches a lesson */}
      <Routes>
        <Route path="programoverview" element={<GSlesson1 nextLesson="/gettingstarted/findingwhy"/>} />
        <Route path="findingwhy" element={<GSlesson2 prevLesson="/gettingstarted/programoverview" nextLesson="/gettingstarted/historyofcs" />} />
        <Route path="historyofcs" element={<GSlesson3 prevLesson="/gettingstarted/findingwhy" nextLesson="/gettingstarted/csvsswe" />} />
        <Route path="csvsswe" element={<GSlesson4 prevLesson="/gettingstarted/historyofcs" nextLesson="/gettingstarted/learninghowtolearn" />} />
        <Route path="learninghowtolearn" element={<GSlesson5 prevLesson="/gettingstarted/csvsswe" nextLesson="/gettingstarted/settingupos" />} />
        <Route path="settingupos" element={<GSlesson6 prevLesson="/gettingstarted/learninghowtolearn" nextLesson="/gettingstarted/texteditors" />} />
        <Route path="texteditors" element={<GSlesson7 prevLesson="/gettingstarted/settingupos" nextLesson="/gettingstarted/introtogit" />} />
        <Route path="introtogit" element={<GSlesson8 prevLesson="/gettingstarted/texteditors" nextLesson="/gettingstarted/settingupgit" />} />
        <Route path="settingupgit" element={<GSlesson9 prevLesson="/gettingstarted/introtogit" nextLesson="/gettingstarted/timeandlifemanagement" />} />
        <Route path="timeandlifemanagement" element={<GSlesson10 prevLesson="/gettingstarted/settingupgit" nextLesson="/gettingstarted/introprojectmanagement" />} />
        <Route path="introprojectmanagement" element={<GSlesson11 prevLesson="/gettingstarted/timeandlifemanagement" nextLesson="/gettingstarted/alookahead" />} />
        <Route path="alookahead" element={<GSlesson12 prevLesson="/gettingstarted/introprojectmanagement" />} />
      </Routes>
    </div>
  );
};

export default Course1;
