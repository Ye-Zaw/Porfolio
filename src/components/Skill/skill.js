import React from "react";
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

import './skill.css';

const Skill = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web developer</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Application Design</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skill