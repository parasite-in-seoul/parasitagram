import React from 'react';
//예시
const Post = ({match}:any) => {
  return (
    <div>
      포스트 {match.params.id}
  </div>
);
};

export default Post;