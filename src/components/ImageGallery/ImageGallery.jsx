import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../Styles/styles.css';

class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem key={nanoid()} image={image} onClick={onClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
