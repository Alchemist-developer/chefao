import React, { useEffect, useState } from 'react';
import { BodyContainer } from '../../Components/Container/styled';
import FeedContainer from '../../Components/FeedContainer';
import Navbar from '../../Components/Navbar';
import PostCreator from '../../Components/PostCreator';
import PostFeed from '../../Components/PostFeed';
import ProfileFeed from '../../Components/ProfileFeed';
import { renderPosts } from '../../services/posts';
import { Post } from '../../types';



function PublicFeed(): JSX.Element {
  
  const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {

        const getPosts = async () => {
            const posts = await renderPosts()
            setPostList(posts)
        }
        getPosts();
    }, [])

  return (
  <div>
  <Navbar />
  <BodyContainer>  
 <FeedContainer>
  <PostCreator atualizarFeed ={setPostList} />
  <PostFeed posts={postList}/>
  
 </FeedContainer>
</BodyContainer>
</div>
  );
}

export default PublicFeed;
