import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

const InputHighlighted = ({ formik, ...restProps }) => {
    const { values, setFieldValue, handleBlur, touched, errors } = formik;

    const error = touched.highlighted && Boolean(errors.highlighted);
    const helperText = touched.highlighted && errors.highlighted;

    return (
        <FormControl fullWidth error={error} {...restProps}>
            <InputLabel id="highlighted-label">Destacado</InputLabel>
            <Select
                labelId="highlighted-label"
                id="highlighted"
                name="highlighted"
                value={values.highlighted ? "true" : "false"} // string para el select
                onChange={(e) => setFieldValue("highlighted", e.target.value === "true")} // siempre boolean
                onBlur={handleBlur}
                label="Destacado">
                <MenuItem value="true">Sí</MenuItem>
                <MenuItem value="false">No</MenuItem>
            </Select>
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

InputHighlighted.propTypes = {
    formik: PropTypes.shape({
        values: PropTypes.shape({
            highlighted: PropTypes.bool.isRequired,
        }).isRequired,
        setFieldValue: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        touched: PropTypes.shape({
            highlighted: PropTypes.bool,
        }).isRequired,
        errors: PropTypes.shape({
            highlighted: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default InputHighlighted;