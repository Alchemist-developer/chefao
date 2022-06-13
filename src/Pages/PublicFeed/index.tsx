import React from 'react';
import { BodyContainer } from '../../components/Container/styled';
import FeedContainer from '../../components/FeedContainer';
import Navbar from '../../components/Navbar';
import PostCreator from '../../components/PostCreator';



const PublicFeed: React.FC = () => {
  return (
  <div>
  <Navbar />
  <BodyContainer>  
 <FeedContainer>
  <PostCreator />
 </FeedContainer>
</BodyContainer>
</div>
  );
}

export default PublicFeed;
