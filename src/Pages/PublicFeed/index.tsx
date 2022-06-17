import React from 'react';
import { BodyContainer } from '../../Components/Container/styled';
import FeedContainer from '../../Components/FeedContainer';
import Navbar from '../../Components/Navbar';
import PostCreator from '../../Components/PostCreator';
import PostFeed from '../../Components/PostFeed';
import ProfileFeed from '../../Components/ProfileFeed';
import { usePost } from '../../hooks/usePost';



function PublicFeed(): JSX.Element {

  const postList = usePost() 

  return (
  <div>
  <Navbar />
  <BodyContainer>  
 <FeedContainer>
  <PostCreator />
  <PostFeed posts={postList}/>
  
 </FeedContainer>
</BodyContainer>
</div>
  );
}

export default PublicFeed;
