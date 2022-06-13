import React from 'react';
import { BodyContainer } from '../../components/Container/styled';
import FeedContainer from '../../components/FeedContainer';
import Navbar from '../../components/Navbar';



const PublicFeed: React.FC = () => {
  return (
  <div>
  <Navbar />
  <BodyContainer>  
 <FeedContainer>

 </FeedContainer>
</BodyContainer>
</div>
  );
}

export default PublicFeed;