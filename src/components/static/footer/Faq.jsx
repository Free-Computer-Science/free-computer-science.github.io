

const Faq = () => {

    return (
        <div>
            <h1>Facts and Questions</h1>
    <p>Having questions is good! Having questions about the website is even better. Below is some of the questions you
        might ask while exploring the site. If you have a question that isn&apos;t listed out by the FAQ please feel free
        to <strong>contact</strong> me if needed!</p>
    <h2>1. This site is clearly not written in a
        React or Vue frontend. Why?</h2>
    <p>First and foremost, I am not a web developer. I have experience with Javascript and React, however after fiddling
        with a Vue.js based version of this site, I decided to go with a standard vanilla, almost mid-2000&apos;s
        approach to the website for several reasons: </p>
    <ol>
        <li>First, my primary focus is making this site as accessible as possible for everyone. Vue, React, and Next
            were overly complex and outpaced my needs in this regards. Are they highly scalable? Yes. Are they
            customizable? Sure. Am I decently versed enough in them to ad hoc a website together? Maybe. But for the
            sake of keeping it simple, I&apos;m sticking with standard JS/HTML/CSS for now.</li>
        <li>I&apos;m building this site on github pages. As a result, I cannot make server calls or store data. Thus most
            of my &quot;data&quot; lives in json files (which is really just a way to route things along or pull up
            information as needed). Could I have used Vue with its powerful router? Yes. Do I need Vue&apos;s powerful
            router even remotely? No.</li>
        <li>This is as much a learning experience for me as much it might be for anyone. I&apos;m a backend developer. I
            deal with data. Pretty things aren&apos;t my forte. I&apos;m working on it! I had issues with Vue and React
            both working with Github pages and decided that for the sake of what I was wanting to do right now,
            Vanilla.js was the way to go</li>
    </ol>
    <h2>2. Why is the website free? What&apos;s the catch?</h2>
    <p>There&apos;s no catch! The mission of this site is to provide accessible, quality computer science education to
        everyone, regardless of financial status. I believe that education should be open to all and that
        knowledge-sharing benefits everyone. The site is free and open-source because I want to empower self-taught
        learners, hobbyists, and professionals without any barriers to entry. You don&apos;t need to worry about hidden fees
        or locked content—everything is available for anyone who wants to learn.</p>
    <h2>3. Who is this website for?</h2>
    <p>This website is for anyone interested in computer science! Whether you&apos;re a beginner just dipping your toes into
        programming, someone who is self-taught and looking for more structure, or even a professional looking for a
        refresher on certain topics, there&apos;s something here for you. I assume a variety of experience levels, and the
        content is designed to grow with you as you develop your skills.</p>
    <h2>4. Will there be any certifications or degrees
        offered?</h2>
    <p>At this time, there are no plans to offer formal certifications or degrees. The focus of this website is purely
        educational, designed to help you build a solid foundation in computer science concepts and critical thinking.
        While there may be projects, quizzes, and assessments in the future, these are meant to aid in your learning,
        not as a formal credential.</p>
    <h2>5. How is the content organized? How should I follow
        it?</h2>
    <p>The content is organized into &quot;paths&quot; that contain courses, and within those courses, you&apos;ll find
        lessons and projects. Each lesson is designed to build upon the previous one, so it&apos;s best to follow a course
        path from start to finish if you&apos;re new to a subject. That said, you&apos;re free to jump around and explore
        different topics as you see fit. I recommend starting at the level that matches your experience and interest.
    </p>
    <h2>6. How often is content updated?</h2>
    <p>I&apos;m constantly working to improve and expand the content on this site. Updates will happen as I continue to
        refine existing lessons, add new topics, and respond to user feedback. The goal is to keep the site fresh and
        relevant to current trends in computer science, so you can expect periodic updates.</p>
    <h2>7. How can I contribute or get involved?</h2>
    <p>Since the website is 100% open-source, you&apos;re welcome to contribute to the project! Whether it&apos;s fixing bugs,
        suggesting new topics, or adding additional resources, your help is appreciated. You can find the source code on
        GitHub, where you can submit issues or pull requests. Additionally, I encourage community involvement, so feel
        free to reach out if you have ideas on how we can improve the platform together.</p>
        </div>
    );
};

export default Faq;