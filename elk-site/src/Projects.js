import scotiabank_icon from "./Scotiabank_icon.webp";
import the_star_group from "./TheStarGroup.webp";
import virtru from "./virtru.webp";

const Projects = () => {
    return ( 
        <div className="projects">
            <div className="project">
                <div className="company_image">
                    <img src={scotiabank_icon} alt="scotiabank icon" />
                </div>
                <div className="company-description">
                    <h2>Confirmation Utility Hub - CUH</h2>
                    <h3>Design the automation test framework from scratch. 
                        Monitor the regression testing. Tools and Platform: 
                        IntelliJ IDEA/Java/TestNG/Git/POM and generate the 
                        extent automation test report.</h3>
                </div>
            </div>
            <div className="project">
                <div className="company_image"></div>
                    <img src={the_star_group} alt="the star group" />
                <div className="company-description">
                    <h2>Vault</h2>
                    <li>Designed/built the automation test framework and also maintained/revisited
                         the framework to optimize and improve its reusability and reliability, 
                         made it easy to use and shortened the execution time;</li>
                    <li>Worked with the DevOps team closely in the agile scrum process to design and
                         implement the architecture of the framework to enable it to easily communicate
                          with 3rd party services, such as BuildKite, Github. Also built and extended 
                          the test automation framework for Web/Mobile Hybrid/Mobile App testing 
                          (on both iOS and Android) with Selenium/Appium, Saucelabs;</li>
                    <li>Tools and services used: AWS services, BuildKite, SauceLabs, SonarCloud, 
                        Github, Slack, TestRail, JIRA, Docker with API integration;</li>
                </div>
            </div>
            <div className="project">
                <div className="company_image"></div>
                    <img src={virtru} alt="virtru" />
                <div className="company-description">
                    <h2>The Stars Group</h2>
                    <li>Designed and built a python automation test framework based on pytest for the Core Server Platform, 
                        it supported posting/receiving messages between client/server based on user-defined pycl API, 
                        supported verifying the log markers/entries on the log system, supported calling SQL to verify 
                        the data from DB2 database as well, created/built Jenkins daily smoke test pipeline and 
                        weekly regression test pipeline, and integrate Allure reports to generate test reports and 
                        share them within Devops; Supported developers to perform unit testing as well;</li>
                    <li>Design/built a python automation test framework based on UI testing for the MarTechEndpoint Restart Checklist Test; 
                        supported stable parallel testing in a virtual environment; supported QA and Release team to execute it for CI/CD; 
                        Integrate Allure reports to generate Web test reports</li>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;