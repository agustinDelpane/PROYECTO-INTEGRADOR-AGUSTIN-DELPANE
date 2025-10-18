import { useState, useEffect, useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { Text } from "@/components/texts";
import productsApi from "@/api/products.api"; // 👈 IMPORTAR DIRECTAMENTE
import "./highlighted-products.scss";
import ProductItem from "@/pages/products/product-item/ProductItem";

const HighlightedProducts = () => {
    const { productsContext } = useContext(AppContext);
    const { isLoading: globalLoading } = productsContext;

    const [ highlightedProducts, setHighlightedProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const loadHighlighted = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await productsApi.fetchProducts({ highlighted: true });
                setHighlightedProducts(data || []);
            } catch (err) {
                console.error("Error cargando productos destacados:", err);
                setHighlightedProducts([]);
                setError("No se pudieron cargar los productos destacados");
            }

            setIsLoading(false);
        };

        loadHighlighted();
    }, []);

    if (error) return <div className="highlighted-products-error">{error}</div>;
    if (isLoading) return <div className="highlighted-products-loading">Cargando destacados...</div>;
    if (!highlightedProducts.length) return <div className="highlighted-products-empty">No hay productos destacados.</div>;

    return (
        <div className="highlighted-products">
            <Text variant="h3" className="sub-title">Productos destacados:</Text>
            <div className="highlighted-products__list">
                {highlightedProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={globalLoading} />
                ))}
            </div>
        </div>
    );
};

export default HighlightedProducts;