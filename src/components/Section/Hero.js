import React from 'react';
import SHER from '../../img/SHER.png'
import Rea from '../../img/GroupRedux.svg'
import Hod from '../../img/typescript-original 1.svg'
import ts from '../../img/nodejs-origin.png'

const Hero = () => {


    return (
        <section id='hero'>
            <div className="container">
                <div className="hero--general">
                    <div className='hero--general__block'>
                        <p>Hello, i am</p>
                        <h1> {`<Mamatov SHerali />`}</h1>
                        <h2>Software Developer</h2>
                        <div className='hero--general__block--tit'>
                            <div className='hero--general__block--tit__top'>
                                <h3>1</h3>
                                <h4>years of <br/>
                                    experience</h4>
                            </div>

                            <div className='hero--general__block--tit__top'>
                                <h3>10</h3>
                                <h4>Projects <br/>Completed
                                    </h4>
                            </div>
                        </div>
                    </div>

                    <div className='hero--general__imo'>
                        <img src={SHER} alt=""/>
                        <img src={Rea} alt="" className='right'/>
                        <img src={Hod} alt="" className='left'/>
                        <img src={ts} alt="" className='top'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;