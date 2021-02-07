import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

export const CollectionTile = ({
  description,
  title,
  backgroundImage,
  sale,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
