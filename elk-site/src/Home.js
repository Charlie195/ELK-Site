import computer_circuit_board from "./computer_circuit_board.png"

const Home = () => {
    return (  
        <div className="home">
            <div className="left half">
                <div className="half_package">
                    <div className="title">
                        <div>
                            <h2>Leverage <span className="key_words">Test Automation</span> and <span className="key_words">CI/CD Expertise</span> for <span className="key_words">"Rapid Quality Assurance"</span></h2>
                        </div>
                    </div>
                    <div className="content">
                        <h3>ELK provides testing capabilities, knowledge, technology and consulting to companies
                            looking to build and enhance automated quality assurance and improve asset data transparency. 
                            The next generation of automation is autonomous test creation, test execution and learning, 
                            all of which we can offer our customers.</h3>
                    </div>
                </div>
            </div>
            <div className="right half">
                <img className="picture" src={computer_circuit_board} alt="computer circuit board"/>
            </div>
        </div>
    );
}
 
export default Home;