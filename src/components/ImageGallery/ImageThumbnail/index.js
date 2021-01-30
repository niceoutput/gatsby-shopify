import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export const ImageThumbnail = ({ isActive, onClick, image }) => {
  return (
    <ImageThumbnailWrapper onClick={() => console.log('click')}>
      <Image fluid={image} />
    </ImageThumbnailWrapper>
  );
};
