import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/view/NavBar";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import  Home  from "./components/Pages/home/home";
import { About } from "./components/Pages/about/About";
import { Blog } from "./components/Pages/blog/Blog";
import { Contact } from "./components/Pages/contact/Contact";
import { PageNotFound } from "./components/Pages/404/404";
import ResumeNew from "./components/Pages/resume/resume";
import Project from "./components/Pages/project/project";
import Footer from "./components/view/footer/footer";
import { BtnTop } from "./assets/btn/btnTop";
import DarkMode from "./components/darkMode/darkmode";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={ResumeNew} />
            <Route path="/project" component={Project} />
            {/* <Route path="/Project" component={ResumeNew} /> */}
            
            <Route path="*" component={PageNotFound} />
            <Redirect to="/"/>
          </Switch>
        </div>
        
      <BtnTop/>
      {/* <DarkMode/> */}
        <Footer/>

      </Router>
    </>
  );
}

export default App;
