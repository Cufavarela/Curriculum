import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiMapMarker, mdiCellphoneAndroid, mdiHeadphones, mdiXml, mdiSoccer, mdiLaptopChromebook } from '@mdi/js';
import './App.css';
import { ItemSobreMi } from './ItemSobreMi';
import { ItemHabilidad } from './ItemHabilidad';
import data from "./data";

function App() {
  return (
    <>
      <div className="todo">
        <div className="columnaIzq">
          <div className="fotoYNombre">
            <img src="/fotoCufa3.jpg" className="foto"></img>
            <div className="nombreYTitulo">
              <h1>{data.name}</h1>
              <p>{data.title} <span>•</span> {data.age} <span>años</span></p>
            </div>
          </div>
          <div className="mailCeluDire">
            <p><Icon path={mdiEmailOutline} size={0.7} /> {data.email}</p>
            <p><Icon path={mdiCellphoneAndroid} size={0.7} /> {data.phone}</p>
            <p><Icon path={mdiMapMarker} size={0.7} /> {data.location}</p>
          </div>
          <div className="habilidades">
            <h5>habilidades</h5>
            { data.skills.map(skill => <ItemHabilidad {...skill}/>) }
          </div>
          <div className="habilidades">
            <h5>Lenguajes</h5>
            { data.languages.map(lang => <ItemHabilidad {...lang}/>) }
          </div>
          <div className="habilidades">
            <h5>Hobbies</h5>
            <div className="hobbies">
              <div className="hobbie">
                <Icon path={mdiHeadphones} color="#fa9160" size={1} />
                <h5>Música</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiXml} color="#fa9160" size={1} />
                <h5>Programar</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiSoccer} color="#fa9160" size={1} />
                <h5>Fútbol</h5>
              </div>
              <div className="hobbie">
                <Icon path={mdiLaptopChromebook} color="#fa9160" size={1} />
                <h5>Videojuegos</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="columnaDer">
          <div className="sobreMi">
            <h2>Acerca de mí</h2>
            <div dangerouslySetInnerHTML={{__html: data.description}}></div>
          </div>
          <div className="sobreMi">
            <h2>Experiencias</h2>
            { data.experiences.map(exp => <ItemSobreMi {...exp}/>) }
          </div>
          <div className="sobreMi educacion">
            <h2>Educación</h2>
            { data.education.map(edu => <ItemSobreMi {...edu}/>) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
