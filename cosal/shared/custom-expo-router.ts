import expoRouterFactory from "./expoRouterFactory";

type RootStackParamList = {
  homepage: undefined;
  productpage: {
    productId: string | number | any;
  };
  index: undefined;
};

const { Link, useSearchParams, useRouter, useLocalSearchParams } =
  expoRouterFactory<RootStackParamList>();

export { Link, useSearchParams, useRouter, useLocalSearchParams };
