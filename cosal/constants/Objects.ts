import { ImageSourcePropType } from "react-native";
import { IMAGES } from "./Images";
import { SellerCategoryType } from "../shared/types/slices";

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

export interface LabelType {
  label: string;
  value: string;
}

export const LABELS: LabelType[] = [
  { label: "Brand", value: "Apple" },
  { label: "Display", value: "Display: Retina Display 16:9" },
  { label: "Storage", value: "1TB" },
  { label: "Memory", value: "16GB Ram" },
  { label: "Model", value: "2019 Macbook Pro" },
  { label: "OS", value: "Big Sur" },
];

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

export const CATEGORYLIST: SellerCategoryType[] = [
  {
    category: "Electronics",
    ticked: false,
    extraInfo: [],
  },
  {
    category: "Computers",
    ticked: false,
    extraInfo: ["Brand", "Display", "Storage", "Memory", "Model", "OS"],
  },
  {
    category: "Vehicles",
    ticked: false,
    extraInfo: [],
  },
  {
    category: "Properties",
    ticked: false,
    extraInfo: [],
  },
  {
    category: "Fashion",
    ticked: false,
    extraInfo: [],
  },
  {
    category: "Health & Beauty",
    ticked: false,
    extraInfo: [],
  },
  {
    category: "Agriculture & Food",
    ticked: false,
    extraInfo: [],
  },
];
