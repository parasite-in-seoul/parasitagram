import React from 'react';
import { url } from 'inspector';
// import membership1 from '../img/login/membership1.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    alignSelf: 'center',
    backgroundImage: 'url("/images/membership1.png")',
    backgroundColor: "transparent",
    backgroundPosition: "0 0",
    backgroundSize: "454px 618px",
    flexBasis: "454px",
    height: "618px",
    width: "454px",
    marginLeft:"-35px",
    marginRight: "-15px",
    color: "white"
  }
}));

const Membership = () => {
  const classes = useStyles();

  return (
    <div className="main">
      <div style={{justifyContent:"center", marginTop:"30px", marginBottom:"auto", marginLeft:"auto", marginRight:"0px", maxWidth:"935px", paddingBottom:"44px", width:"100%"}} >
        <div className={classes.formControl}>
          {/* <img src={require('../img/login/membership1.png')} /> */}
          123
        </div>
      </div>
    </div>
  );
};

export default Membership;