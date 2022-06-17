import React from 'react';
import { Container } from 'react-bootstrap';
import { Post } from '../../types';
import Icon from "/src/assets/icon-user.png";
import "./style.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { renderPostsById } from '../../services/posts';
import { useEffect, useState } from "react";


interface PostFeedProps {
  posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {

  return (
    <Container className='p-0'>
      {posts.map(post => (
        <div className="containerPostFeed">
          <div className="postFeed">
            <img src={Icon} alt="imagem do usuario" />
            <div>
              <h5 className='nomeApartamento'>{post.user_nome} - apê {post.user_apartamento}</h5>
              <h5 className='dataHora'>13/06/2022 03:05</h5>
              <p className='comentario'>{post.comentario}</p>
            </div>
          </div>
        </div>
      )).reverse()}
    </Container>
  );
}

export default PostFeed;