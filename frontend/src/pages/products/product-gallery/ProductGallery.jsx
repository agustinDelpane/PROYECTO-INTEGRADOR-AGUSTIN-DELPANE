import { useContext, useState } from "react";
import AppContext from "@/contexts/AppContext";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import { AlertSuccess } from "@/components/alerts";
import "./product-gallery.scss";
import PropTypes from "prop-types";

const ProductGallery = ({ searchTerm, highlighted }) => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ deletedProduct, setDeletedProduct ] = useState("");

    const handleDeleteSuccess = (productName) => {
        setDeletedProduct(productName);
        setOpenAlert(true);
    };

    const filteredProducts = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesHighlighted = highlighted ? product.highlighted : true;
        return matchesName && matchesHighlighted;
    });

    return (
        <div className="product-gallery">
            <ProductNewItem />

            {filteredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isLoading={isLoading}
                    onDeleteSuccess={handleDeleteSuccess}/>
            ))}

            <AlertSuccess
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                message={`El producto "${deletedProduct}" se ha eliminado satisfactoriamente.`}/>
        </div>
    );
};

ProductGallery.propTypes = {
    searchTerm: PropTypes.string,
    highlighted: PropTypes.bool,
};

export default ProductGallery;