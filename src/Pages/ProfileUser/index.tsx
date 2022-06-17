import React, { useEffect, useState } from 'react';
import { BodyContainer } from '../../Components/Container/styled';
import FeedContainer from '../../Components/FeedContainer';
import Navbar from '../../Components/Navbar';
import ProfileData from '../../Components/ProfileData';
import PostFeed from '../../Components/PostFeed';
import ProfileFeed from '../../Components/ProfileFeed';
import { Post } from '../../types';
import { renderPostsById } from '../../services/posts';



function ProfileUser(): JSX.Element {


  const [postListByID, setPostListById] = useState<Post[]>([] as Post[]);

  useEffect(() => {

      const getPostsById = async () => {
          const posts = await renderPostsById(parseInt(window.location.search.split('?')[1]))
          setPostListById(posts)
      }
      getPostsById();
  }, [])


  return (
    <div>
      <Navbar />
      <BodyContainer>
        <FeedContainer>
          <ProfileData />
          <ProfileFeed posts={postListByID} />
        </FeedContainer>
      </BodyContainer>
    </div>
  );
}

export default ProfileUser;