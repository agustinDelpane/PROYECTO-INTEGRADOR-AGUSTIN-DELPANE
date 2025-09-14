import { Text } from "@/components/texts";
import PropTypes from "prop-types";
import "./institution-logo.scss";

const InstitutionLogo = (props) => {
    const { className, ...restProps } = props;
    const classes = `institution-logo ${className ?? ""}`;

    return (
        <div className={classes} {...restProps}>
            <img className="institution-logo__logo" src={"/images/logoBig.png"} alt="Logo de Rock Hard"/>
            <Text className="institution-logo__title" variant="h1">Rock Hard</Text>
        </div>
    );
};

InstitutionLogo.propTypes = {
    className: PropTypes.string,
};

export default InstitutionLogo;