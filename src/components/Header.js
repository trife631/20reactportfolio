import React from 'react';
import './css/style.css'

const styles ={
  header: {
    background: 'green'
  },
}

function Header() {

  return (
    <header className="header" style={styles.header}>
      <h1 className='headerName'>Chris Williams</h1>
    </header>
  );
}

export default Header;