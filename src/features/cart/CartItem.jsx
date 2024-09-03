import { formatCurrency } from "../../utils/helpers";
import PropTpes from "prop-types";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTpes.object.isRequired,
};

export default CartItem;
