import * as React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {AppBar} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "53px",
    background: "white",
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
    textAlign: "center",
  },
  layout1:{
    textAlign: "right",
    height: "54px",
    maxWidth: "975px",
    width: "100%",

  },layout2:{
    textAlign: "center",
    height: "54px",
    width: "2900px",

  },layout3:{
    textAlign: "left",
    height: "54px",
    width: "100%",

  },
  logoButton: {
    width: "103px",
    height: "40px",
  },
  buttonOthers: {
    width: "40px",
    height: "40px",
  },
  input: {
    marginTop:"1.5%",
    background: "#FAFAFA",
    height: "20px",
    width: "200px",
    paddingBottom:"3px",
    paddingLeft:"26px",
    paddingRight:"10px",
    paddingTop:"2%",
    fontSize:"16px"
  },
  inputFocus: {
    textAlign: "center",
    marginTop:"1.5%",
    background: "#FAFAFA",
    height: "20px",
    width: "177px",
    paddingBottom:"3px",
    paddingLeft:"26px",
    paddingRight:"10px",
    paddingTop:"2%",
    fontSize:"16px"
  },
  appMargin: {
    marginBottom: "54px"
  }
}));

const AppLayout = () => {
  const classes = useStyles();
  const inputOnFocus = useRef();

  // useEffect(()=>{
  //   console.log(InputBase)
  // },[]);

  return (
    <>
      {/*<div>*/}
      {/*  <ul>*/}
      {/*    <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>*/}
      {/*    <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>*/}
      {/*    <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>*/}
      {/*    <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>*/}
      {/*    <li><NavLink to="/membership">Membership</NavLink></li>*/}
      {/*  </ul>*/}
      {/*  <hr/>*/}
      {/*</div>*/}

      <AppBar className={classes.root}>
        <Toolbar>
          <div className={classes.layout1}>
            <a href="/">
              <img src="/images/Instalogo.png" alt="instagramlogo" className={classes.logoButton}/>
            </a>
          </div>
          <div className={classes.layout2}>
            <form  noValidate={true} autoComplete="off">
              {/*<TextField className={classes.input} id="outlined-basic" variant="outlined" size="small" margin="dense"/>*/}
              <InputBase ref={inputOnFocus} className={classes.input} placeholder="검색" inputProps={{ 'aria-label': 'description' }} />
            </form>
          </div>
          <div className={classes.layout3}>
            <NavLink to="/"
                     // activeStyle={activeStyle}
            >
              <img src="/images/스크린샷 2020-02-28 오후 7.31.11.png" alt="instagramlogo" className={classes.buttonOthers}/>
            </NavLink>

            <img src="/images/스크린샷 2020-02-28 오후 7.31.19.png" alt="instagramlogo" className={classes.buttonOthers}/>
            <NavLink to="/Posts"
              // activeStyle={activeStyle}
            >
              <img src="/images/스크린샷 2020-02-28 오후 7.31.29.png" alt="instagramlogo" className={classes.buttonOthers}/>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.appMargin}/>

    </>
  );
};

export default AppLayout;