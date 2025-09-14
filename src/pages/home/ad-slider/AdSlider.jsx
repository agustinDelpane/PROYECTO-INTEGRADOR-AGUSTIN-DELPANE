import "./ad-slider.scss";

const AdSlider = () => {
    return(<div className="slider">
        <div className="slider__slides">
            <div className="slider__slide">
                <img src="./images/slider/slide1.jpg" alt="Banner Oferta 1" />
            </div>
            <div className="slider__slide">
                <img src="./images/slider/slide2.jpg" alt="Banner Oferta 2" />
            </div>
            <div className="slider__slide">
                <img src="./images/slider/slide3.jpg" alt="Banner Oferta 3" />
            </div>
        </div>
    </div>);
};

export default AdSlider;