import React, { Component } from 'react';
import '../Styles/styles.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.image.largeImageURL);
  };

  render() {
    const { image } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          src={image.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
