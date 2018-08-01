import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './App.css';
import NavBar from './components/navbar';
import LandingPage from './components/landing_page';
// import Work from './components/work';
import About from './components/about';
import Skills from './components/skills';
// import Contact from './components/contact';
import Footer from './components/footer';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: "Pilt 1"},
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, caption: "Pilt 2"},
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];


class App extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    
    return (
      <div>
        <NavBar/>
        <LandingPage/>
        <section id='work'>
            <h3>Fotod</h3>
            <hr/>
            <div>
              <Gallery photos={photos} onClick={this.openLightbox} />
              <Lightbox images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                imageCountSeparator={' / '}
                backdropClosesModal= {true}
                leftArrowTitle={'Liigu vasakule (vasak nool)'}
                rightArrowTitle={'Liigu paremale (parem nool)'}
                closeButtonTitle={'Sulge galerii (Esc)'}
              />
            </div>
        </section>
        <About/>
        <Skills/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
