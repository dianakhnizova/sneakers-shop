import { ItemsData } from "../sources/interfaces";
import { api } from "./axios";

export const fetchItems = async (): Promise<ItemsData[]> => {
  const { data } = await api.get<ItemsData[]>("/items");
  return data;
};
