import "./ad-slider.scss";
import { API_URL_IMAGES } from "@/constants/api.constant";

const AdSlider = () => {
    return(<div className="slider">
        <div className="slider__slides">
            <div className="slider__slide">
                <img src={`${API_URL_IMAGES}/slider/slide1.jpg`} alt="Banner Oferta 1" />
            </div>
            <div className="slider__slide">
                <img src={`${API_URL_IMAGES}/slider/slide2.jpg`} alt="Banner Oferta 2" />
            </div>
            <div className="slider__slide">
                <img src={`${API_URL_IMAGES}/slider/slide3.jpg`} alt="Banner Oferta 3" />
            </div>
        </div>
    </div>);
};

export default AdSlider;