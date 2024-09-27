import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <div id="home-page">
        <Header />
        <div>
          <h1>
            A <span>Computer Science Education,</span>
            <span>For Free</span>
          </h1>
          <div>
            <p>
              Everything Computer Science Majors learn, open source and free to
              learn
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>How it Works</h1>
              <p>
                This site will function similarly{" "}
                <a href="www.theodinproject.com">The Odin Project</a>, but
                rather than focusing on software engineering, we&aposll dive
                into the theory, math, and concepts that allow us to look deeper
                under the hood. Using blue collar trades again: If a mechanic
                knows how to build an engine, Computer Scienctists and Engineers
                know how to design one, and understand the physics of how to
                make them better. This isn&apost to say a mechanic can&apost
                know, it&aposs just that their domains are different!
              </p>
              <h1>HOWEVER...</h1>
              <p>
                Right now, this site is work in progress, with new features
                being added all the time. Please check back as we update the
                site with more content, courses, pathes, and features that can
                make your learning experience better!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
