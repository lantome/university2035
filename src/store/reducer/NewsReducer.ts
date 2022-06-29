import { NewsState, NewsType } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNewsList } from "../actionCreators";
import { getCurrentNews } from "../actionCreators/actionCreators";

const initialState: NewsState = {
  news: [],
  currentNews: {
    title: "",
    author: "",
    description: "",
    url: "",
    publishedAt: "",
    content: "",
  },
  isLoading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    deleteCurrentNews: (state, action: PayloadAction<string>) => {
      state.news = state.news.filter((news) => news.title !== action.payload);
    },
  },
  extraReducers: {
    [fetchNewsList.fulfilled.type]: (
      state,
      action: PayloadAction<NewsType[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.news = action.payload;
    },
    [fetchNewsList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchNewsList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getCurrentNews.fulfilled.type]: (
      state,
      action: PayloadAction<NewsType>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.currentNews = action.payload;
    },
    [getCurrentNews.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCurrentNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
