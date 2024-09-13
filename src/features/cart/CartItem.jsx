import { formatCurrency } from "../../utils/helpers";
import PropTpes from "prop-types";
import DeleteItem from "./DeleteItem";

function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;

  return (
    <li className="px-2 py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  pizza: PropTpes.object.isRequired,
};

export default CartItem;
