import React from 'react';

const Aboutme = () => {

    return (
        <section id='about'>
            <div className="container">
                <div className="about--general">

                    <div className='about--general__title'>
                       <h1>AboutMe <span>( )</span> </h1>
                        <p>Hello everyone, my name is Sherali Mamatov, I am 24 years old, I am a beginner website developer. I want to study even more
                            my character is calm cheerful i like to take responsibility hard work</p>
                    </div>

                    <div className='about--general__block'>
                        <div className='about--general__block--top'>
                            <div className='about--general__block--top__left'>
                                <h4>Software Developer</h4>
                                <a href={'/projects'}>Projects</a>
                            </div>
                           <p>{`</>`}</p>
                        </div>

                        <div className='about--general__block--top'>
                            <div className='about--general__block--top__left'>
                                <h4>Freelancer</h4>
                                <a href="https://workspace.ru/personal/info/personal/">Hire me!</a>

                            </div>
                            <h6>{`{ }`}</h6>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;