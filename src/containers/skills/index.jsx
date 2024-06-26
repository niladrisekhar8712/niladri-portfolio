import React from "react";
import { PageHeader } from "../../components/page-header";
import {BsTools } from "react-icons/bs";
import Data from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";
const Skills = () => {
    return <section id="skills" className="skills">
        <PageHeader headerText={"My Skills"} icon={<BsTools size={40} />} />
        <div className="skills-contentwrapper">
            {
                Data.map((item, i) => (
                    <div key={i} className="skills-contentwrapper-innercontent">
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={
                                {
                                    transform: 'translateX(-200px)'
                                }
                            }
                            end={
                                {
                                    transform: 'translateX(0px)'
                                }
                            }
                        >
                            <h3 className="skills-contentwrapper-innercontent-category-text">{item.label}</h3>
                            <div>
                                {
                                    item.value.map((skillItem, j)=>(
                                        <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount={1}
                                        >
                                            <div className="progressbar-wrapper" key={j}>
                                                <p>{skillItem.label}</p>
                                                <Line percent={skillItem.value} strokeColor="var(--yellow-theme-main-color)" strokeWidth="2"
                                                trailWidth="2"
                                                strokeLinecap="square"
                                                />
                                            </div>

                                        </AnimateKeyframes>
                                    ))
                                }
                            </div>
                        </Animate>
                    </div>
                ))
            }
        </div>
    </section>
}
export default Skills;