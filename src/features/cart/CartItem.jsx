import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import PropTpes from "prop-types";

function CartItem({ pizza }) {
  const { name, quantity, totalPrice } = pizza;

  return (
    <li className="px-2 py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  pizza: PropTpes.object.isRequired,
};

export default CartItem;
