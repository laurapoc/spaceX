import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import { RocketDto } from "./types/rocketDto";

const useRocketSearch = (query: string | undefined) => {
  const [rockets, setRockets] = useState<RocketDto[]>([]);

  useEffect(() => {
    let cancel: Canceler;
    let config: AxiosRequestConfig<RocketDto[]> = {
      method: "GET",
      url: "",
    //   params: { q: query },
      cancelToken: new axios.CancelToken((token) => (cancel = token)),
      transformResponse: (response: RocketDto[]) => response,
    };
    axios.get<RocketDto[]>("https://api.spacexdata.com/v3/rockets", config)
      .then((response: AxiosResponse<RocketDto[], AxiosRequestConfig<RocketDto[]>>) => {
        const { data } = response;
        setRockets(response.data)
        console.log(response);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        return err;
      });
    return () => cancel();
  }, [query, rockets]);
  return null;
};

export default useRocketSearch;
