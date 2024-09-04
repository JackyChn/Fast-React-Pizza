import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-auto bg-blue-200">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
