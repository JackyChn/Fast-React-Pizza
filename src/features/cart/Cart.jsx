import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Modal from "../../ui/Modal";
import TestForm from "../../ui/TestForm";
import { useState } from "react";

function Cart() {
  const [isShowModal, setIsShowModal] = useState(false);
  const username = useSelector((store) => store.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="py-3">
      <LinkButton
        to="/menu"
        className="text-md text-red-800 hover:text-blue-600"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-y">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 flex gap-2 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClear}>
          Clear cart
        </Button>

        <button
          onClick={() => {
            setIsShowModal((isShowModal) => !isShowModal);
          }}
        >
          Show Modal
        </button>
        {isShowModal && (
          <Modal
            onClose={() => {
              setIsShowModal((isShowModal) => !isShowModal);
            }}
          >
            <TestForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Cart;
