import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { NewsType } from "../../types";
import { BLUE, LINK, MORE } from "../../constant/constant";
import { routesFactory } from "../../constant/routePaths";
import { formatDate } from "../../utils";
import { DateFormats } from "../../utils/date";

export const columns: ColumnsType<NewsType> = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Описание",
    dataIndex: "description",
    key: "author",
  },
  {
    title: "Дата публикации",
    dataIndex: "publishedAt",
    key: "description",
    align: "center",
    render: (_, { publishedAt }) => formatDate(publishedAt, DateFormats.USER),
  },
  {
    title: "Ссылки на новости",
    dataIndex: "url",
    key: "description",
    align: "center",
    render: (_, curNews) => (
      <Tag color={BLUE}>
        <a href={curNews.url}>{LINK}</a>
      </Tag>
    ),
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    align: "center",
    render: (_, { title }) => (
      <Link to={routesFactory.getNews(title)}>{MORE}</Link>
    ),
  },
];
