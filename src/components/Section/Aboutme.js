import React from 'react';

const About = () => {


    return (
        <section id='about'>
            <div className="container">
                <div className="about--general">

                    <div className='about--general__title'>
                       <h1>AboutMe <span>( )</span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc.
                        </p>
                    </div>

                    <div className='about--general__block'>
                        <div className='about--general__block--top'>
                            <div className='about--general__block--top__left'>
                                <h4>Fullstack Developer</h4>
                                <a href={'/projects'}>Projects</a>
                            </div>
                           <p>{`</>`}</p>
                        </div>

                        <div className='about--general__block--top'>
                            <div className='about--general__block--top__left'>
                                <h4>Freelancer</h4>
                                <a href="https://freelancer.kg/dashboard">Hire me!</a>

                            </div>
                            <h6>{`{ }`}</h6>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;