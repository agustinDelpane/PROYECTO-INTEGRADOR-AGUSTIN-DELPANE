import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import "./product-search.scss";

const ProductSearch = ({ searchTerm, onChange, onClear }) => {
    return (
        <div className="product-search">
            <TextField
                value={searchTerm}
                onChange={onChange}
                placeholder="Buscar producto..."
                size="small"
                className="searcher"/>

            <Button variant="contained" onClick={onClear}>
                Limpiar
            </Button>
        </div>
    );
};

ProductSearch.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

export default ProductSearch;