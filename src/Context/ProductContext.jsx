import { createContext, useEffect, useState } from "react";
import ErrorBoundary from "../components/ComponentDidCatch"; // Import the correct ErrorBoundary component
import CartItem from "../components/CartItem/CartItem";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [counter, setCounter] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      if (result && result.products) {
        setProducts(result.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg) {
    return <div>Unable to fetch data!</div>;
  }

  const getProductQuantity = (id) => {
    let quantity = products.find((product) => product.id === id)?.quantity;
    if (quantity === 0) {
      return 0;
    }
    return quantity;
  };

  function addToCart(product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added successfully!");
    setCounter(cart.length);
  }

  function removeFromCart(productId) {
    const newCart = [...cart];
    newCart.splice(productId, 1);
    setCart(newCart);
    setCounter(newCart.length);
    if (newCart.length === 0) {
      localStorage.removeItem("cart");
    }
  }

  function deleteFromCart(product) {
    let cart = [];
    cart = JSON.parse(localStorage.removeItem("cartItem")) || [];
    cart.splice(product);
    localStorage.removeItem("cartItem", JSON.stringify(cart));

    alert("Product removed successfully!");
  }

  const contextValue = {
    products,
    items: cartItems,
    cart,
    setCart,
    counter,
    setCounter,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getProductQuantity,
  };
  // Wrap the context provider with ErrorBoundary component
  return (
    <ErrorBoundary>
      <ProductsContext.Provider value={contextValue}>
        {children}
      </ProductsContext.Provider>
    </ErrorBoundary>
  );
};

export default ProductsContextProvider;
