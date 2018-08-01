import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import "./App.css";
import NavBar from "./components/navbar";
import LandingPage from "./components/landing_page";
// import Work from './components/work';
import About from "./components/about";
import Skills from "./components/skills";
// import Contact from './components/contact';
import Footer from "./components/footer";

// mobiili osa
const getBrowserWidth = function() {
  if (window.innerWidth > 991) {
    // Small Device
    return "desktop";
  }
};

const device = getBrowserWidth();

// galerii osa
const photos = [
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/3.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/5.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/6.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/7.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/8.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/9.jpg",
    width: 4,
    height: 3
  }
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
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    if (device === "desktop") {
      return (
        <div>
          <NavBar />
          <LandingPage />
          <section id="work">
            <h3>Fotod</h3>
            <hr />
            <div>
              <Gallery photos={photos} onClick={this.openLightbox} />
              <Lightbox
                images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                imageCountSeparator={" / "}
                backdropClosesModal={true}
                leftArrowTitle={"Liigu vasakule (vasak nool)"}
                rightArrowTitle={"Liigu paremale (parem nool)"}
                closeButtonTitle={"Sulge galerii (Esc)"}
              />
            </div>
          </section>
          <About />
          <Skills />
          {/* <Contact/> */}
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <LandingPage />
          <section id="work">
            <div>
              <Gallery photos={photos} onClick={this.openLightbox} />
              <Lightbox
                images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                imageCountSeparator={" / "}
                backdropClosesModal={true}
                leftArrowTitle={"Liigu vasakule (vasak nool)"}
                rightArrowTitle={"Liigu paremale (parem nool)"}
                closeButtonTitle={"Sulge galerii (Esc)"}
              />
            </div>
          </section>
          <About />
          <Skills />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
