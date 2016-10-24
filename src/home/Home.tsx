import * as React from 'react';
import * as styles from './Home.css';
import * as ngPartyLogo from './ngParty-logo.svg';

export const Home = () => {
  return (
    <div>
      <h2 className={styles.header}>Home</h2>
      <div>Hello from Sofia!</div>
      <img src={ngPartyLogo}/>
    </div>
  );
};

export default Home;
