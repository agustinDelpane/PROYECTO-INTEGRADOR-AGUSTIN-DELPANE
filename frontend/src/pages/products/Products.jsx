import { Text } from "@/components/texts";
import ProductGallery from "./product-gallery/ProductGallery";
import "./products.scss";
import ProductSearcher from "./product-searcher/ProductSearcher";
import { useState } from "react";

const Products = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ highlighted, setHighlighted ] = useState(false);

    const handleChange = (e) => setSearchTerm(e.target.value);
    const handleClear = () => {
        setSearchTerm("");
        setHighlighted(false);
    };
    const handleToggleHighlighted = () => setHighlighted((prev) => !prev);

    return (
        <div className="products">
            <Text variant="h2">Productos</Text>
            <div className="product-gallery__searcher">
                <ProductSearcher
                    searchTerm={searchTerm}
                    onChange={handleChange}
                    onClear={handleClear}
                    highlighted={highlighted}
                    onToggleHighlighted={handleToggleHighlighted}/>
            </div>
            <ProductGallery searchTerm={searchTerm} highlighted={highlighted} />
        </div>
    );
};

export default Products;