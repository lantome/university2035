import { setupStore } from "../store/store";
import { newsReducer } from "../store/reducer";

export type State = ReturnType<typeof newsReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export type NewsState = {
  news: NewsType[];
  currentNews: NewsType;
  isLoading: boolean;
  error: string;
};

export type ResponseType = {
  articles: NewsType[];
  status: string;
  totalResults: number;
};

export type NewsType = {
  title: string;
  author: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
};
