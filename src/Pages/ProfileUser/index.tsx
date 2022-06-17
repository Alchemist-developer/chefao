import React, { useEffect, useState } from 'react';
import { BodyContainer } from '../../Components/Container/styled';
import FeedContainer from '../../Components/FeedContainer';
import Navbar from '../../Components/Navbar';
import ProfileData from '../../Components/ProfileData';
import PostFeed from '../../Components/PostFeed';
import ProfileFeed from '../../Components/ProfileFeed';
import { Post } from '../../types';
import { renderPosts, renderPostsById } from '../../services/posts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';



function ProfileUser(): JSX.Element {

  const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {

        const getPosts = async () => {
            const posts = await renderPosts()
            setPostList(posts)
        }
        getPosts();
    }, [])

    const postListByID = postList.filter(obj => obj.user_id == parseInt(window.location.search.split('?')[1]))

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