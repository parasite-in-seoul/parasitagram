import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, Theme } from '@material-ui/core/styles';

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
  images:{
    width: "614px",
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        시작하기
      </div>
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
            >
            </CardMedia>
          </Card>
          <img src="/images/Content_Image.jpg" alt="image1" className={classes.images}/>
        </Container>
      </div>
      <div>
        오른쪽 컨텐츠
      </div>
      </>
  );
};

export default Main;