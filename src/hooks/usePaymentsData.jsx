"use client";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const usePaymentsData = () => {
  const { user } = useAuth();
  const basicRoute = useAxios();
  const { data: paymentDatas = [], refetch } = useQuery({
    queryKey: ["paymentDatas", user?.email],
    queryFn: async () => {
      const data = await basicRoute.get(`/payments/${user?.email}`);
      return data.data;
    },
  });
  return [paymentDatas, refetch];
};

export default usePaymentsData;
