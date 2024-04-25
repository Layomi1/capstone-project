import { createContext, useEffect, useState } from "react";
import ErrorBoundary from "../components/ComponentDidCatch"; // Import the correct ErrorBoundary component

// export function useProducts(id, products) {
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const data = products.find((item) => item.id === id);
//     setProduct(data);
//   }, [id, products]);

//   return product;
// }
export const ProductsContext = createContext(null);

const ProductsContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  function moveToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
    alert("Item added Successfully! ");
  }
  // const moveToCart = (itemId) => {
  //   setCartItems((prev) => [...prev, itemId]);

  //   alert("Item added Successfully! ");
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  function removeFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  const deleteFromCart = (id) => {
    setCartItems((cartItems) =>
      cartItems.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  };

  // const getTotalCost = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = products.find((product) => product.id === Number(item));
  //       totalAmount += itemInfo.price * cartItems[item];
  //     }

  //     return totalAmount;
  //   }
  // };

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      const productData = products.find(item.id);
      totalCost += productData.price * item.quantity;
    });
    return totalCost;
  }

  // cart counts
  const cartItemsCount = cartItems.reduce(
    (sum, product) => (sum = product.quantity),
    0
  );
  // const getTotalCartItems = () => {
  //   let totalItem = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       totalItem += cartItems[item];
  //     }
  //   }
  //   return totalItem;
  // };

  const contextValue = {
    products,
    items: cartItems,
    moveToCart,
    removeFromCart,
    deleteFromCart,
    getProductQuantity,
    cartItemsCount,
    getTotalCost,
  };
  // Wrap the context provider with ErrorBoundary component
  return (
    <ErrorBoundary>
      <ProductsContext.Provider value={contextValue}>
        {props.children}
      </ProductsContext.Provider>
    </ErrorBoundary>
  );
};

export default ProductsContextProvider;
