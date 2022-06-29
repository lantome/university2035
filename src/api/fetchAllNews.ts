import axios from "axios";
import { ResponseType } from "../types";

export function fetchAllNews() {
  const url = `https://newsapi.org/v2/everything`;
  const params = {
    q: "tesla",
    from: "2022-05-29",
    sortBy: "publishedAt",
    apiKey: "19ae74bdc6584d49a7a40ade2cd355fb",
  };
  return axios.get<ResponseType>(url, { params });
}
