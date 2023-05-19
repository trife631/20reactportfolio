import React from 'react';
import resume from '../../assets/TrifeEPKOptimized.pdf'
import '../css/Resume.css'


export default function Resume() {
  return (
    <div>
      <div className="card-resume-pg">
        <div className="card-body">
          <h4 className="card-title">skills:</h4>
          <p className="card-text">I studied English at the University of Stony Brook in Long Island and subsequently began teaching music production technologies and djing for Scratch DJ Academy in New York City. During that timeframe I also started my own company immersing myself in music technologies for the past 20 years through production and djing. Click the link the below for a downloadable version of my resumé.</p>
        </div>
      </div>
      <div className="card-resume-pg2">
        <div className="card-body">
          <h4 className="card-title">downloadable resume:</h4>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>resumé download</b>
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
