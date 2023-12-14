import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

export const usePrevious = (data: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = data;
  }, [data]);

  return ref.current;
};

export const useQuery = (search?: string) => {
  const location = useLocation();
  const locationSearch = search ?? location.search;

  return useMemo(() => {
    return qs.parse(locationSearch.replace(/^\?/, ""), {
      ignoreQueryPrefix: true,
    });
  }, [locationSearch]);
};
