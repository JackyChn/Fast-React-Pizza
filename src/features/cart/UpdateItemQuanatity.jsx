import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuanatity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex-cols-2 flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      {quantity}
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuanatity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default UpdateItemQuanatity;
