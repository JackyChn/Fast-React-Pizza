import { formatCurrency } from "../../utils/helpers";
import PropTpes from "prop-types";
import DeleteItem from "./DeleteItem";
import UpdateItemQuanatity from "./UpdateItemQuanatity";

function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;

  return (
    <li className="px-2 py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">{name}</p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuanatity pizzaId={pizzaId} quantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  pizza: PropTpes.object.isRequired,
};

export default CartItem;
