import React from 'react';
import { Container } from 'react-bootstrap';
import { Post } from '../../types';
import Icon from "/src/assets/icon-user.png";
import Logo from "/src/assets/logo.png";
import "./style.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { renderPostsById } from '../../services/posts';
import { useEffect, useState } from "react";

interface ProfileFeedProps {
  posts: Post[];
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({posts}) => {
 
  if(posts.length === 0) {
    return (
      <Container className='p-0'>
          <h4 className='text-center m-5'>Você ainda não fez nenhuma publicação :(</h4>
          <div className='text-center'>
          <img src={Logo} alt="Imagem logo" />
          </div>
          </Container>
    )
  } else {
    return (
      <Container className='p-0'>
        {posts.map(post => (
          <div className="containerPostFeed">
            <div className="postFeed">
              <img src={Icon} alt="imagem do usuario" />
              <div>
                <h5 className='nomeApartamento'>{post.user_nome} - apê {post.user_apartamento}</h5>
                <h5 className='dataHora'>16/06/2022 19:10</h5>
                <p className='comentario'>{post.comentario}</p>
              </div>
            </div>
          </div>
        )).reverse()}
      </Container>
    );  
  }
}

export default ProfileFeed;