const Heading = () => {
    return ( 
        <div className="heading">
            <nav className="navbar">
                <a href="/" className="logo">ELK</a>
                <div className="nav_links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                </div>
                <a href="/contacts" className="contact"><button>Contact</button></a>
            </nav>
            <div className="banner">
                <h1>Early Learning Kingdom</h1>
            </div>
        </div>
    );
}
 
export default Heading;