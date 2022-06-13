import React from "react";
import Navbar from "../../components/Navbar";
import PostFeed from "../../components/PostFeed";

// import { Container } from './styles';

const PublicFeed: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PostFeed />
    </div>
  );
};

export default PublicFeed;
