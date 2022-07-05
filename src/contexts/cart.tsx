/* eslint-disable quotes */
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

interface CartListProps {
  children: ReactNode;
}

interface PlateProps {
  id: number;
  price: number;
}

interface CartItemProps {
  plate: PlateProps;
  quantity: number;
  observation: string;
  price: number;
  photo: string;
  name: string;
}
interface RestaurantProps {
  food_types: string;
  name: string;
  photo_url: string;
}
interface InitialCartList {
  cartItems: CartItemProps[];
  setCartItems: (cartItems: CartItemProps[]) => void;
  restaurantId: number;
  setRestaurantId: (restaurantId: number) => void;
  id: number;
  setId: (id: number) => void;
  cartQuantity: number;
  setCartQuantity: (cartQuantity: number) => void;
  restaurant: RestaurantProps;
  setRestaurant: (Restaurant: RestaurantProps) => void;
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
  costumerId: number;
  setCostumerId: (costumerId: number) => void;
  restaurantVerification: boolean;
  restaurantVerify: () => void;
  reloadHistoric: boolean;
  setReloadHistoric: (reloadHistoric: boolean) => void;
  handleAddCart: (item: handleAddCartProps) => void;
  handleRemoveCart: (item: handleAddCartProps) => void;
  handleDeleteCart: (item: handleAddCartProps) => void;
  handleAddNewCart: (item: handleAddCartProps) => void;
  handleDeleteAllCart: () => void;
}

interface handleAddCartProps {
  restaurantId: number;
  id: number;
  price: number;
  findItem: CartItemProps;
  description: string;
  plateName: string;
  name: string;
  food_types: string;
  photo_url: string;
  photo: string;
}

export const cartContext = createContext({} as InitialCartList);
export function CartProvider({ children }: CartListProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [id, setId] = useState(0);
  const [reloadHistoric, setReloadHistoric] = useState(false);
  const [restaurantId, setRestaurantId] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [restaurant, setRestaurant] = useState<RestaurantProps>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [costumerId, setCostumerId] = useState(0);
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

  function handleAddNewCart(item: handleAddCartProps) {
    restaurantVerify();
    if (restaurantVerification === false) {
      setRestaurantId(item.restaurantId);
      setRestaurant({
        food_types: item.food_types,
        name: item.name,
        photo_url: item.photo_url,
      });
      setCartItems([
        ...cartItems,
        {
          plate: { id: item.id, price: item.price },
          quantity: 1,
          price: item.price,
          observation: item.description,
          photo: item.photo,
          name: item.plateName,
        },
      ]);
      setCartQuantity(cartQuantity + 1);
      setTotalPrice(totalPrice + item.price);
    } else if (item.restaurantId === restaurantId) {
      setCartItems([
        ...cartItems,
        {
          plate: { id: item.id, price: item.price },
          quantity: 1,
          price: item.price,
          observation: item.description,
          photo: item.photo,
          name: item.plateName,
        },
      ]);
      setCartQuantity(cartQuantity + 1);
      setTotalPrice(totalPrice + item.price);
    } else {
      Alert.alert( "Opa!", "Você não pode adicionar itens de restaurantes diferentes");
      console.log("Não adicione pratos de restaurantes diferentes");
    }
  }

  function handleAddCart(item: handleAddCartProps) {
    if (item.findItem) {
      item.findItem.quantity += 1;
      item.findItem.price = item.price * item.findItem.quantity;
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

  function handleDeleteAllCart() {
    cartItems.splice(0);
    setCartQuantity(0);
    setTotalPrice(0);
    setRestaurantId(0);
    setRestaurantVerification(false);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <cartContext.Provider
      value={{
        id,
        setId,
        restaurant,
        setRestaurant,
        reloadHistoric,
        setReloadHistoric,
        totalPrice,
        setTotalPrice,
        cartItems,
        setCartItems,
        cartQuantity,
        setCartQuantity,
        restaurantVerification,
        restaurantId,
        setRestaurantId,
        costumerId,
        setCostumerId,
        restaurantVerify,
        handleAddCart,
        handleDeleteCart,
        handleRemoveCart,
        handleAddNewCart,
        handleDeleteAllCart,
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
