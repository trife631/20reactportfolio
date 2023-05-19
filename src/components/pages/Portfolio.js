import React from 'react';
import PasswordGenerator from '../../assets/passwordGenerator.png'
import '../css/Portfolio.css'
import Portfolio from '../../assets/portfolio1.png'
import Weather from '../../assets/weatherDashboard.png'
import QuizGame from '../../assets/quizGame.png'
import WorkdayScheduler from '../../assets/workdayScheduler.png'
import ReactPortfolio from '../../assets/reactPortfolio.png'

export default function Blog() {
  return (
    <div>
      {/* PASSWORD GENERATOR */}
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body ">
            <a href='https://trife631.github.io/Password-Generator/' className='link'>
              <img src={PasswordGenerator} alt="Password Generator" className='passwordGeneratorImg'></img>
            </a>
            <p className='caption'>password generator</p>
            <a href="https://github.com/trife631/Password-Generator">
              <button className='project-code-btn'>code
              </button>
            </a>
          </div>
        </div>

        {/* FIRST PORTFOLIO */}
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://trife631.github.io/challenge2portfolio/' className='link'>
              <img src={Portfolio} alt="First Portfolio" className='passwordGeneratorImg'></img>
            </a>
            <p className='caption'>first portfolio</p>
            <a href="https://github.com/trife631/challenge2portfolio">
            <button className='project-code-btn'>code
              </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* QUIZ GAME */}
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://trife631.github.io/JavaScript-Quiz/' className='link'>
              <img src={QuizGame} alt="Quiz Game" className='weatherImg'></img>
            </a>
            <p className='caption2'>quiz game</p>
            <a href="https://github.com/trife631/JavaScript-Quiz">
            <button className='project-code-btn2'>code
               
              {/* WEATHER DASHBOARD */}
              </button>
            </a>
          </div>
        </div>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://trife631.github.io/WeatherDashboard/' className='link'>
              <img src={Weather} alt="Weather Dashboard" className='weatherImg'></img>
            </a>
            <p className='caption2'>weather dashboard</p>
            <a href="https://github.com/trife631/WeatherDashboard">
            <button className='project-code-btn2'>code
               
              {/* WORKDAY SCHEDULER */}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://trife631.github.io/challengedayplanner/' className='link'>
              <img src={WorkdayScheduler} alt="workday scheduler" className='weatherImg'></img>
            </a>
            <p className='caption2'>workday scheduler</p>
            <a href="https://github.com/trife631/challengedayplanner">
            <button className='project-code-btn2'>code
              
              
              </button>
            </a>
          </div>
        </div>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://trife631.github.io/reactportfolioproject20/' className='link'>
              <img src={ReactPortfolio} alt="Team Speak" className='weatherImg'></img>
            </a>
            <p className='caption2'>react portfolio</p>
            <a href="https://github.com/trife631/reactportfolioproject20">
            <button className='project-code-btn2'>code
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
