import { formatCurrency } from "../../utils/helpers";
import PropTpes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTpes.object.isRequired,
  isLoadingIngredients: PropTpes.bool,
  ingredients: PropTpes.node,
};

export default OrderItem;
