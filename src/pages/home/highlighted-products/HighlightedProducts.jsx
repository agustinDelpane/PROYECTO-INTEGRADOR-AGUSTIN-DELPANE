import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import HighlightedProductCard from "./highlighted-product-card/HighlightedProductCard";
import { Text } from "@/components/texts";
import "./highlighted-products.scss";

const HighlightedProducts = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;
    const highlighted = products.slice(0, 3);

    return (
        <div className="highlighted-products">
            <Text variant="h3" className="sub-title">Productos destacados:</Text>
            <div className="highlighted-products__list">
                {highlighted.map((product) => (
                    <HighlightedProductCard
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                ))}
            </div>
        </div>
    );
};

export default HighlightedProducts;