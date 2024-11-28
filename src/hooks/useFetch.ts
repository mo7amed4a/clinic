import { useQuery, QueryKey } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { notify } from "../utils/toast";
import { useIsRTL } from "./useIsRTL";

type UseFetchProps<T> = {
  queryKey: QueryKey;
  endpoint: string;
  enabled?: boolean;
  onError?: (err: string | undefined) => void;
  onSuccess?: (data: T) => void;
  localization?: boolean;
};

function useFetch<T>({
  endpoint,
  enabled = true,
  queryKey,
  onError,
  onSuccess,
}: UseFetchProps<T>) {
  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const router = useRouter();

  const isRTL = useIsRTL();

  const config: {
    headers: { Authorization: string; "Accept-Language": string };
  } = {
    headers: {
      Authorization: authorizationHeader,
      "Accept-Language": isRTL ? "ar" : "en",
    },
  };

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const query = useQuery<T>({
    queryKey,
    queryFn: () =>
      axios.get(`${baseURL}/${endpoint}`, config).then((res) => res.data),
    enabled,
    onError: (error: { response?: { data?: { message?: string } } }) => {
      notify("error", error?.response?.data?.message);
      if (error?.response?.data?.message === "Unauthenticated.") {
        localStorage.removeItem("user");
        router.push("/login");
        Cookies.remove("token");
      }
      if (onError) {
        onError(error?.response?.data?.message);
      }
    },
    onSuccess,
  });

  return query;
}

export default useFetch;
