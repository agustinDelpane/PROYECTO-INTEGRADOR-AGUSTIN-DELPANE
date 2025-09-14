import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import { Text } from "@/components/texts";
import "./product-gallery.scss";
import PropTypes from "prop-types";

const ProductGallery = ({ searchTerm }) => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    let filteredProducts = products;

    if (searchTerm.length >= 3) {
        filteredProducts = products.filter((product) => {
            const term = searchTerm.toLowerCase();
            return (
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term)
            );
        });
    }

    return (
        <div className="product-gallery">
            <ProductNewItem />

            {filteredProducts.length === 0 ? (
                <Text variant="p" className="no-result">No se encontraron resultados...</Text>
            ) : (
                filteredProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                ))
            )}
        </div>
    );
};

ProductGallery.propTypes = {
    searchTerm: PropTypes.string,
};

export default ProductGallery;