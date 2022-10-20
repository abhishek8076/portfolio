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
import Footer from "./components/view/footer/footer";
import { BtnTop } from "./assets/btn/btnTop";

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
            {/* <Route path="/Project" component={ResumeNew} /> */}
            {/* <Redirect to="/"/> */}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      <BtnTop/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
