import Header from "./components/global/Header.jsx";
import Footer from "./components/global/Footer.jsx";
import About from "./components/static/shared/About.jsx";
import Contribute from "./components/static/shared/Contribute.jsx";
import Terms from "./components/static/footer/Terms.jsx";
import Team from "./components/static/footer/Team.jsx";
import FAQ from "./components/static/footer/Faq.jsx";
import Support from "./components/static/shared/Support.jsx";
import Privacy from "./components/static/footer/Privacy.jsx";
//import all trails
import Alltrails from "./components/material/Alltrails.jsx";
import Trails1 from "/src/components/material/trails/Trails1.jsx";
import Trail2 from "/src/components/material/trails/Trail2.jsx";

//import all courses
import Course1 from "/src/components/material/courses/Gettingstarted.jsx";
import Progincbasics from "/src/components/material/courses/Proginc.jsx";
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
          {/*Trail Routes */}
          <Route path="/alltrails" element={<Alltrails />} />
          <Route path="/foundations" element={<Trails1 />} />
          <Route path="/systems" element={<Trail2 />} />
          {/*Camp Routes */}
          <Route path="gettingstarted/*" element={<Course1 />} />
          <Route path="progincbasics/*" element={<Progincbasics />} />
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
          From Systems to Algorithms, learn core skills in Computer Science,
          completely for free and with open source resources.
        </p>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h1>It&apos;s Time to Start Your Journey...</h1>
          <p>
            Hiking a mountain is no easy task. Computers and Computer Systems
            have grown incredibly complicated, vast, and completely connected to
            our lives. Mobile Applications, websites, video games, even our cars
            and equipment have technology embedded in them. However it can all
            seem so complicated, scary, and out-of-reach: Most people don&apos;t
            learn computer science unless they are in college, or work hard to
            find and gather resources for themselves.
          </p>
          <p>
            Start your Journey here and learn the heart of how machines work,
            how to program them, and learn what students learn in university
          </p>
          <h1>Find your Trail</h1>
          <p>
            Learning computer science on your own can seem daunting, like
            climbing a large moutain. If you want to start but don&apos;t know where
            to begin, the Introductory Trail is right for you. If you are a high
            school or secondary school student, there is a path geared towards
            you! If you are no longer in high school or secondary school, we&apos;ll
            dive a bit more deeper (although we won&apos;t tell anyone if you hiked
            the first trail!).
          </p>
          <p>After completing the introductory trail a host of new, more challenging trails open up:</p>
          <ul>
            <li>Algorithms and Structures: The heart of programming</li>
            <li>Systems: What makes your computer run, right now!</li>
          </ul>
          <p>Trails are being opened up all the time! We&apos;ll let you know when more do! Happy Climbing!</p>
        </div>
      </div>
    </div>
  </section>
);

export default App;
