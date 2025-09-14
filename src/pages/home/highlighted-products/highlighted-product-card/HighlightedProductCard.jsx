import ProductItem from "../../../products/product-item/ProductItem";
import PropTypes from "prop-types";
import "./highlighted-product-card.scss";

const HighlightedProductCard = ({ product, isLoading }) => {
    return (
        <div className="highlighted-product-card">
            <ProductItem product={product} isLoading={isLoading} />
        </div>
    );
};

HighlightedProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool,
};

export default HighlightedProductCard;