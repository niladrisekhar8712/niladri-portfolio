import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./styles.scss"
const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
        navigate('/contact')
    }
    const fileUrl = "https://drive.google.com/file/d/1FrEB4DH9R9wX-8RMfd65wpzztfzlesaG/view"
    return (
        <section id="home" className="home">
            <div className="home-text-wrapper">
                <h1>
                    Hello, I'm Niladri
                    <br />
                    An Aspiring Software Developer
                </h1>
                <Animate play duration={1.5} delay={1} start={{
                    transform: 'translateY(550px)'
                }}
                    end={{
                        transform: 'translateX(0px)'
                    }}

                >
                    <div className="home-text-wrapper-contact-me">
                        <button onClick={handleNavigateToContactPage}>Hire Me</button>
                        <a href={fileUrl} download>
                            <button style={{paddingLeft: '47px',paddingRight: '47px'}}>Download CV</button>
                        </a>
                        <div>
                            <a href="https://www.linkedin.com/in/niladri-sekhar-mondal-118b0a204/">
                                <BsLinkedin size={43} fill="yellow" />
                            </a>
                            <a href="https://github.com/niladrisekhar8712">
                                <BsGithub size={43} fill="yellow" />
                            </a>
                            <a href="https://leetcode.com/u/niladrismondal8712/">
                                <SiLeetcode size={43} fill="yellow" />
                            </a>
                        </div>
                    </div>
                </Animate>

            </div>

        </section>
    )
}
export default Home;
