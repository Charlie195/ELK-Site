import Heading from "./Heading";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Get_Connected from "./Get_Connected";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Heading />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/services">
                            <Services />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
                <Get_Connected />
            </div>
        </Router>
    );
}

export default App;
