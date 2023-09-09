"use client";

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useEventsData = () => {
  const basicRoute = useAxios();
  const { data: eventsData = [] } = useQuery({
    queryKey: ["eventsData"],
    queryFn: async () => {
      const data = await basicRoute.get("/events");
      return data.data;
    },
  });

  return eventsData;
};

export default useEventsData;
