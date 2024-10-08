import { Routes, Route, Link, useLocation } from "react-router-dom";

import Itclesson1 from "/src/components/material/lessons/basicsofc/Itclesson1.jsx";
import Itclesson2 from "/src/components/material/lessons/basicsofc/Itclesson2.jsx";
import Itclesson3 from "/src/components/material/lessons/basicsofc/Itclesson3.jsx";
import Itclesson4 from "/src/components/material/lessons/basicsofc/Itclesson4.jsx";
import Itclesson5 from "/src/components/material/lessons/basicsofc/Itclesson5.jsx";
import Itclesson6 from "/src/components/material/lessons/basicsofc/Itclesson6.jsx";
import Itclesson7 from "/src/components/material/lessons/basicsofc/Itclesson7.jsx";
import Itclesson8 from "/src/components/material/lessons/basicsofc/Itclesson8.jsx";
import Itclesson9 from "/src/components/material/lessons/basicsofc/Itclesson9.jsx";
import Itclesson10 from "/src/components/material/lessons/basicsofc/Itclesson10.jsx";
import Itclesson11 from "/src/components/material/lessons/basicsofc/Itclesson11.jsx";
import Itclesson12 from "/src/components/material/lessons/basicsofc/Itclesson12.jsx";
import Itclesson13 from "/src/components/material/lessons/basicsofc/Itclesson13.jsx";
import Itclesson14 from "/src/components/material/lessons/basicsofc/Itclesson14.jsx";
import Itclesson15 from "/src/components/material/lessons/basicsofc/Itclesson15.jsx";
{
  /*Import Projects */
}
import Itcproject1 from "/src/components/material/lessons/basicsofc/projects/Itcproject1.jsx";
const Progincbasics = () => {
  const location = useLocation();

  const isLessonRoute = location.pathname !== "/progincbasics";

  return (
    <div>
      {!isLessonRoute && <h1>Programming in C: The Basics</h1>}
      {!isLessonRoute && (
        <div>
          <ul>
            <li>
              <Link to="overviewofc">
                <button>Overview of C</button>
              </Link>
            </li>

            <li>
              <Link to="installingc">
                <button>Installing C</button>
              </Link>
            </li>
            <li>
              <Link to="basicsofc">
                <button>Basics of C</button>
              </Link>
            </li>
            <li>
              <Link to="arraysinc">
                <button>Arrays in C</button>
              </Link>
            </li>
            <li>
              <Link to="structsinc">
                <button>Structs in C</button>
              </Link>
            </li>
            <li>
              <Link to="buildingtypes">
                <button>Custom Types</button>
              </Link>
            </li>
            <li>
              <Link to="arrayxstructs">
                <button>Arrays with Structures</button>
              </Link>
            </li>
            <li>
              <Link to="enums">
                <button>Enums</button>
              </Link>
            </li>
            <li>
              <Link to="memorybasics">
                <button>Memory Basics</button>
              </Link>
            </li>
            <li>
              <Link to="pointerbasics">
                <button>Pointer Basics</button>
              </Link>
            </li>
            <li>
              <Link to="functionpointers">
                <button>Function Pointers</button>
              </Link>
            </li>
            <li>
              <Link to="dynamicmemory">
                <button>Dynamic Memory</button>
              </Link>
            </li>
            <li>
              <Link to="arrayxmemory">
                <button>Arrays and Pointers</button>
              </Link>
            </li>
            <li>
              <Link to="structxmemory">
                <button>Structs and Pointers</button>
              </Link>
            </li>
            <li>
              <Link to="conclusion">
                <button>Conclusion</button>
              </Link>
            </li>
          </ul>
          <h2>projects:</h2>
          <ul>
            <li>
              <Link to="3simpleprojects"><button>3 short projects</button></Link>
            </li>
            <li>
              <p>basic calculator</p>
            </li>
            <li>
              <p>temperature converter</p>
            </li>
            <li>
              <p>2 sorting projects</p>
            </li>
            <li>
              <p>Prime Number Generator</p>
            </li>
            <li>
              <p>a mini string manipulation library</p>
            </li>
            <li>
              <p>dynamic memory allocator</p>
            </li>
            <li>
              <p>custom linked list implementation</p>
            </li>
            <li>
              <p>a simple text editor</p>
            </li>
            <li>
              <p>Number Guessing Game</p>
            </li>
            <li>
              <p>Tic-Tac-Toe</p>
            </li>
            <li>
              <p>Rock, Paper, Scissors</p>
            </li>
            <p>Hangman</p>
          </ul>
        </div>
      )}

      <Routes>
        <Route
          path="overviewofc"
          element={<Itclesson1 nextLesson="/progincbasics/installingc" />}
        />
        <Route
          path="installingc"
          element={
            <Itclesson2
              prevLesson="/progincbasics/overviewofc"
              nextLesson="/progincbasics/3simpleprojects"
            />
          }
        />
        <Route
          path="basicsofc"
          element={
            <Itclesson3
              prevLesson="/progincbasics/3simpleprojects"
              nextLesson="/progincbasics/arraysinc"
            />
          }
        />
        <Route
          path="arraysinc"
          element={
            <Itclesson4
              prevLesson="/progincbasics/basicsofc"
              nextLesson="/progincbasics/structsinc"
            />
          }
        />
        <Route
          path="structsinc"
          element={
            <Itclesson5
              prevLesson="/progincbasics/arraysinc"
              nextLesson="/progincbasics/buildingtypes"
            />
          }
        />
        <Route
          path="buildingtypes"
          element={
            <Itclesson6
              prevLesson="/progincbasics/structsinc"
              nextLesson="/progincbasics/arrayxstructs"
            />
          }
        />
        <Route
          path="arrayxstructs"
          element={
            <Itclesson7
              prevLesson="/progincbasics/buildingtypes"
              nextLesson="/progincbasics/enums"
            />
          }
        />
        <Route
          path="enums"
          element={
            <Itclesson8
              prevLesson="/progincbasics/arrayxstructs"
              nextLesson="/progincbasics/memorybasics"
            />
          }
        />
        <Route
          path="memorybasics"
          element={
            <Itclesson9
              prevLesson="/progincbasics/enums"
              nextLesson="/progincbasics/pointerbasics"
            />
          }
        />
        <Route
          path="pointerbasics"
          element={
            <Itclesson10
              prevLesson="/progincbasics/memorybasics"
              nextLesson="/progincbasics/functionpointers"
            />
          }
        />
        <Route
          path="functionpointers"
          element={
            <Itclesson11
              prevLesson="/progincbasics/pointerbasics"
              nextLesson="/progincbasics/dynamicmemory"
            />
          }
        />
        <Route
          path="dynamicmemory"
          element={
            <Itclesson12
              prevLesson="/progincbasics/functionpointers"
              nextLesson="/progincbasics/arrayxmemory"
            />
          }
        />
        <Route
          path="arrayxmemory"
          element={
            <Itclesson13
              prevLesson="/progincbasics/dynamicmemory"
              nextLesson="/progincbasics/structxmemory"
            />
          }
        />
        <Route
          path="structxmemory"
          element={
            <Itclesson14
              prevLesson="/progincbasics/arrayxmemory"
              nextLesson="/progincbasics/conclusion"
            />
          }
        />
        <Route
          path="conclusion"
          element={
            <Itclesson15 prevLesson="/progincbasics/structxmemory" />
          }
        />
        {/* Project Routes */}
        <Route
          path="3simpleprojects"
          element={
            <Itcproject1
              prevLesson="/progincbasics/installingc"
              nextLesson="/progincbasics/basicsofc"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Progincbasics;
