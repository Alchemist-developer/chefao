import React from 'react';
import { Container } from 'react-bootstrap';
import { Post } from '../../types';
import Icon from "/src/assets/icon.png";
import "./style.css"

interface PostFeedProps {
  posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <Container className='p-0'>
    {posts.map(post => (
       <div className="containerPostFeed">
       <div className="postFeed">
         <img src={Icon} alt="" />
         <div>
           <h5 className='nomeApartamento'>{post.nome} - apê {post.apartamento}</h5>
           <h5 className='dataHora'>13/06/2022 03:05</h5>
           <p>{post.comentario}</p>
         </div>
       </div>
     </div>
    ))}
    </Container>
  );
}

export default PostFeed;