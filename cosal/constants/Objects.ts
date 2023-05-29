import { ImageSourcePropType } from "react-native";
import { IMAGES } from "./Images";

export const BACKGROUNDS = [
  IMAGES.accessoryBg,
  IMAGES.phoneBg,
  IMAGES.carBg,
  IMAGES.homeBg,
];

export const CATEGORIES = [
  "All",
  "Electronics",
  "Computers",
  "Vehicles",
  "Property",
  "Electronics",
  "Computers",
  "Vehicles",
  "Property",
];

export interface ProductType {
  key: number;
  category: string;
  title: string;
  uri: ImageSourcePropType;

  price: string;
  item: number;
  rating: number;
}

export const PRODUCTS: ProductType[] = [
  {
    key: 1,
    category: "Fashion",
    uri: IMAGES.clotheSale,
    title: "Essentials for Women Summer outfit",
    price: "\u00A3" + 7,
    item: 100,
    rating: 4.9,
  },
  {
    key: 2,
    category: "Computers",
    uri: IMAGES.laptopSale,
    title: "2019 Macbook Pro, 16gb Ram, 1Tb",
    price: "\u00A3" + 1000,
    item: 100,
    rating: 4.9,
  },
  {
    key: 3,
    category: "Electronics",
    uri: IMAGES.houseSale,
    title: "Room lamp, with lamp cover and stand",
    price: "\u00A3" + 25,
    item: 100,
    rating: 4.9,
  },
  {
    key: 4,
    category: "Vehicles",
    uri: IMAGES.carSale,
    title: "Audi R6, V8, white four doors",
    price: "\u00A3" + 7000,
    item: 100,
    rating: 4.9,
  },
];
