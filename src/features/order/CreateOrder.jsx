// https://uibakery.io/regex-library/phone-number
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;
  const formErrors = useActionData();

  return (
    <div>
      <h2>Ready to order? Let us go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      {/* By default, the action function is dismissed caz it will submit to the closest path, which is "/order/new" now, and whenever the form is submitted, the action is called */}
      <Form method="POST" action="/order/new">
        {/* name input box */}
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>
        {/* number input box */}
        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        {/* address input box */}
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>
        {/* priority checkout box */}
        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        {/* cart */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className="inline-block rounded-[10px] bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Placing order..." : "Place order"}
          </button>
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
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
