import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import { InputBase } from '@material-ui/core';

import * as moment from 'moment';

import MainContentsImage from "./MainContentsImage";

const commonProps = {
  backgroundImage: 'url("/images/icons-spritesheet2.png")',
  backgroundSize: '355px 344px',
  backgroundRepeat: 'no-repeat',
  height: 24,
  width: 24,
  // justifySelf: 'center',
  '&:hover': {
    cursor: 'pointer'
  }
};

const usePostStyles = makeStyles(theme => ({
  article: {
    border: '1px solid #e6e6e6',
    background: '#ffffff',
    marginBottom: 60,
    [theme.breakpoints.down('xs')]: {
      border: 'unset',
      marginBottom: 0
    }
  },

  nameCardWrapper: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'auto minmax(auto, 20px)',
    gridGap: 10,
    alignItems: 'center',
    padding: 16
  },
  icon: {
    backgroundImage: 'url("/images/icons-spritesheet1.png")',
    backgroundPosition: '-217px -170px',
    backgroundSize: '503px 516px',
    backgroundRepeat: 'no-repeat',
    height: 24,
    width: 18,
    justifySelf: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },

  image: {
    width: '100%'
  },

  typography: {
    fontWeight: 600
  },
  distance: {
    fontSize: 10
  }
}));

const commonKeyFramesProps = {
  '0%': { transform: 'scale(1)' },
  '25%': { transform: 'scale(1.2)' },
  '50%': { transform: 'scale(0.95)' },
  '100%': { transform: 'scale(1)' }
};
const commonAnimationProps = {
  animationTimingFunction: 'ease-in-out',
  transform: 'scale(1)'
};



import {useState} from "react";

const images = [
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
  'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
  'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
];

const dummyData = {
  "postNumber": 2,
  "content": "#test 테스트 글입니다",
  "createdAt": "2020-03-21T13:36:09.000Z",
  "updatedAt": "2020-03-21T13:36:09.000Z",
  "userNumber": 1,
  "likers": [],
  "hashtags": [
    {
      "hashtagNumber": 1,
      "name": "test",
      "createdAt": "2020-03-21T13:35:21.000Z",
      "updatedAt": "2020-03-21T13:35:21.000Z",
      "postHashtag": {
        "createdAt": "2020-03-21T13:36:09.000Z",
        "updatedAt": "2020-03-21T13:36:09.000Z",
        "hashtagId": 1,
        "postId": 2
      }
    }
  ],
  "images": [
    {
      "imageNumber": 1,
      "src": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      "createdAt": "2020-03-21T13:36:09.000Z",
      "updatedAt": "2020-03-21T13:36:09.000Z"
    },
    {
      "imageNumber": 2,
      "src": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      "createdAt": "2020-03-21T13:36:09.000Z",
      "updatedAt": "2020-03-21T13:36:09.000Z"
    },
  ],
  "comments": [
    {
      "commentNumber": 1,
      "content": "댓글테스트",
      "createdAt": "2020-03-21T13:36:57.000Z",
      "updatedAt": "2020-03-21T13:36:57.000Z",
      "userNumber": null,
      "postNumber": 2,
      "parentCommentNumber": null,
      "commentLikers": []
    }
  ]
};


const MainContents = () => {
  const [contentsTextSpread, setContentsTextSpread] = useState(false);
  const [contentsHeartIcon, setContentsHeartIcon] = useState(false);
  const [commentWriteInput, setCommentWriteInput] = useState('');


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
    likeID: {
      marginLeft: "10px",
      marginRight: "10px",
      fontWeight: "bolder"
    },
    likeText: {
      // marginLeft: "10px",
      // marginRight: "10px",
    },
    timeAgo: {
      fontWeight: "lighter",
      fontSize: "10px",
      marginLeft: "10px",
      cursor:"pointer"
      // marginRight: "10px",
    },
    commentWrite: {
      fontWeight: "lighter",
      padding: "16px",
      paddingBottom: "16px",
      border: "1px solid #efefef",
      color: "#262626"
    },
    iconWrapper: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: '24px 24px 24px minmax(24px, auto)',
      gridGap: 16,
      padding: '6px 0px'
    },
    container: {
      padding: '0px 16px 8px'
    },
    like: {
      ...commonProps,
      backgroundPosition: '-275px -269px',
      animation: '$like-button-animation 0.45s',
      ...commonAnimationProps
    },
    liked: {
      ...commonProps,
      backgroundPosition: '-250px -269px',
      animation: '$liked-button-animation 0.45s',
      ...commonAnimationProps
    },
    '@keyframes like-button-animation': commonKeyFramesProps,
    '@keyframes liked-button-animation': commonKeyFramesProps,
    comments: {
      ...commonProps,
      backgroundPosition: '-117px -97px'
    },
    share: {
      ...commonProps,
      backgroundPosition: '-124px -226px'
    },
    save: {
      ...commonProps,
      backgroundPosition: '-48px -320px',
      justifySelf: 'right'
    },
  }));

  const classes = useStyles();

  const tempImages = () =>{
    const temp: string[] = [];
    dummyData.images.map(row=>{
      temp.push(row.src);
    });
    return temp;
  };

  const onContentsHeartIcon = () => {
    setContentsHeartIcon(!contentsHeartIcon);
  };


  function LikeButton({ id, ownerHasLiked }) {
    const dispatch = useDispatch();
    const className = ownerHasLiked ? classes.liked : classes.like;

    const handleLikeClick = () => {
      setContentsHeartIcon(!contentsHeartIcon)
    }
    // dispatch(likeAction({ params: { id, type: 'like' } }));


    const onClick = handleLikeClick;

    return <div className={className} onClick={onClick} />;
  }


  const tempTextContennts : string =
    `2020SS 🎾 THE TENNIS ${'\n'} 최수영과 함께한 #휠라언더웨어 20SS 컬렉션을 감상해보세요. #filaunderwear #IMYMEMINE`;

  const tempTextContents2 : string = "그리고 서일콘 고맙다는 말 너무 늦게 올려서 미안하고 똑같이 사랑해요💙";

  // const tempTimeStamp : () => string = () => {
  //
  //   return(
  //     moment('2017-02-27T00:00:00.000Z').utc().format('YYYY-MM-DD')
  //   )
  // };

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

  const postComments = () => {


    return(
      <>
        <Typography variant="button" display="inline"  style={{cursor:"pointer"}}
                    className={classes.likeID} onClick={()=>{console.log(123)}}>
          ID
        </Typography>
        <Typography variant="button" display="inline"
                    className={classes.likeText} >
          댓글
        </Typography>
      </>
    )
  };

  const changeCommentWriteInput = (e) => {
    setCommentWriteInput(e.target.value)
  };

  return (
    <>
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
          <MainContentsImage src={tempImages()} alt={'image1'}
          />
          <CardContent style={{padding : 5}}>
            <Typography >
              <div className={classes.container}>
                <div className={classes.iconWrapper}>
              <LikeButton id={123} ownerHasLiked={contentsHeartIcon} />
              {/*{contentsHeartIcon ?*/}
              {/*  <img src="images/스크린샷 2020-02-28 오후 7.31.29.png" alt="instagramlogo" className={classes.buttonOthers}*/}
              {/*       onClick={onContentsHeartIcon}*/}
              {/*       style={{background:"red"}}*/}
              {/*  />*/}
              {/*  :*/}
              {/*  <img src="images/스크린샷 2020-02-28 오후 7.31.29.png" alt="instagramlogo" className={classes.buttonOthers}*/}
              {/*       style={{color:"red"}} onClick={onContentsHeartIcon}*/}
              {/*  />*/}
              {/*}*/}

              <div className={classes.comments} />
              <div className={classes.share}/>
              <div className={classes.save} />
                </div>
              </div>

              {/*<img src="images/contentsImg1.png" alt="instagramlogo" className={classes.buttonOthers2}/>*/}
              {/*<img src="images/contentsImg2.png" alt="instagramlogo" className={classes.buttonOthers2}/>*/}
              {/*<img src="images/contentsImg3.png" alt="instagramlogo" className={classes.buttonOthers3}/>*/}
            </Typography>
            <Typography variant="button" display="inline"  style={{cursor:"pointer"}}
                        className={classes.likeID} onClick={()=>{console.log(123)}}>
              좋아요 1,732,332개
            </Typography>
            <br/>
            <Typography variant="button" display="inline"  style={{cursor:"pointer"}}
                        className={classes.likeID} onClick={()=>{console.log(123)}}>
              ID
            </Typography>
            <Typography variant="button" display="inline"
                        className={classes.likeText} >
              {tempTextContennts.length < 10 ? tempTextContennts : contentsTextSpread ? tempTextContennts : textSubstr(tempTextContennts)
              }
            </Typography>
            <br/>
            {postComments()}
            <br/>
            <Typography variant="button" display="inline"
                        className={classes.timeAgo} >
              13시간 전
            </Typography>
          </CardContent>
          <CardContent className={classes.commentWrite}>
            <InputBase onChange={changeCommentWriteInput}
              placeholder={"댓글 달기..."}
                        style={{color: "#8E8E8E", fontSize: "15px", paddingBottom: "0px"}}
           />
            {
              commentWriteInput.length>0 ?
                <Typography  display="inline"
                  style={{float:"right", color: "#0095f6", cursor: "pointer"}}>
                  게시
                </Typography> :
                <Typography  display="inline"
                  style={{float:"right", color: "#C6DFFA",}}>
                  게시
                </Typography>

            }


          </CardContent>
        </Card>


      </Container>
    </div>
    </>
  );
};

export default MainContents;