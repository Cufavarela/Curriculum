import React from "react";
import Icon from "@mdi/react";
import {
  mdiEmailOutline,
  mdiMapMarker,
  mdiCellphoneAndroid,
  mdiHeadphones,
  mdiXml,
  mdiSoccer,
  mdiLaptopChromebook,
} from "@mdi/js";
import "./App.css";
import { TextBlock } from "./TextBlock";
import { SkillItem } from "./SkillItem";
import data from "./data";

function App() {
  return (
    <>
      <div className="page">
        <div className="leftSide">
          <div className="picAndName">
            <img
              src="/fotoCufa3.jpg"
              className="photo"
              alt="Facundo Varela"
            ></img>
            <div className="nameAndTitle">
              <h1>{data.name}</h1>
              <p>
                {data.title} <span>•</span> {data.age} <span>años</span>
              </p>
            </div>
          </div>
          <div className="personalData">
            <p>
              <Icon path={mdiEmailOutline} size={0.7} /> {data.email}
            </p>
            <p>
              <Icon path={mdiCellphoneAndroid} size={0.7} /> {data.phone}
            </p>
            <p>
              <Icon path={mdiMapMarker} size={0.7} /> {data.location}
            </p>
          </div>
          <div className="skills">
            <h5>Skills</h5>
            {data.skills.map((skill) => (
              <SkillItem {...skill} />
            ))}
          </div>
          <div className="skills">
            <h5>Languages</h5>
            {data.languages.map((lang) => (
              <SkillItem {...lang} />
            ))}
          </div>
          <div className="skills">
            <h5>Hobbies</h5>
            <div className="hobbies">
              <div className="hobbie">
                <Icon path={mdiHeadphones} color="#fa9160" size={1} />
                <h5>Music</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiXml} color="#fa9160" size={1} />
                <h5>Coding</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiSoccer} color="#fa9160" size={1} />
                <h5>Soccer</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiLaptopChromebook} color="#fa9160" size={1} />
                <h5>Games</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightSideItem">
            <h2>Hello I'm Facu</h2>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          </div>
          <div className="rightSideItem">
            <h2>Experiences</h2>
            {data.experiences.map((exp) => (
              <TextBlock {...exp} />
            ))}
          </div>
          <div className="rightSideItem education">
            <h2>Education</h2>
            {data.education.map((edu) => (
              <TextBlock {...edu} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
