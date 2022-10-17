import "./App.css";
import NavBar from "./components/view/NavBar";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import  Home  from "./components/Pages/home/home";
import { About } from "./components/Pages/about/About";
import { Blog } from "./components/Pages/blog/Blog";
import { Contact } from "./components/Pages/contact/Contact";
import { PageNotFound } from "./components/Pages/404/404";
import ResumeNew from "./components/Pages/resume/resume";
import Footer from "./components/view/footer/footer";

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
            <Route path="*" component={PageNotFound} />
            <Redirect to="/"/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;