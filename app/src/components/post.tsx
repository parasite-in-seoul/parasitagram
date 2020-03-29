import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Post extends Component {
  render() {
    return (
      <View style={styles.postContainer}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImage} />
          <View style={styles.profileName}>
            <Text>Profile Name</Text>
          </View>
        </View>

        <View style={styles.photoContainer}>
          <Text>Photo</Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.actionContainer}>
            <Text>Action Footer</Text>
          </View>

          <View style={styles.likesContainer}>
            <Text>94,091,238 likes</Text>
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
    backgroundColor: 'green',
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
  photoContainer: {
    height: 400,
    backgroundColor: 'grey',
  },
  footerContainer: {
    padding: 15,
  },
  actionContainer: {
    height: 35,
    backgroundColor: 'skyblue',
  },
  likesContainer: {
    justifyContent: 'center',
    height: 35,
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
