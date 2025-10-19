import { Text } from "@/components/texts";
import "./home.scss";
import AdSlider from "./ad-slider/AdSlider";
import HighlightedProducts from "./highlighted-products/HighlightedProducts";
import HighlightedParagraph from "./highlighted-paragraph/HighlightedParagraph";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2" className="title">Inicio</Text>
            <AdSlider />
            <HighlightedParagraph />
            <HighlightedProducts/>
        </div>
    );
};

export default Home;