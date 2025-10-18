import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import "./product-searcher.scss";

const ProductSearcher = ({ searchTerm, onChange, onClear, highlighted, onToggleHighlighted }) => {
    return (
        <div className="product-search">
            <TextField
                value={searchTerm}
                onChange={onChange}
                placeholder="Buscar producto..."
                size="small"
                className="searcher"/>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={highlighted}
                        onChange={onToggleHighlighted}
                        color="primary"/>
                }
                label="Destacados"/>

            <Button variant="contained" onClick={onClear}>
                Limpiar
            </Button>
        </div>
    );
};

ProductSearcher.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    highlighted: PropTypes.bool.isRequired,
    onToggleHighlighted: PropTypes.func.isRequired,
};

export default ProductSearcher;