import { Link } from "react-router-dom";
const Itclesson1 = (props) => {
  return (
    <div>
      <h1 id="an-overview-of-c">An Overview of C</h1>
      <p>
        Welcome to your journey into the world of C programming! Whether
        you&#39;re just starting out or looking to deepen your understanding of
        computer science fundamentals, this course will serve as your guide
        through one of the most powerful and influential programming languages
        ever created. C has stood the test of time as a crucial tool for
        understanding how software interacts with hardware, and it forms the
        backbone of many critical systems and technologies.
      </p>
      <p>
        By taking this course, you&#39;re not just learning how to write
        code—you&#39;re embarking on a path that will help you think like a computer
        scientist. You&#39;ll learn to break down problems, understand how
        systems work under the hood, and write programs that are efficient,
        clear, and effective.
      </p>
      <p>
        Throughout this course, you&#39;ll explore key topics ranging from the
        basics of syntax and control structures to more advanced concepts like
        memory management, data structures, and systems programming. Each lesson
        is designed to build upon the last, giving you a solid foundation as you
        progress.
      </p>
      <h2 id="what-makes-c-different-">What Makes C Different?</h2>
      <p>
        As you will quickly see, C is a far different beast from what we have
        dealt with before. If you are coming from the Java and Python courses,
        you will notice the following differences:
      </p>
      <ol>
        <li>
          Manual Memory Management: C does not have garbage collection. Python
          and Java both automatically handle the memory for you, thus you
          haven&#39;t had to think about it until now. While this is fine for
          just about anything normal, when working with a low-level system like
          a CPU, it is crucial you handle memory manually. Mismanaged, low-level
          memory can permanently destroy a computer.
        </li>
        <li>
          Non-Object Oriented Programming: While you have already been able to
          somewhat get away from objects with Python, C is 100% not
          object-oriented. Everything that happens in C is built around
          procedures (which we call functions, but these aren&#39;t the same as
          methods in Java, or functions in other languages like Ocaml).
        </li>
        <li>
          Strings as arrays and differences in array handling: You will learn
          that strings are not their own type in C, rather they are arrays of
          strings with a special character at the end.
        </li>
        <li>
          Procedural programming design: As stated above, C is written with
          paradigms that are different from Java or Python. These will be
          crucial later on down the road when we look at the theory and analysis
          of programming languages themselves.
        </li>
      </ol>
      <h3 id="-why-c-">
        <strong>Why C?</strong>
      </h3>
      <h3 id="-why-c-">
        <strong>Why C?</strong>
      </h3>
      <p>
        Why should you invest time in learning C when there are so many modern
        programming languages? The answer is simple: C remains the{" "}
        <strong>lingua franca of computer science</strong>. Understanding C
        gives you access to a world of deeper computer science concepts, such
        as:
      </p>
      <ul>
        <li>
          <p>
            <strong>Memory Management</strong>: One of the most important skills
            in systems programming is the ability to manage memory effectively.
            In C, you have direct control over memory, which helps you gain an
            intuitive understanding of how programs interact with hardware.
          </p>
        </li>
        <li>
          <p>
            <strong>Historical Significance</strong>: C is the foundation for
            many modern languages. Languages like C++, Java, and even Python owe
            much of their syntax and underlying structure to C. By learning C,
            you&#39;re engaging with the history of programming itself.
          </p>
        </li>
        <li>
          <strong>Systems and Networking</strong>: Without C, many critical
          areas of computing would be off-limits. From operating systems to
          networking and distributed systems, C plays a pivotal role as the
          foundational language that makes up a majority of the hardware-level
          systems and services. Learning it opens the doors to understanding
          these areas at a fundamental level.
        </li>
        <li>
          <strong>Transferable Skills</strong>: Once you master C, you&#39;ll find
          that learning other programming languages becomes much easier. C&#39;s
          minimalistic yet powerful nature forces you to think carefully about
          how you write code, making you a better programmer overall. If you can
          write efficient code in C, you can learn to write code in almost any
          language.
        </li>
        <li>
          <strong>It&#39;s Not as Scary as It Seems</strong>: While C has a
          reputation for being difficult or &quot;old school,&quot; it&#39;s a
          language that rewards attention to detail and offers immense
          satisfaction when mastered. It&#39;s just that C requires you to think
          about the low-level details, which ultimately makes you a better
          developer.
        </li>
      </ul>
      <h2 id="how-this-course-will-work">How This Course Will Work</h2>
      <p>
        It is easy to sit and watch videos or to just read course material. It
        is, however, a lot harder, to build things. As a result, we have a
        number of exercises, projects, and problems for you to work through. The
        more you <strong>do</strong> the better you will <strong>know</strong>{" "}
        (and there is a name for this: Grokking). I want you to intuitively
        grasp and understand why and how this language was created the way it
        was.
      </p>
      <p>
        As such, we are going to introduce the project first, then introduce the
        ideas that you will need to know in order to succeed at completing the
        project.{" "}
      </p>
      <h2 id="leetcode-hackerrank-and-exercism">
        Leetcode HackerRank and Exercism
      </h2>
      <p>
        If you want to have extra practice problems outside of this course,
        there are 3 websites we recommend for sharpening your C programming
        skills.
      </p>
      <ul>
        <li>
          <a href="https://leetcode.com/">Leetcode</a>
        </li>
        <li>
          <a href="https://exercism.org/">Exercism</a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/">Hacker Rank</a>
        </li>
      </ul>
      <p>
        There are of course a lot of other exercises, practice problems, and
        sites, but these 3 have been fairly standard for practicing and
        developing knowledge a variety of languages.
      </p>
      <h2 id="resources">Resources</h2>
      <p>
        It is normal to feel somewhat overwhelmed by learning C, so below are
        some extra resources for you to use while you are going through the
        course:
        <em>
          A note about &quot;Tutorial Hell&quot;: It is common that individuals
          who learn software development through youtube tutorial videos to get
          caught in a loop of always learning, but never building actual code.
          As a result, the learner never actually learns the skills needed to be
          independent and they get caught in a loop of hunting down a tutorial,
          getting stuck when building a project, hunt down another tutorial, and
          so on and so forth.
        </em>
      </p>
      <p>
        If you plan on using these resources, use them interspersed with your
        projects.
      </p>
      <ul>
        <li>
          <p>
            C Programming Tutorial, Free Code Camp, 4 Hours,{" "}
            <a href="https://www.youtube.com/watch?v=KJgsSFOSQv0">
              Youtube Link
            </a>
          </p>
          <ul>
            <li>
              C Programming Full Course for free, Bro Code, 3 Hours,{" "}
              <a href="https://www.youtube.com/watch?v=87SH2Cn0s9A&amp;t=6s">
                Youtube Link
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p>
            C All-in-One Course, Caleb Curry, 10 Hours,{" "}
            <a href="https://www.youtube.com/watch?v=Bz4MxDeEM6k&amp;t=1s">
              Youtube Link
            </a>
          </p>
        </li>
        <li>
          <p>
            Pointers in C Course, Free Code Camp, 3 Hours,{" "}
            <a href="https://www.youtube.com/watch?v=MIL2BK02X8A">
             Youtube Link
            </a>
          </p>
        </li>
      </ul>
      <h4 id="-classic-books-in-c-programming-">
        <strong>Classic Books in C Programming</strong>
      </h4>
      <p>
        {" "}
        These books are also classic resources for helping you progress further
        in your knowledge in C. This course follows &quot;Modern C&quot; fairly
        closely as it more accurately represents the modern standard for C
        programming. Feel free to pick any of them up as you work through the
        projects and exercises.
      </p>
      <ol>
        <li>
          <strong>
            &quot;The C Programming Language&quot; by Brian W. Kernighan and
            Dennis M. Ritchie
          </strong>
        </li>
        <li>
          Often referred to as <em>K&amp;R</em>, this is the definitive book on
          C by the creators of the language. It covers the fundamentals with
          </li>
        <li>
          <strong>
            &quot;C Programming: A Modern Approach&quot; by K.N. King
          </strong>
        </li>
        <li>
          A comprehensive textbook that provides a solid introduction to C
          programming, suitable for both beginners and experienced programmers
          looking for a thorough review.
        </li>
        <li>
          <strong>&quot;Modern C&quot; by Jens Gustedt</strong>
        </li>
        <li>
          This book brings C into the modern era, covering newer standards like
          C11 and C18, which help you write safer, more portable, and efficient
          C code.
        </li>
      </ol>
      <p>When you are ready, hit continue to start down the Systems Trail!</p>

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

export default Itclesson1;
