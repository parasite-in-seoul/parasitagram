import * as React from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import MainContentsImage from "./MainContentsImage";
import {useState} from "react";

const images = [
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
  'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
  'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
];

const MainContents = () => {
  const [contentsTextSpread, setContentsTextSpread] = useState(false);


  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: "614px",
      background: "white",
      borderRadius: "3px"
    },
    bullet: {
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      backgroundColor: red[500],
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    buttonOthers: {
      width: "40px",
      height: "40px",
      cursor:"pointer"
    },
    buttonOthers2: {
      width: "26px",
      height: "26px",
      margin: "8px",
      cursor:"pointer"
    },
    buttonOthers3: {
      width: "26px",
      height: "26px",
      margin: "8px",
      float: "right",
      cursor:"pointer"
    },
    like: {
      marginLeft: "10px",
      marginRight: "10px",
      fontWeight: "bolder"
    },
    likeText: {
      // marginLeft: "10px",
      // marginRight: "10px",
    },
  }));

  const classes = useStyles();

  const tempTextContennts : string =
    `2020SS 🎾 THE TENNIS ${'\n'} 최수영과 함께한 #휠라언더웨어 20SS 컬렉션을 감상해보세요. #filaunderwear #IMYMEMINE`;

  const tempTextContents2 : string = "그리고 서일콘 고맙다는 말 너무 늦게 올려서 미안하고 똑같이 사랑해요💙";

  const textSubstr = (text:string) =>{
    const tempAddText = (<>
      <Typography variant="button" display="inline" component="p"
                  className={classes.likeText}>
        {text.substr(0,15)}...{" " }
      </Typography>
    </>);

    const tempAddText2 = (<>
      <Typography variant="button" display="inline" component="p" style={{cursor:"pointer", color:"#999"}}
                  className={classes.likeText} onClick={()=>{setContentsTextSpread(true)}}>
         더 보기
      </Typography>
    </>);

    return (
      <>
        {tempAddText}
        {tempAddText2}
      </>
    )
  };

  return (
    <div>
      <Container maxWidth="md">
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
          />
          <CardMedia
            src="/Users/Tanktwo_mac/Documents/GitHub/parasitagram/web/public/images/Content_Image.jpg"
            title="Paella dish"
          />
          <MainContentsImage src={images} alt={'image1'}
          />
          <CardContent style={{padding : 5}}>
            <Typography >
              <img src="images/스크린샷 2020-02-28 오후 7.31.29.png" alt="instagramlogo" className={classes.buttonOthers}/>
              <img src="images/contentsImg1.png" alt="instagramlogo" className={classes.buttonOthers2}/>
              <img src="images/contentsImg2.png" alt="instagramlogo" className={classes.buttonOthers2}/>
              <img src="images/contentsImg3.png" alt="instagramlogo" className={classes.buttonOthers3}/>
            </Typography>
            <Typography variant="button" display="inline"  style={{cursor:"pointer"}}
                        className={classes.like} onClick={()=>{console.log(123)}}>
              좋아요 1,732,332개
            </Typography>
            <br/>
            <Typography variant="button" display="inline"  style={{cursor:"pointer"}}
                        className={classes.like} onClick={()=>{console.log(123)}}>
              ID
            </Typography>
            <Typography variant="button" display="inline"
                        className={classes.likeText} >
              {tempTextContennts.length < 10 ? tempTextContennts : contentsTextSpread ? tempTextContennts : textSubstr(tempTextContennts)
              }
            </Typography>
          </CardContent>
        </Card>


      </Container>
    </div>
  );
};

export default MainContents;