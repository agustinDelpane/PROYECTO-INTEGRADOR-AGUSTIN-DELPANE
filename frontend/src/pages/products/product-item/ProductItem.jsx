import { useState, useContext } from "react";
import AppContext from "@/contexts/AppContext";
import { ButtonPrimary, ButtonDanger } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import { API_URL_IMAGES } from "@/constants/api.constant";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    CardActionArea,
    Card as MuiCard,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./product-item.scss";
import { AlertDanger } from "@/components/alerts";

const ProductItem = ({ product, isLoading, className, onDeleteSuccess, ...restProps }) => {
    const navigate = useNavigate();
    const { shoppingCartContext, productsContext } = useContext(AppContext);
    const {
        addArticle,
        subtractArticle,
        removeArticle,
        stockAlert,
        setStockAlert,
    } = shoppingCartContext;
    const { removeProduct } = productsContext;

    const [ openDialog, setOpenDialog ] = useState(false);

    const classes = `product-item ${className ?? ""}`;

    const handleEditProduct = () => navigate(`/products/${product.id}`);
    const handleAddArticle = () => addArticle(product.id, 1);
    const handleSubtractArticle = () => subtractArticle(product.id, 1);

    const handleDelete = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const confirmDelete = async () => {
        await removeProduct(product.id);
        removeArticle(product.id);
        setOpenDialog(false);
        if (onDeleteSuccess) onDeleteSuccess(product.name);
    };

    const getSourceImage = () => {
        return product.thumbnail === "default.jpg"
            ? `${API_URL_IMAGES}/${product.thumbnail}`
            : `${API_URL_IMAGES}/products/${product.thumbnail}`;
    };

    const renderActions = () => {
        return (
            <>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonDanger className="product-item__delete" size="sm" onClick={handleDelete}>
                        <DeleteIcon />
                    </ButtonDanger>
                </Skeleton>

                {product.stock > 0 ? (
                    <>
                        <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                            <ButtonPrimary className="product-item__add" size="sm" onClick={handleAddArticle}>
                                <AddShoppingCartIcon />
                            </ButtonPrimary>
                        </Skeleton>
                        <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                            <ButtonPrimary className="product-item__remove" size="sm" onClick={handleSubtractArticle}>
                                <RemoveCircleOutlineIcon />
                            </ButtonPrimary>
                        </Skeleton>
                    </>
                ) : (
                    <Text variant="p">SIN STOCK</Text>
                )}
            </>
        );
    };

    return (
        <>
            <MuiCard className={classes} {...restProps}>
                <Skeleton className="product-item__image--skeleton" isLoading={isLoading}>
                    <CardActionArea>
                        <img
                            className="product-item__image"
                            src={getSourceImage()}
                            alt="Imagen del producto"
                            onClick={handleEditProduct}/>
                    </CardActionArea>
                </Skeleton>

                <div className="product-item__content">
                    <Skeleton className="product-item__name--skeleton" isLoading={isLoading}>
                        <Text className="product-item__name" variant="h3">
                            {product.name}
                        </Text>
                    </Skeleton>
                    <Skeleton className="product-item__description--skeleton" isLoading={isLoading}>
                        <Text className="product-item__description" variant="p">
                            {product.description}
                        </Text>
                    </Skeleton>
                    <Skeleton className="product-item__price--skeleton" isLoading={isLoading}>
                        <Text className="product-item__price" variant="span">
                            ${product.price.toFixed(2)}
                        </Text>
                    </Skeleton>
                </div>

                <div className="product-item__actions">{renderActions()}</div>
            </MuiCard>

            {/* Dialogo al eliminar */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Eliminar producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Seguro que querés eliminar <strong>{product.name}</strong>? Esta acción no se puede
                        deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonPrimary size="sm" onClick={handleCloseDialog}>
                        Cancelar
                    </ButtonPrimary>
                    <ButtonDanger size="sm" onClick={confirmDelete}>
                        Eliminar
                    </ButtonDanger>
                </DialogActions>
            </Dialog>

            {/* Alerta de stock */}
            {stockAlert && (
                <AlertDanger
                    open={stockAlert}
                    onClose={() => setStockAlert(false)}
                    message="¡No hay más stock para este producto!"/>
            )}
        </>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onDeleteSuccess: PropTypes.func,
};

export default ProductItem;