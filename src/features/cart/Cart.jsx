import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  // const cart = fakeCart;

  return (
    <div className="py-3">
      <LinkButton
        to="/menu"
        className="text-md text-red-800 hover:text-blue-600"
      >
        &larr; Back to menu
      </LinkButton>

      <h2>Your cart, %NAME%</h2>

      <div className="flex space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="small">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
