import { createContext, useContext } from "react";

export const MyListContext = createContext();

export function useMyList() {
  return useContext(MyListContext);
}
