import { Text } from "@/components/texts";
import ProductGallery from "./product-gallery/ProductGallery";
import { useState } from "react";
import "./products.scss";
import ProductSearch from "./product-search/ProductSearch";

const Products = () => {
    const [ searchTerm, setSearchTerm ] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <div className="products">
            <Text variant="h2" className="title">Productos</Text>
            <ProductSearch
                searchTerm={searchTerm}
                onChange={handleChange}
                onClear={handleClear}/>
            <ProductGallery searchTerm={searchTerm} />
        </div>
    );
};

export default Products;