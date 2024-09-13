// https://uibakery.io/regex-library/phone-number
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((store) => store.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let us go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      {/* By default, the action function is dismissed caz it will submit to the closest path, which is "/order/new" now, and whenever the form is submitted, the action is called */}
      <Form method="POST" action="/order/new">
        {/* name input box */}
        <div className="mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
            placeholder="FirstName..."
          />
        </div>
        {/* number input box */}
        <div className="mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full"
              placeholder="Phone..."
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-[5px] bg-red-100 px-3 py-1 text-xs text-red-400">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>
        {/* address input box */}
        <div className="mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              placeholder="Address..."
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>
        {/* priority checkout box */}
        <div className="mb-12 flex gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        {/* cart */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
        <div>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData(); // must be await or "object is not iterable" error
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priorty === "on",
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please enter the correct phone number.";
  if (Object.keys(errors).length > 0) return errors; // there are errors

  // no error, create new order & redirect
  const newOrder = await createOrder(order); // newOrder is what has been post
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
