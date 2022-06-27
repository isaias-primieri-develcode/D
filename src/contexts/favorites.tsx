/* eslint-disable quotes */
import React, { createContext, ReactNode, useContext, useState } from "react";

interface FavoritesListProps {
  children: ReactNode;
}
interface FavoritesList {
  
}
export const favoritesContext = createContext({} as FavoritesList);
export function FavoritesProvider({ children }: FavoritesListProps) {
const [restaurantFavorites, setRestaurantFavorites] = useState<FavoritesList[]>([]);


  return (
    <favoritesContext.Provider value={{  }}>
      {children}
    </favoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(favoritesContext);
  return context;
}
