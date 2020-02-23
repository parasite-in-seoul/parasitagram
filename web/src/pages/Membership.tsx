import React from 'react';
import { url } from 'inspector';
import membership1 from '../img/login/membership1.png'

const Membership = () => {
  return (
    <div style={{backgroundImage:'url(require("../img/login/membership1.png"))'}}>
      {/* <img src={require('../img/login/membership1.png')} /> */}
    </div>
  );
};

export default Membership;