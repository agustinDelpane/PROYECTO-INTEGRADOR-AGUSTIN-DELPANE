import { Text } from "@/components/texts";
import React from "react";
import "./highlighted-paragraph.scss";

const HighlightedParagraph = () => {
    return (
        <div className="highlighted-paragraph">
            <Text variant="p" className="highlighted-paragraph__text">
                Bienvenidos a nuestra pagina. Aqui podran comprar los mejores instrumentos al mejor precio.
                ¡Cada semana ingresan nuevos productos!
            </Text>
        </div>
    );
};

export default HighlightedParagraph;