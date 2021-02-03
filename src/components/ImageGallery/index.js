import React, { useState } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import { ImageThumbnail } from './ImageThumbnail/index';

export const ImageGallery = ({ images, selectedVariantImageId }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              onClick={handleClick}
              image={image}
              isActive={activeImageThumbnail.id === image.id}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
};
