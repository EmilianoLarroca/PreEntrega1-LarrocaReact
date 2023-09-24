import { useContext } from "react";
import './cartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";


export const CartWidget = () => {
        const {totalWidget} = useContext(CartContext)

    return (
        <div className="carrito">
            <Link className="menu-link" to="/carrito">
                <i className="bi bi-cart4"></i>
                <span className="numero">{totalWidget}</span>
            </Link>
        </div>
    )
}

export default CartWidget;