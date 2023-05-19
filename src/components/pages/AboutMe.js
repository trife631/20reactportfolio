import { auto } from '@popperjs/core';
import React from 'react';
import '../css/AboutMe.css'
import UNCcharlotteimg from '../../assets/UNC_Charlotte_Primary_Horiz_Logo.png'
import StonyBrookimg from '../../assets/stonybrooklogo.png'
import Me from '../../assets/me.jpeg'

const styles = {
  homePgHeader: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
  },
  h2: {
    color: 'black',
  },
  p: {
    marginTop: 40,
    marginLeft: auto,
    marginRight: auto,
    textAlign: 'center',
    border: 'solid'
  },
  card: {
    width: auto,
  }
}

export default function AboutMe() {
  return (
    <div>
      <div classNameName='homePg-header' style={styles.homePgHeader}>
        <h2 style={styles.h2}>about chris</h2>
      </div>
      <div className="container">
      <div className="card col imgCard" styles={styles.card}>
          <div className="card-img">
            <div className='meImgContainer'>
              <img src={Me} alt="educationImg" className='meIMG'></img>
            </div>
          </div>
        </div>
        <div className="card col" styles={styles.card}>
          <div className="card-body">
            <h5 className="card-title">education</h5>
            <p className="card-text">I studied English at Stony Brook University in Long Island, New York. I have a certificate in full-stack web development from UNC Charlotte. </p>
            <div className='imgContainer'>
            <img src={UNCcharlotteimg} alt="educationImg" style={{ width: '200px', height: 'auto', margin: '10px' }}></img>
              <img src={StonyBrookimg} alt="educationImg" style={{ width: '200px', height: 'auto', margin: '10px' }}></img>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">career trajectory</h5>
            <p className="card-text"> My career trajectory is to start a long term, full-time career in web development.</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">currently</h5>
            <p className="card-text"> I am a full-time buisness owner. I have completed projects pertaining to my current profession. My projects can be seen in the portfolio section of this page. For more questionsor to contact me, please visit the contact page . Below you can find my email and github links.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
