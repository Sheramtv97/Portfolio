import React from 'react';
import HTML from '../../img/html5-original 1.png'
import CSS from '../../img/css3-original 1.png'
import JS from '../../img/javascript-original 1.png'
import REACT from '../../img/react-original 1.png'
import REDUX from '../../img/redux-original 1.png'
import TS from '../../img/typescript-original 1.svg'
import TEL from '../../img/tell.jpg'
import GIT from '../../img/GitHub-Mark.png'
import VER from '../../img/vercel-deploy.png'
import SASS from '../../img/sasss.png'



const Skil = () => {
    return (

        <section id='skill'>
            <div className="container">
                <div className="skill">
                    <img src={HTML} alt=""/>
                    <img src={CSS} alt=""/>
                    <img src={SASS} alt=""/>
                    <img src={GIT} alt=""/>
                    <img src={VER} alt=""/>
                    <img src={JS} alt=""/>
                    <img src={REACT} alt=""/>
                    <img src={TEL} alt=""/>
                    <img src={REDUX} alt=""/>
                    <img src={TS} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Skil;