const Services = () => {
    const web_app_automation_test = "/Web_App_Automation_Test.png";
    const mobile_app_automation_test = "/Mobile_App_Automation_Test.png";
    const ci_cd = "/CI_CD.png";

    return (  
        <div className="services">
            <div className="left side">
                <img className="picture" src={web_app_automation_test} alt="web app automation test"/>
                <div className="title">
                    <h3>Web App Automation Test</h3>
                </div>
                <div className="content">
                    <h4>Framework: Python + Pytest + Selenium Webdriver</h4>
                </div>
                <a className="demo_video blue_button" href="https://www.screencast.com/t/tXtOl8yt5" target="_blank"><button><h4>Demo</h4></button></a>
            </div>
            <div className="middle side">
                <img className="picture" src={mobile_app_automation_test} alt="mobile app automation test"/>
                <div className="title">
                    <h3>Mobile App Automation Test</h3>
                </div>
                <div className="content">
                    <h4>Framework: Python + Pytest + Selenium Webdriver + Appium + Android Emulator</h4>
                </div>
                <a className="demo_video blue_button" href="https://www.screencast.com/t/8ytoL1NV" target="_blank"><button><h4>Demo</h4></button></a>
            </div>
            <div className="right side">
                <img className="picture" src={ci_cd} alt="ci cd"/>
                <div className="title">
                    <h3>CI/CD</h3>
                </div>
                <div className="content">
                    <h4>Automation test Running on the Selenium-Grid within Jenkins</h4>
                </div>
                <a className="demo_video blue_button" href="https://www.screencast.com/t/EhbzDG6TNkgR" target="_blank"><button><h4>Demo</h4></button></a>
            </div>
        </div>
    );
}
 
export default Services;