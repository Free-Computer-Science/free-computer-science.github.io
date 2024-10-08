import { Link } from "react-router-dom";

const Itclesson2 = (props) => {
  return (
    <div>
      <h1>Installing and Setting up a C Development Environment</h1>
      <h2>Lesson Overview</h2>
      <ul>
        <li>
          Learn how compilers work and why we use them for programming languages
          like C
        </li>
        <li>
          Learn how to install gcc and use it compile &quot;Hello, World!&quot;
        </li>
      </ul>
      <h2>Resources:</h2>
      <ul>
        <li>
          {""}
          <a href="https://www.youtube.com/watch?v=N2y6csonII4&pp=ygUMZ2NjIGNvbXBpbGVy">
            How GCC Works
          </a>
        </li>
        <li>
          {""}
          <a href="https://www.youtube.com/watch?v=lrx5dcB_4Oo&pp=ygUMZ2NjIGNvbXBpbGVy">
            Another Video explaining how GCC works
          </a>
        </li>
        <li>
          {""}
          <a href="https://medium.com/@meghamohan/everything-you-want-to-know-about-gcc-fa5805452f96">
            A article digging deeper into GCC and what it is/does.
          </a>
        </li>
        <li>
          {""}
          <a href="https://www.youtube.com/watch?v=QXjU9qTsYCc&pp=ygUSaG93IGNvbXBpbGVyIHdvcmtz">
            A video explaining how computers compile code
          </a>
        </li>
      </ul>
      <h3>Learn:</h3>
      <p>
        Thanks to its age and its significance for every system, OS, and service
        imaginable, there are so, so, so, so, so, so, so many compilers for C.
        However, we are going to focus on just 1: GCC.
      </p>
      <p>
        We are focusing on GCC because it is prepackaged with the Linux
        Operating System and it can target a whole host of processors and
        machine architecture. It is so popular that Microsoft produced a variant
        for Windows that can compile C code for Windows devices without needing
        to modify the code in any way.
      </p>
      <h2 id="what-is-gcc-">What is GCC?</h2>
      <p>
        GCC stands for GNU Compiler Collection. It is a powerful tool that
        converts the code you write in C (or other languages like C++, Fortran,
        etc.) into something the computer can understand—machine code. Without a
        compiler like GCC, the computer wouldn&apos;t know how to run your C
        programs.
      </p>
      <h2> How Does GCC Work?</h2>
      <p>
        When you write a C program, it&apos;s in a form humans can read and
        understand. For example:
      </p>
      <pre>
        <code>
          {`#include <stdio.h>

int main() {
  int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  int i;

  for (i = 0; i < 10; i++) {
    printf("%i \n", arr[i]);
  }
}`}
        </code>
      </pre>
      <p>
        <i>
          Note: There are some bugs in this code! See if you can find them. We
          will talk about safe handling of arrays later in the course!
        </i>
      </p>
      <p>
        But computers don&apos;t understand this directly. The job of GCC is to
        translate this human-readable code into binary instructions (machine
        code) that the computer&apos;s processor can execute.
      </p>
      <p>
        Here&apos;s a step-by-step overview of what happens when you use GCC:
      </p>
      <p>
        Preprocessing: The code is first checked for things like macros and file
        includes. This step prepares the code for actual compilation.
        Compilation: The compiler translates your C code into assembly code,
        which is a low-level code closer to machine code. Assembly: The assembly
        code is then converted into machine code (object files), which the
        computer can almost understand but not fully yet. Linking: Finally, if
        your program uses external libraries (like printf from the C standard
        library), GCC links your code to those libraries and produces an
        executable file (e.g., program.exe or a.out).
      </p>
      <h3>Act</h3>
      <h4>Installing GCC</h4>
      <p>
        Installing GCC on Linux is usually pretty simple as more often than not
        it comes preinstalled with most linux operating systems. However there
        is a possibility that you may not have it. You can check by running
      </p>
      <pre>
        <code>{`sudo apt-get install gcc`}</code>
      </pre>
      You can check that it is installed by typing the following:
      <pre>
        <code>{`gcc --version`}</code>
      </pre>
      <h4>Using GCC: Basic Commands</h4>
      <p>
        GCC is used in the terminal to compile C programs, like Java. Let&apos;s
        start by building and compiling our first C program:{" "}
      </p>
      <pre>
        <code>
          {`#include <stdio.h>
          
          int main(){
          printf("Hello World!);
          return 0;}`}
        </code>
      </pre>
      <p>
        Go ahead and put that into a new file called &quot;hello.c&quot;, then
        in the terminal, navigate to its location and do the following:
      </p>
      <pre>
        <code>gcc -c hello.c ./a.out</code>
      </pre>
      <p>
        This does not look like a standard application executable that we may be
        used to, instead we have produced a file called a.out, this file is
        called an object file which is processed down to an intermediary state
        in assembly. as we will explore later both in this course and in a later
        compilers course that assembly still needs to processed down one more
        level to binary. As such, we should do this instead:
      </p>
      <pre>
        <code>
          {`gcc -o Hello hello.c
          ./Hello`}
        </code>
      </pre>
      <h4>Common GCC Flags</h4>
      <pre>
        <code>{`
-c: Compile the source files without linking. Produces object files (.o).
-S: Compile the source code into assembly language, outputting a .s file.
-E: Preprocess only. The output will be preprocessed source code.
-o [file]: Output the result to a specified file (e.g., -o my_program).
-g: Include debugging information in the compiled binary. This is useful when debugging with GDB.
-pg: Generate extra code for profiling with gprof.
-fprofile-arcs -ftest-coverage: Generate code coverage analysis, useful with gcov.`}</code>
      </pre>
      <p>
        Of course, there are plenty more, so always dig into the {""}
        <a href="https://gcc.gnu.org/onlinedocs/gcc-14.2.0/gcc/">
          documentation
        </a>{" "}
        or type &quot;man gcc&quot; into your terminal to learn more about
        anything else.
      </p>
      <h3>Setting up your IDE for C development</h3>
      Most modern IDEs and editors have some sort of plugin, linter or debugger
      for writing C code. I use a custom nvim setup for C, but you can use
      VSCode with the Microsoft C/C++ Plugin, or you can use the Clangd
      extension. Once you have that set up, we are ready to begin writing C
      code.
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

export default Itclesson2;
