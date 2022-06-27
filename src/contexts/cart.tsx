/* eslint-disable quotes */
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartListProps {
  children: ReactNode;
}

interface CartItemProps {
  plate: object;
  quantity: number;
  observation: string;
  price: number;
}

interface InitialCartList {
  cartItems: any[];
  setCartItems: (cartItems: any[]) => void;
  restaurantId: number;
  setRestaurantId: (restaurantId: number) => void;
  id: number;
  setId: (id: number) => void;
  cartQuantity: number;
  setCartQuantity: (cartQuantity: number) => void;
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
  restaurantVerification: boolean;
  restaurantVerify: () => void;
  handleAddCart: (item: handleAddCartProps) => void;
  handleRemoveCart: (item: handleAddCartProps) => void;
  handleDeleteCart: (item: handleAddCartProps) => void;
}

interface handleAddCartProps {
  restaurantId: number;
  id: number;
  price: number;
  findItem: CartItemProps;
  description: string;
}

export const cartContext = createContext({} as InitialCartList);
export function CartProvider({ children }: CartListProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [id, setId] = useState(0);
  const [restaurantId, setRestaurantId] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantVerification, setRestaurantVerification] = useState(false);

  function restaurantVerify() {
    if (cartItems.length === 0) {
      setRestaurantVerification(false);
      console.log(
        "restaurantVerification: ",
        restaurantVerification,
        "id: ",
        id
      );
    } else {
      setRestaurantVerification(true);
      console.log("restaurantVerification: ", restaurantVerification);
    }
  }

  function handleAddCart(item: handleAddCartProps) {
    restaurantVerify();
    if (restaurantVerification === false) {
      setRestaurantId(item.restaurantId);
      if (!item.findItem) {
        setCartItems([
          ...cartItems,
          {
            plate: { id: item.id, price: item.price },
            quantity: 1,
            price: item.price,
            observation: item.description,
          },
        ]);
      } else {
        item.findItem.quantity += 1;
        item.findItem.price = item.price * item.findItem.quantity;
      }
      setCartQuantity(cartQuantity + 1);
      setTotalPrice(totalPrice + item.price);
    } else if (item.restaurantId === restaurantId) {
      if (!item.findItem) {
        setCartItems([
          ...cartItems,
          {
            plate: { id: item.id, price: item.price },
            quantity: 1,
            price: item.price,
            observation: item.description,
          },
        ]);
      } else {
        item.findItem.quantity += 1;
        item.findItem.price = item.price * item.findItem.quantity;
      }
      setCartQuantity(cartQuantity + 1);
      setTotalPrice(totalPrice + item.price);
    } else {
      console.log("Não adicione pratos de restaurantes diferentes");
    }
  }

  function handleRemoveCart(item: handleAddCartProps) {
    if (item.findItem.quantity > 1) {
      item.findItem.quantity -= 1;
      setCartQuantity(cartQuantity - 1);
      setTotalPrice(totalPrice - item.price);
    }
    item.findItem.price = item.price * item.findItem.quantity;
  }

  function handleDeleteCart(item: handleAddCartProps) {
    setCartQuantity(cartQuantity - item.findItem.quantity);
    setTotalPrice(totalPrice - item.price * item.findItem.quantity);
    item.findItem.quantity = 0;
    item.findItem.price = item.price * item.findItem.quantity;
    cartItems.splice(cartItems.indexOf(item.findItem), 1);
  }

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <cartContext.Provider
      value={{
        id,
        setId,
        totalPrice,
        setTotalPrice,
        cartItems,
        setCartItems,
        cartQuantity,
        setCartQuantity,
        restaurantVerification,
        restaurantId,
        setRestaurantId,
        restaurantVerify,
        handleAddCart,
        handleDeleteCart,
        handleRemoveCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);
  return context;
}
