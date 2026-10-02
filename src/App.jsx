import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const courses = [
  { id: 1, title: "Class 1 Foundation", icon: "bi-stars", desc: "Strong basics in English, Maths, Hindi and General Knowledge.", level: "Class 1" },
  { id: 2, title: "English Learning", icon: "bi-translate", desc: "Reading, vocabulary, grammar and everyday spoken English.", level: "All levels" },
  { id: 3, title: "Mathematics", icon: "bi-calculator", desc: "Concepts, practice questions and problem-solving skills.", level: "Primary" },
  { id: 4, title: "General Knowledge", icon: "bi-globe2", desc: "Fun GK lessons and quizzes for young learners.", level: "Primary" }
];

const materials = [
  ["English Alphabet & Phonics", "PDF", "bi-file-earmark-pdf"],
  ["Class 1 Maths Worksheet", "Worksheet", "bi-file-earmark-text"],
  ["GK Practice Questions", "Practice", "bi-journal-check"],
  ["Hindi Reading Practice", "Notes", "bi-book"]
];

function Layout({ children }) {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <span className="brand-mark"><i className="bi bi-mortarboard-fill"/></span>
          <span>Bhargava <span className="brand-accent">Institute</span></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
            <NavLink className="nav-link" to="/subjects">Subjects</NavLink>
            <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
            <NavLink className="nav-link" to="/materials">Study Material</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <Link className="btn btn-primary rounded-pill px-4 ms-lg-2" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    {children}
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <h4 className="fw-bold">Bhargava Institute</h4>
            <p className="text-white-50 mb-0">Learn • Practice • Grow</p>
            <p className="text-white-50 mt-3">Simple, engaging and practical learning for every Student.</p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <Link to="/courses">Courses</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/materials">Study Material</Link>
          </div>
          <div className="col-md-3">
            <h6>Contact</h6>
            <p className="text-white-50 mb-1"><i className="bi bi-envelope me-2"/>krishnabhargv@gmail.com</p>
            <p className="text-white-50"><i className="bi bi-geo-alt me-2"/>Bar, Lalitpur</p>
          </div>
        </div>
        <hr className="border-secondary"/>
        <small className="text-white-50">© {new Date().getFullYear()} Bhargava Institute. All rights reserved.</small>
      </div>
    </footer>
  </>;
}

function Home() {
  return <main>
    <section className="hero">
      <div className="container py-5">
        <div className="row align-items-center min-vh-75 g-5">
          <div className="col-lg-7">
            <span className="badge-soft"><i className="bi bi-stars me-2"/>Learning made simple</span>
            <h1 className="display-3 fw-bold mt-4">Learn today.<br/><span className="text-gradient">Grow every day.</span></h1>
            <p className="lead text-secondary mt-4 col-lg-10">Welcome to <strong>Bhargava Institute</strong> — a friendly place for students to learn concepts, practice regularly and build confidence.</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/courses" className="btn btn-primary btn-lg rounded-pill px-4">Explore Courses <i className="bi bi-arrow-right ms-2"/></Link>
              <Link to="/quiz" className="btn btn-outline-dark btn-lg rounded-pill px-4">Try a Quiz</Link>
            </div>
            <div className="row mt-5 g-3">
              <div className="col-4"><div className="stat"><strong>4+</strong><span>Courses</span></div></div>
              <div className="col-4"><div className="stat"><strong>100+</strong><span>Questions</span></div></div>
              <div className="col-4"><div className="stat"><strong>24×7</strong><span>Learning</span></div></div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card shadow-lg">
              <div className="hero-icon"><i className="bi bi-mortarboard-fill"/></div>
              <h3 className="fw-bold mt-4">Learning Journey</h3>
              <div className="journey">
                {["Learn the concept", "Practice with examples", "Take a quiz", "Track your progress"].map((x,i)=>
                  <div className="journey-item" key={x}><span>{i+1}</span>{x}<i className="bi bi-check2-circle ms-auto"/></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="What we offer" title="Everything students need to learn better" text="Start with the basics and gradually build strong concepts through practice."/>
        <div className="row g-4 mt-2">
          {[
            ["bi-book-half","Structured Courses","Learn topic-by-topic with simple explanations."],
            ["bi-pencil-square","Practice","Worksheets and questions to strengthen concepts."],
            ["bi-patch-question","Interactive Quizzes","Test understanding and get an instant score."],
            ["bi-graph-up-arrow","Grow with Confidence","Build consistent learning habits."]
          ].map(([icon,title,desc])=><div className="col-md-6 col-lg-3" key={title}>
            <div className="feature-card h-100"><div className="feature-icon"><i className={"bi "+icon}/></div><h5>{title}</h5><p>{desc}</p></div>
          </div>)}
        </div>
      </div>
    </section>
    <section className="section bg-light">
      <div className="container">
        <SectionHeading eyebrow="Popular" title="Start learning" text="Choose a course and begin your learning journey."/>
        <div className="row g-4 mt-2">{courses.map(c=><CourseCard course={c} key={c.id}/>)}</div>
      </div>
    </section>
  </main>;
}

function SectionHeading({eyebrow,title,text}) {
  return <div className="text-center mx-auto section-heading"><span className="eyebrow">{eyebrow}</span><h2 className="fw-bold mt-2">{title}</h2><p className="text-secondary">{text}</p></div>;
}

function CourseCard({course}) {
  return <div className="col-md-6 col-lg-3"><div className="course-card h-100">
    <div className="course-icon"><i className={"bi "+course.icon}/></div>
    <span className="small text-secondary">{course.level}</span>
    <h5 className="fw-bold mt-2">{course.title}</h5><p>{course.desc}</p>
    <Link to={"/courses/"+course.id} className="stretched-link text-decoration-none">View course <i className="bi bi-arrow-right"/></Link>
  </div></div>;
}

function Courses() {
  return <main className="page"><div className="container">
    <PageTitle eyebrow="Learning" title="Our Courses" text="Simple courses designed to make learning enjoyable and effective."/>
    <div className="row g-4 mt-3">{courses.map(c=><CourseCard course={c} key={c.id}/>)}</div>
  </div></main>;
}

function CourseDetails({id}) {
  const course = courses.find(c=>String(c.id)===String(id)) || courses[0];
  return <main className="page"><div className="container">
    <Link to="/courses" className="text-decoration-none"><i className="bi bi-arrow-left"/> Back to courses</Link>
    <div className="detail-header mt-3">
      <div className="course-icon large"><i className={"bi "+course.icon}/></div>
      <div><span className="eyebrow">{course.level}</span><h1 className="fw-bold">{course.title}</h1><p className="text-secondary mb-0">{course.desc}</p></div>
    </div>
    <div className="row g-4 mt-3">
      {["Introduction & Basics","Concept Building","Guided Practice","Revision & Quiz"].map((x,i)=>
        <div className="col-md-6" key={x}><div className="lesson-card"><span>{String(i+1).padStart(2,"0")}</span><div><h5>{x}</h5><p>Learn this topic with simple examples and practice questions.</p></div><i className="bi bi-chevron-right"/></div></div>
      )}
    </div>
    <div className="callout mt-5"><i className="bi bi-lightbulb-fill"/><div><strong>Learning tip</strong><p className="mb-0">Study a little every day. Consistency is more important than studying everything at once.</p></div></div>
  </div></main>;
}

function Subjects() {
  const subjects = [
    ["Mathematics","bi-calculator","Class 9th to 12th mathematics concepts and practice."],
    ["Physics","bi-thermometer","Class 9th to 12th physics concepts and practice."],
    ["Chemistry","bi-thermometer","Class 9th to 12th chemistry concepts and practice."],
    ["English","bi-book","Class 9th to 12th English grammar and comprehension."],
    ["EVS","bi-tree","Our environment, plants, animals and people."],
    ["Computer","bi-laptop","Digital awareness and basic computer skills."]
  ];
  return <main className="page"><div className="container"><PageTitle eyebrow="Explore" title="Subjects" text="Choose a subject and strengthen your fundamentals."/>
    <div className="row g-4 mt-3">{subjects.map(([name,icon,desc])=><div className="col-md-6 col-lg-4" key={name}><div className="subject-card"><div className="feature-icon"><i className={"bi "+icon}/></div><h5>{name}</h5><p>{desc}</p><button className="btn btn-sm btn-outline-primary rounded-pill">Explore</button></div></div>)}</div>
  </div></main>;
}

function Quiz() {
  const questions = [
    {q:"Which planet do we live on?", options:["Mars","Earth","Jupiter","Venus"], answer:"Earth"},
    {q:"What is 5 + 3?", options:["6","7","8","9"], answer:"8"},
    {q:"Which is a fruit?", options:["Carrot","Potato","Apple","Spinach"], answer:"Apple"}
  ];
  const [answers,setAnswers]=React.useState({});
  const [submitted,setSubmitted]=React.useState(false);
  const score=questions.reduce((n,q,i)=>n+(answers[i]===q.answer?1:0),0);
  return <main className="page"><div className="container quiz-wrap"><PageTitle eyebrow="Practice" title="Quick Quiz" text="Answer the questions and check your score."/>
    <div className="quiz-box mt-4">{questions.map((q,i)=><div className="question" key={q.q}><div className="q-number">{i+1}</div><div className="flex-grow-1"><h5>{q.q}</h5><div className="row g-2">{q.options.map(o=><div className="col-sm-6" key={o}><button onClick={()=>!submitted&&setAnswers({...answers,[i]:o})} className={"option-btn "+(answers[i]===o?"selected ":"")+(submitted&&o===q.answer?"correct":"")}>{o}</button></div>)}</div></div></div>)}
      <div className="text-center mt-4"><button className="btn btn-primary rounded-pill px-5" onClick={()=>setSubmitted(true)}>Submit Quiz</button>{submitted&&<div className="score mt-3">Your score: <strong>{score}/{questions.length}</strong></div>}</div>
    </div>
  </div></main>;
}

function Materials() {
  return <main className="page"><div className="container"><PageTitle eyebrow="Resources" title="Study Material" text="Notes, worksheets and practice resources for students."/>
    <div className="row g-3 mt-3">{materials.map(([title,type,icon])=><div className="col-md-6" key={title}><div className="material-card"><i className={"bi "+icon}/><div><h6 className="mb-1">{title}</h6><span>{type}</span></div><button className="btn btn-light rounded-circle"><i className="bi bi-download"/></button></div></div>)}</div>
    <div className="empty-note mt-4"><i className="bi bi-info-circle me-2"/>These are sample resources. Actual PDFs and worksheets can be added later through the admin panel.</div>
  </div></main>;
}

function About() {
  return <main className="page"><div className="container"><PageTitle eyebrow="About us" title="Welcome to Bhargava Institute" text="A simple learning platform focused on strong foundations and regular practice."/>
    <div className="row g-5 align-items-center mt-2"><div className="col-lg-6"><div className="about-art"><i className="bi bi-mortarboard-fill"/></div></div><div className="col-lg-6"><h3 className="fw-bold">Learn • Practice • Grow</h3><p className="text-secondary">Bhargava Institute is designed to make school learning clear, friendly and accessible. Our approach is simple: understand the concept, practice it, revise it and test yourself.</p><ul className="check-list">{["Simple explanations","Regular practice","Fun quizzes","Mobile-friendly learning"].map(x=><li key={x}><i className="bi bi-check-circle-fill"/> {x}</li>)}</ul></div></div>
  </div></main>;
}

function Contact() {
  const [sent,setSent]=React.useState(false);
  return <main className="page"><div className="container"><PageTitle eyebrow="Get in touch" title="Contact Bhargava Institute" text="Have a question? Send us a message."/>
    <div className="row justify-content-center mt-3"><div className="col-lg-7"><div className="contact-card">
      {sent?<div className="text-center py-5"><i className="bi bi-check-circle-fill success-icon"/><h4 className="fw-bold mt-3">Thank you!</h4><p className="text-secondary">Your sample message has been submitted.</p><button className="btn btn-outline-primary rounded-pill" onClick={()=>setSent(false)}>Send another</button></div>:
      <form onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="row g-3"><div className="col-md-6"><label>Name</label><input required className="form-control" placeholder="Your name"/></div><div className="col-md-6"><label>Email</label><input required type="email" className="form-control" placeholder="you@example.com"/></div><div className="col-12"><label>Message</label><textarea required rows="5" className="form-control" placeholder="How can we help?"></textarea></div><div className="col-12"><button className="btn btn-primary rounded-pill px-4">Send Message <i className="bi bi-send ms-2"/></button></div></div></form>}
    </div></div></div>
  </div></main>;
}

function PageTitle({eyebrow,title,text}) { return <div className="page-title"><span className="eyebrow">{eyebrow}</span><h1 className="display-6 fw-bold mt-2">{title}</h1><p className="lead text-secondary">{text}</p></div>; }

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/courses/:id" element={<CourseRoute/>}/>
    <Route path="/subjects" element={<Subjects/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/materials" element={<Materials/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></Layout>;
}

function CourseRoute() {
  const id = window.location.pathname.split("/").pop();
  return <CourseDetails id={id}/>;
}