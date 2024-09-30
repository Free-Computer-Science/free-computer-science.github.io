import Header from "./components/global/Header.jsx";
import Footer from "./components/global/Footer.jsx";
import About from "./components/static/shared/About.jsx";
import Contribute from "./components/static/shared/Contribute.jsx";
import Terms from "./components/static/footer/Terms.jsx";
import Team from "./components/static/footer/Team.jsx";
import FAQ from "./components/static/footer/Faq.jsx";
import Support from "./components/static/shared/Support.jsx";
import Privacy from "./components/static/footer/Privacy.jsx";
//import all paths
import Allpaths from "./components/material/Allpaths.jsx";
import Path1 from "/src/components/material/paths/Path1.jsx";

//import all courses
import Course1 from "/src/components/material/courses/Gettingstarted.jsx";
import Course4 from "/src/components/material/courses/Proginc.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/allpaths" element={<Allpaths />} />
          <Route path="/foundations" element={<Path1 />} />
          <Route path="gettingstarted/*" element={<Course1 />} />
          <Route path="/proginc" element={<Course4 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

const Home = () => (
  <section>
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
            This site will function similarly The Odin Project, but rather than
            focusing on software engineering, we&apos;ll dive into the theory,
            math, and concepts that allow us to look deeper under the hood.
            Using blue collar trades again: If a mechanic knows how to build an
            engine, Computer Scienctists and Engineers know how to design one,
            and understand the physics of how to make them better. This
            isn&apos;t to say a mechanic can&apos;t know, it&apos;s just that their
            domains are different!
          </p>
          <h1>HOWEVER...</h1>
          <p>
            Right now, this site is work in progress, with new features being
            added all the time. Please check back as we update the site with
            more content, courses, pathes, and features that can make your
            learning experience better!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default App;
