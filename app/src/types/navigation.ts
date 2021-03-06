export type AuthorizedNavigatorParamList = {
  Main: undefined;
};

export type MainTabNavigatorParamList = {
  Feed: FeedNavigatorParamList;
  Upload: undefined;
  MyProfile: undefined;
};

export type FeedNavigatorParamList = {
  Feeds: undefined;
  User: undefined;
  Posts: undefined;
  Comments: undefined;
  Direct: undefined;
};
