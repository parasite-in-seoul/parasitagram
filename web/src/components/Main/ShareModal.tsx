import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from "react";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: '400px',
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      borderRadius: "15px"
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const ShareModal = ({open, handleClose}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition={true}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <List component="nav" aria-label="main mailbox folders"
                subheader={
                  <>
                    <ListSubheader component="div" id="nested-list-subheader" style={{padding:0}}>
                      <span style={{textAlign: 'center', margin:10, marginLeft: '180px', fontSize: '18px', fontWeight: 'bold'}}>공유</span>
                      <CloseIcon style={{float: 'right', margin: "10px", cursor: 'pointer', fontSize: '25px'}}
                        // onClick={onCloseClick}
                      />
                    </ListSubheader>
                    <Divider />
                  </>
                }
              >
                <ListItem button={true}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facebook에 공유" />
                </ListItem>
                <ListItem button={true}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Messenger에 공유" />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary="Twitter에 공유" />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary="이메일로 공유" />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary="링크 복사" />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary="취소" />
                </ListItem>
              </List>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};
export default ShareModal;