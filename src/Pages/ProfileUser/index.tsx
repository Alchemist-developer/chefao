import React from 'react';
import { BodyContainer } from '../../Components/Container/styled';
import FeedContainer from '../../Components/FeedContainer';
import Navbar from '../../Components/Navbar';
import ProfileData from '../../Components/ProfileData';
import PostFeed from '../../Components/PostFeed';
import {usePost}  from '../../hooks/usePost';



function ProfileUser(): JSX.Element {
  const postList = usePost()
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <FeedContainer>
          <ProfileData />
          {/* aqui vao os posts do usuario logado - postfeed*/}
          <PostFeed posts={postList} />
        </FeedContainer>
      </BodyContainer>
    </div>
  );
}

export default ProfileUser;