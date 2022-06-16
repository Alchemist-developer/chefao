import React from 'react';
import { BodyContainer } from '../../components/Container/styled';
import FeedContainer from '../../components/FeedContainer';
import Navbar from '../../components/Navbar';
import ProfileData from '../../components/ProfileData';

const ProfileUser: React.FC = () => {
  return (
    <div>
    <Navbar />
    <BodyContainer>  
   <FeedContainer>
  <ProfileData/>
  {/* aqui vao os posts do usuario logado - postfeed*/}
 
   </FeedContainer>
  </BodyContainer>
  </div>
  );
}

export default ProfileUser;