import { Link } from "react-router-dom";

const Heading = () => {
    return ( 
        <div className="heading">
            <nav className="navbar">
                <Link to="/" className="logo">ELK</Link>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <Link to="/contact" className="contact"><button>Contact</button></Link>
            </nav>
            <div className="banner">
                <h1>Early Learning Kingdom</h1>
            </div>
        </div>
    );
}
 
export default Heading;