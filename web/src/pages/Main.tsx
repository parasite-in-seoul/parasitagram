import * as React from 'react';
import { red } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MainContents from "../components/Main/MainContents";

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
        <MainContents />
      <div>
        오른쪽 컨텐츠
      </div>
      </>
  );
};

export default Main;