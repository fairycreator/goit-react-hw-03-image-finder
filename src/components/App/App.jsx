import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import api from '../Api/Api';
import '../Styles/styles.css';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isError: false,
    error: null,
    showModal: false,
    modalImageURL: '',
    searchQuery: 'react',
    currentPage: 1,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], currentPage: 1 }, this.fetchImages);
    }
  }

  fetchImages = async () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });

    try {
      const images = await api.fetchImages(searchQuery, currentPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ isError: true, error, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  handleImageClick = largeImageURL => {
    this.setState({ showModal: true, modalImageURL: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImageURL: '' });
  };

  render() {
    const { images, isLoading, isError, showModal, modalImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isError && <div>Error: {this.state.error.message}</div>}
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal largeImageURL={modalImageURL} onClose={this.closeModal} />
        )}
        {images.length > 0 && !isLoading && !isError && (
          <Button onLoadMore={this.fetchImages} show={true} />
        )}
      </div>
    );
  }
}

export default App;
