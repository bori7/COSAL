import {
  Link,
  useNavigation,
  useRouter,
  useSearchParams,
  useLocalSearchParams,
} from "expo-router";

export default function expoRouterFactory<T>() {
  return {
    Link: Link as <K extends keyof T>(
      props: Parameters<typeof Link> & {
        href: string | { pathname?: K; params: T[K] };
      }
    ) => ReturnType<typeof Link>,

    useNavigation: useNavigation as <K extends keyof T>() => T[K],

    useRouter: useRouter as () => {
      push: (href: keyof T) => void;
      replace: (href: keyof T) => void;
      back: () => void;
      setParams: (params?: Record<string, string>) => void;
    },

    useSearchParams: useSearchParams as <K extends keyof T>() => T[K],

    useLocalSearchParams: useSearchParams as <K extends keyof T>() => T[K],
  };
}
