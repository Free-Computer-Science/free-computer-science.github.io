import { Link } from "react-router-dom";

const Itclesson3 = (props) => {
  return (
    <div>
      <h1>The Basics of C</h1>
      <h2>Objective(s):</h2>
      <ul>
        <li>
          Cover Types, Variables, Types, Arrays, basic I/O, control flow,
          functions, loops, strings, and the basics of header files.
        </li>
      </ul>
      <h2>Overview</h2>
      <p>
        This is going to be the largest lesson with the most exercises. We are
        going to cover the absolute basics of C and make sure we have some solid
        groundwork before we dive into more difficult ideas like pointers
        (which, we promise, are not that complicated we just tend to over think
        them!).
      </p>
      <p>
        This will feel like a lot, but we want you to be able to really begin to
        think in C and see how it differs from other languages.
      </p>
      <h2>Lesson Content:</h2>
      <h3>1. Key Concepts to Know:</h3>
      <ul>
        <li>
          <strong>
            C is an Imperative language, meaning you are telling the computer
            what to do, step by step.
          </strong>
        </li>
        <li>
          <strong>
            C&apos;s basic data types are all numeric values that are then
            stored in memory, which means you can manipulate characters and
            arrays of characters with numbers.
          </strong>
        </li>
        <li>
          <strong>
            Functions are procedures and can recursively call themselves.
            Functions cannot be treated as values themselves, although there are
            some neat tricks that allow us to get around this problem.
          </strong>
        </li>
      </ul>
      <h2>Resources</h2>
      <p>Will list once I gather them</p>
      <h2>The Big Picture: C Is an Imperative Programming Language</h2>
      <p>
        As you might suspect by now, we are not going to run through the basics
        at a &quot;beginner&quot; level anymore. We should be well-aquainted
        with what functions, variables, control flow options, loops, arrays, and
        basic I/O are and should at the very least know how to use them in other
        languages.
      </p>
      <p>
        What we will instead be focusing on is what makes C different from Java
        and Python and why those things matter when programming in C. In a
        sense, we will start to move away from strictly programming, to thinking
        about theory. In a way, this is the difference between studying computer
        science and studying software engineering.
      </p>
      <p>
        The first thing we want to understand about C is that it was built for
        systems at a low-level, without needed to worry about assembly language.
        On top of this, C is also able to handle memory directly unlike the two
        previous languages we have looked at so far. As a result, there are some
        design principles we need to keep in mind as we learn more about the
        basics of C:
      </p>
      <ol>
        <li>
          Every primitave data type can be represented numerically and can be
          operated on with math/numbers.
        </li>
        <li>
          C is about following orders, step-by-step. Therefore, functions are
          actually procedures or routines, not functions like in python.
        </li>
        <li>
          Functions return values, but functions themselves cannot be assigned
          as values. We can sortof get away with this through function pointers,
          but we will cover those later in the course.
        </li>
        <li>
          We are able to get around a lot of the limitations of this approach
          through pointers, but as we keep these points in mind throughout the
          rest of the course, it will help us build better, smarter C code.{" "}
        </li>
      </ol>
      <h2>Types, Values and Variables in C</h2>
      <p>Like Java, vars must be declared with a type then initialized.</p>
      <p>Here is a list of the types</p>
      <p>Types are static... kinda.</p>
      <p>Types are assigned a certain number of bytes </p>
      <p>
        Types can be promoted implicitly but cannot be demoted the same way. You
        have to explicitly convert the type if you want to go from a higher rank
        type to a lower rank type.
      </p>
      <h2>The Theory Behind C: Abstract State Machines</h2>
      <p>We&apos;re about to get a little heady here, but bear with me for a
      second. The reason we can do any of this is because the C compiler can be
      thought of as an Abstract State Machine. We are not going to go over the
      nitty gritty of what that means, but we will discuss the very basics.
        We&apos;re about to get a little heady here, but bear with me for a
        second. The reason we can do any of this is because the C compiler can
        be thought of as an Abstract State Machine. We are not going to go over
        the nitty gritty of what that means, but we will discuss the very
        basics.
      </p>
      <p>
        I like to watch motorsports event and think of machines as moving cars.
        However, in the world of mechanical physics, machines are any devices
        that can perform work (aka, they can move and move other things).
        Similarly, a machine in the computer science sense can perform logical
        work like computation. A physical computer is the perfect embodiment of
        this idea: Able to take numbers, add them together, and put out the
        result.
      </p>
      <p>
        We will dive more into the theory of computation later, however what you
        need to know right now is the C compiler can also be thought of as a
        machine. This machine is not physical nor does it exist as an object you
        can hold or feel, therefore you can think of this machine as being an
        abstract machine.
      </p>
      <p>
        The C Machine (as we will call it for now) takes the values you put in,
        order by order, runs the computations you requested, then outputs the
        new values, called a <strong>state</strong>. Therefore, it is correct to
        call the C compiler an <strong>Abstract State Machine</strong> and this
        is important. How the ASM examines, handles, and deals with values, and
        their states and side effects will impact how values change throughout
        the compilation process and during the runtime of your program.
      </p>
      <p>
        Early on, we will not need to worry about this as much, but as our
        programs get more complex and require countless states, side effects,
        threads and exceptions (for example, when we are writing a toy operating
        system), knowing what the C compiler is doing at large will impact how
        we write our code.
      </p>
      <p>With this aside out of the way, let us discuss functions and basic I/O</p>
      <h2>Functions</h2>
      <p>procedural. Not first class. Can be made &quot;first class&quot; with pointers kinda-ish not really. must be declared and then defined, then implmented. Declaration happens at the top of the file.</p>
      <h2>Basic I/O</h2>
      <p>fgets, scanf, printf, getchar</p>
      <h2>Control Flow</h2>
      <p>If, switch, logical expressions, bitwise operators.</p>
      <h2>Arrays</h2>
      <p>static. Once the size is set, it cannot be changed (actually they can be made dynamic, but we will do that in a different project).</p>
      <h2>Strings</h2>
      <p>strings are arrays of chars with null terminators at the end. They can be messed with so will talk safety</p>
      <h2>Loops</h2>
      <p>for, while, do while. Infinite loops</p>
      <h2>Recursion</h2>
      <p>We have covered the theory of recursion already, so we will simply cover how it is implimented here</p>
      <p>
        In the next lesson, you&apos;ll dive deeper into [related topic] and see
        how it connects to what you learned today.
      </p>
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
      <h2>Assignment:</h2>
      <p>
        There will be a github repository full of exercises and examples. When I
        can get my ass away from work, I will build it. Do each example and run
        the check for them
      </p>
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

export default Itclesson3;
