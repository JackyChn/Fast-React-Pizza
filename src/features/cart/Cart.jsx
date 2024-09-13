import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Spinner from "../../ui/Spinner";

function Cart() {
  const username = useSelector((store) => store.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return <Spinner />;
  // if (!cart.length) return <EmptyCart />;
  // return (
  //   <div className="py-3">
  //     <LinkButton
  //       to="/menu"
  //       className="text-md text-red-800 hover:text-blue-600"
  //     >
  //       &larr; Back to menu
  //     </LinkButton>

  //     <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

  //     <ul className="mt-3 divide-y divide-stone-200 border-y">
  //       {cart.map((pizza) => (
  //         <CartItem pizza={pizza} key={pizza.pizzaId} />
  //       ))}
  //     </ul>

  //     <div className="mt-6 flex space-x-2">
  //       <Button to="/order/new" type="primary">
  //         Order pizzas
  //       </Button>
  //       <Button type="secondary" onClick={handleClear}>
  //         Clear cart
  //       </Button>
  //     </div>
  //   </div>
  // );
}

export default Cart;
