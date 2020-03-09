import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    width:"935px",
    height:"817px",
    paddingBottom:"44px",
    margin:"30px auto 0"
  },
  phone: {
    alignSelf: 'center',
    backgroundImage: 'url("/images/membership1.png")',
    backgroundColor: "transparent",
    backgroundPosition: "0 0",
    backgroundSize: "454px 618px",
    flexBasis: "454px",
    height: "618px",
    width: "454px",
    color: "white",
    margin: "0 -15px 0 -35px"
  },
  subImage: {
    width: "240px",
    height: "427px",
    marginLeft: "150px",
    marginTop: "100px"
  },
  member: {
    width:"350px",
    height:"761px",
    marginTop: "12px"
  },
  memberMain: {
    border: "1px solid #dbdbdb",
    borderRadius: '1px',
    backgroundColor: "white",
    padding: "10px 0",
    margin: "0 0 10px",
    width: "350px",
    height: "542px"
  },
  memberSub: {
    border: "1px solid #dbdbdb",
    borderRadius: '1px',
    backgroundColor: "white",
    padding: "10px 0",
    margin: "0 0 10px",
    width: "350px",
    height: "48px",
  },
  memberSub2: {
    color: "black",
    fontSize: "14px",
    lineHeight: "18px",
    margin: "10px 20px 10px 20px",
    textAlign: "center",
    width: "310px",
    height: "18px"
  },
  memberLogo: {
    width: "175px",
    height: "51px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    display: "block",
    overflow: "hidden",
    textIndent: "110%",
    whiteSpace: "nowrap",
    fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif",
    margin: "22px auto 12px",
    backgroundImage: 'url("/images/logo.png")',
  },
  memberSub3:{
    marginBottom: "20px",
    margin: 0,
    padding: 0,
    position: "relative",
  },
  memberSub3_1: {
    width: "348px",
    height: "50px",
    display: "flex",
    color: "#999",
    textAlign: "center",
    marginTop: 0,
  },
  memberSub3_1_1: {
    fontWeight: 600,
    lineHeight: "20px",
    fontSize: "17px",
    margin: "0 40px 10px",
    display: "block",
    minWidth: "268px",
    width: "268px",
    height: "40px",
  },
  memberSub3_2: {
    marginTop: "8px",
    marginRight: "40px",
    marginLeft: "40px",
    marginBottom: "8px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: "268px",
    width: "268px",
    height: "32px",
  },
  memberSub3_2_1: {
    border: "1px solid transparent",
    borderRadius: "4px",
    backgroundColor: "#3897f0",
    color: "white",
    width: "268px",
    height: "32px",
    position: "relative",
    cursor: "pointer",
    display: "block",
    padding: "5px 9px",
    textAlign: "center",
    textTransform: "inherit",
    textOverflow: "ellipsis",
    userSelect: "none",
    fontSize: "14px",
    lineHeight: "18px",
    textRendering: "auto",
    letterSpacing: "normal",
    wordSpacing: "normal",
    textIndent: "0px",
    textShadow: "none",
    alignItems: "flex-start",
    margin: 0,
    font: "400 13.3333px Arial"
  },
  memberSub3_2_1_1: {
    backgroundImage: 'url("/images/logo.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-264px -319px",
    height: "16px",
    width: "16px",
    display: "inline-block",
    marginRight: "8px",
    position: "relative",
  }
}));

const Membership = () => {
  const classes = useStyles();

  return (
    <body style={{backgroundColor:"#FAFAFA"}}>
      <div className="body">
        <Grid container={true} spacing={1} className={classes.main} >
            <div className={classes.phone}>
               {/*<img src="/images/sub1.jpg" className={classes.subImage} />*/}
            </div>
            <div className={classes.member}>
              <div className={classes.memberMain}>
                <h1 className={classes.memberLogo}>
                  Instagram
                </h1>
                <div className={classes.memberSub3}>
                  <form className={classes.memberSub3_1}>
                    <h2 className={classes.memberSub3_1_1}>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                  </form>
                  <div className={classes.memberSub3_2}>
                    <button className={classes.memberSub3_2_1} type="button">
                      <div className={classes.memberSub3_2_1_1}/>
                      Facebook으로 로그인
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes.memberSub}/>
              <div>
                <div className={classes.memberSub2}>앱을 다운로드하세요.</div>
              </div>
            </div>
        </Grid>
      </div>
    </body>
  );
};

export default Membership;