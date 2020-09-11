import { useMemo, useState } from "react";

const STORAGE_KEY = "favourites";

interface FavouriteItem {
  name: string;
  id: string;
}

const useFavourites = () => {
  const [favourites, setFavourites] = useState<FavouriteItem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'));
  const favouriteIds = favourites.map(favourite => favourite.id);

  return useMemo(() => ({
    getItems: () => favourites,
    getIds: () => favouriteIds,
    addItem: (id: string, name: string) => {
      if (!favouriteIds.includes(id)) {
        const newFavourites = [...favourites, { id, name }];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
        setFavourites(newFavourites);
      }
    },
    removeItem: (id: string) => {
      const itemIndex = favourites.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        const newFavourites = [...favourites.slice(0, itemIndex), ...favourites.slice(itemIndex + 1)];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
        setFavourites(newFavourites);
      }
    }
  }), [favouriteIds, favourites]);
};

export default useFavourites;
