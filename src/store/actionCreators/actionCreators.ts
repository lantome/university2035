import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllNews, fetchCurrentNews } from "../../api";

export const fetchNewsList = createAsyncThunk(
  "news/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllNews();
      return response.data.articles;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getCurrentNews = createAsyncThunk(
  "news/getCurrentNews",
  async (title: string, { rejectWithValue }) => {
    try {
      const response = await fetchCurrentNews(title);
      return response.data.articles.find((news) => news.title === title);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
