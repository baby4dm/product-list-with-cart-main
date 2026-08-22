import Cart from "./components/Cart";
import ItemsList from "./components/ItemsList";
import OrderModal from "./components/OrderModal";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <div className="p-6 flex flex-col gap-8 bg-rose-50 items-center md:p-10 xl:p-22">
        <main className="flex flex-col gap-8 items-center xl:flex-row">
          <ItemsList />
          <Cart />
        </main>
      </div>
      <OrderModal />
    </CartProvider>
  );
}

export default App;
