import React from 'react';
import { Container } from 'react-bootstrap';
import { User } from '../../types';
import './style.css'
import Icon from '/src/assets/icon-user.png'

interface ProfileDataProps {
    user: User[];
}

const ProfileData: React.FC<ProfileDataProps> = ({user}) => {
    return (
        <Container className='p-0'>
            {user.map((user) => (
                <div className='containerProfile'>
                <div className='userContent'>
                    <img src={Icon} alt="" />
                    <div className='contentProfile'>
                        <h4>{user.nome}</h4>
                        <li>apê{user.apartamento}</li>
                        <li>{user.email}</li>
                        <li> publicações</li></div>
                </div>
                <div className='buttonProfile'>
                <button className='buttonEdit' type="button">editar perfil</button>
                </div>
            </div>
            ))}
        </Container>
    );
};

export default ProfileData;