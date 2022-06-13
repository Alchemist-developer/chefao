import React from 'react';
import { BodyContainer } from '../../components/Container/styled';
import FeedContainer from '../../components/FeedContainer';
import Navbar from '../../components/Navbar';
import PostCreator from '../../components/PostCreator';
import PostFeed from '../../components/PostFeed';
import usePost from '../../hooks/usePost';



function PublicFeed(): JSX.Element {

  const postList = usePost() 

  return (
  <div>
  <Navbar />
  <BodyContainer>  
 <FeedContainer>
  <PostCreator />
  <PostFeed posts={postList} />
 </FeedContainer>
</BodyContainer>
</div>
  );
}

export default PublicFeed;
