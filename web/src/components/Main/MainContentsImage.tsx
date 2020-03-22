import * as React from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import MuiImageSlider from "../imageSlider";

const MainContentsImage = (src:any) => {
  const useStyles = makeStyles((theme: Theme) => ({

    img:{
      width: "614px",
    },
  }));
  const classes = useStyles();



  return (
    <>

    <MuiImageSlider images={src.src} className={classes.img}/>
    {/*<img src={src.src} alt={src.alt} className={classes.images}/>*/}
    </>
  );
};

export default MainContentsImage;