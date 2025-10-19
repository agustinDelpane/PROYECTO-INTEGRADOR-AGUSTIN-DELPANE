import { IconButtonBadge } from "@/components/icon-buttons";
import AppContext from "@/contexts/AppContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import "./header.scss";
import InstitutionLogo from "./institution-logo/InstitutionLogo";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart } = shoppingCartContext;
    const navigate = useNavigate();

    const handleShoppingCart = ()=>{
        navigate("/shopping-cart");
    };

    return (
        <header className="header">
            <InstitutionLogo className="header_institution"/>
            <IconButtonBadge
                className="header__shopping-cart"
                badgeContent={shoppingCart.totalQuantity ?? 0}>
                <ShoppingCartIcon className="shopping-cart-icon" onClick={handleShoppingCart}/>
            </IconButtonBadge>
        </header>
    );
};

export default Header;