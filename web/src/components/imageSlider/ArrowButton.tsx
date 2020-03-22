import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
  root: {
    height: "10%",
    position: "absolute",
    top: "45%",
    // @ts-ignore
    right: ({right}) => right && 0,
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    cursor: 'pointer',
    transition: 'opacity 300ms, ',
    // @ts-ignore
    // opacity: ({alwaysShowArrows, showArrows}) => alwaysShowArrows || showArrows ? 1 : 0,
    // @ts-ignore
    background: ({arrowsBgColor}) => arrowsBgColor,
    '&:hover': {
      // @ts-ignore
      background: ({arrowsBgHoverColor}) => arrowsBgHoverColor,
    },
  },
  arrow: {
    position: 'relative',
    display: 'block',
    height: 50,
    '&::before': {
      position: "absolute",
      display: "block",
      content: "''",
      border: "15px solid transparent",
      // @ts-ignore
      right: ({left}) => left && -5,
      // @ts-ignore
      borderRightColor: ({left, arrowsColor}) => left,
      // @ts-ignore
      left: ({right}) => right && -5,
      // @ts-ignore
      borderLeftColor: ({right, arrowsColor}) => right ,
    },
  },
});

function ArrowButton(props) {
  const {onButtonClick, right, left, CustomArrow} = props;

  if (!CustomArrow && !right && !left) {
    throw new Error('One of `right` or `left` props must be true');
  }

  const classes = useStyles(props);
  return <div onClick={onButtonClick} className={classes.root}>
    {CustomArrow ? CustomArrow() : <div className={`${classes.arrow}`}/>}
  </div>;
}

export default ArrowButton;