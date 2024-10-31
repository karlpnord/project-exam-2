import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse } from "../types/venueTypes";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const usePosts = () => {
  return useQuery<ApiResponse>({
    queryKey: ['all-venues'],
    queryFn: async () => {
      const { data } = await axios.get(`${apiBaseUrl}/venues?_owner=true`);
      return data;
    },
  });
};