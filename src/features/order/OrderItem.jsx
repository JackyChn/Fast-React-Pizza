import { formatCurrency } from "../../utils/helpers";
import PropTpes from "prop-types";

function OrderItem({ pizza, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = pizza;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm font-bold">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  pizza: PropTpes.object.isRequired,
  isLoadingIngredients: PropTpes.bool,
  ingredients: PropTpes.node,
};

export default OrderItem;
