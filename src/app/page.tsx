import React from 'react';
import style from './page.module.scss';

const page = () => {
  return (
    <div className={style['main-wrapper']}>
      <img
        src="/code-reroute-logo.png"
        alt="Code Reroute"
        className={style['code-reroute-logo']}
      />
      <div className={style['main-text']}>
        <h1 className="font-goga">WE ARE UPDATING OUR SITE.</h1>
        <h1 className="font-goga">CHECK BACK EARLY FEB.</h1>
      </div>
    </div>
  );
};

export default page;
