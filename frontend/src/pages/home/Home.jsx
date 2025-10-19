import { Text } from "@/components/texts";
import "./home.scss";
import AdSlider from "./ad-slider/AdSlider";
import HighlightedProducts from "./highlighted-products/HighlightedProducts";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2">Inicio</Text>
            <AdSlider />
            <HighlightedProducts/>
        </div>
    );
};

export default Home;