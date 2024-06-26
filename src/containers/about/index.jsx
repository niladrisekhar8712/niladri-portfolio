import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import { DiJava, DiReact, DiDatabase, DiJavascript1 } from 'react-icons/di'
import { PageHeader } from "../../components/page-header";
import { Animate } from "react-simple-animate";
import "./styles.scss";
const divStyle = {
    display: 'flex',
    justifyXContent: 'center' 
}
const personalDetails = [
    {
        label: "Name",
        value: "Niladri Sekhar Mondal"
    },
    {
        label: "Age",
        value: "21"
    },
    {
        label: "Address",
        value: "North 24 Pgs., West Bengal, India"
    },
    {
        label: "Phone",
        value: "+91 9836974035"
    },
    {
        label: "Email",
        value: "niladrismondal8712@gmail.com"
    }
];
const summary = "Eager student seeking SDE intern. Strong foundation in algorithms, data structures, and Java programming language. Experience with JavaScript, Node.js, express.js, React. Passionate about building innovative software and eager to learn from experienced engineers."

const About = () => {
    return <section id="about" className="about">
        <PageHeader headerText={"About Me"} icon={<BsInfoCircleFill size={40} />} />
        <div className="about-content">
            <div className="about-content-personalwrapper">
                <Animate play duration={1.5} delay={1} start={{
                    transform: 'translateX(-900px)'
                }}
                    end={{
                        transform: 'translateX(0px)'
                    }}

                >

                    <h3>Summary</h3>
                    <p>{summary}</p>
                </Animate>
                <Animate play duration={1.5} delay={1} start={{
                    transform: 'translateX(500px)'
                }}
                    end={{
                        transform: 'translateX(0px)'
                    }}

                >
                    <h3 className="personal-information-header-text">Personal Information</h3>
                    <ul>
                        {
                            personalDetails.map((item, key) => (
                                <li key={key}>
                                    <span className="title">{item.label} : </span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Animate>
            </div>
            <div className="about-content-serviceswrapper">
                <Animate play duration={1.5} delay={1} start={{
                    transform: 'translateX(600px)'
                }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                    
                >
                    <div className="about-content-serviceswrapper-innercontent">
                        <div>
                            <DiJava size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiJavascript1 size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                </Animate>

            </div>
        </div>



    </section>
}
export default About;