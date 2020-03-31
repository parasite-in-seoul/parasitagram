import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Post extends Component {
  render() {
    return (
      <View style={styles.postContainer}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImage} />
          <View style={styles.profileName}>
            <Text style={styles.profileText}>Profile Name</Text>
          </View>
        </View>

        <View style={styles.photoContainer}>
          <Text>Photo</Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.actionContainer}>
            <View style={styles.defaultActions}>
              <Icon name={'heart'} size={25} style={styles.icon} />
              <Icon name={'bubble'} size={25} style={styles.icon} />
              <Icon name={'paper-plane'} size={25} style={styles.icon} />
            </View>
            <View style={styles.restActions}>
              <Icon name={'star'} size={25} />
            </View>
          </View>

          <View style={styles.likesContainer}>
            <Text style={styles.likeText}>94,091,238 likes</Text>
          </View>

          <View style={styles.postContent}>
            <Text>Content</Text>
          </View>

          <View style={styles.commentContainer}>
            <Text>Add a comment...</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text>XXX days ago</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: 'white',
  },
  profileHeaderContainer: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
  profileName: {
    marginHorizontal: 5,
  },
  profileText: {
    fontWeight: '500',
  },
  photoContainer: {
    height: 400,
    backgroundColor: 'grey',
  },
  footerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  defaultActions: {
    flexDirection: 'row',
  },
  restActions: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 20,
  },
  likesContainer: {
    justifyContent: 'center',
    height: 35,
  },
  likeText: {
    fontWeight: '500',
  },
  postContent: {
    height: 100,
    backgroundColor: 'yellow',
  },
  commentContainer: {
    justifyContent: 'center',
    height: 35,
    backgroundColor: 'teal',
  },
  timeContainer: {
    justifyContent: 'center',
    height: 30,
  },
});

export default Post;
