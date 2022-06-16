import React from 'react';
import { BodyContainer } from '../../components/Container/styled';
import FeedContainer from '../../components/FeedContainer';
import Navbar from '../../components/Navbar';
import ProfileData from '../../components/ProfileData';
import PostFeed from '../../components/PostFeed';
import usePost from '../../hooks/usePost';



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