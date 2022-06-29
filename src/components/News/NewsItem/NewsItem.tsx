import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Descriptions, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getCurrentNews } from "../../../store/actionCreators/actionCreators";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import { Flex } from "../../../ui";
import { BACK, DELETE_NEWS } from "../../../constant/constant";
import { formatDate } from "../../../utils";
import { DateFormats } from "../../../utils/date";
import { newsSlice } from "../../../store/reducer/NewsReducer";

export const NewsItem = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    currentNews: { title, content, publishedAt },
    isLoading,
  } = useAppSelector((news) => news);
  const date = formatDate(publishedAt, DateFormats.USER);
  const goBack = () => navigate(-1);
  const { deleteCurrentNews } = newsSlice.actions;

  const deleteCurrent = () => {
    if (id) {
      dispatch(deleteCurrentNews(id));
      goBack();
    }
    return;
  };

  useEffect(() => {
    if (id) {
      dispatch(getCurrentNews(id));
    }
  }, [id]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <Descriptions title={title}>
        <Descriptions.Item label="Дата">{date}</Descriptions.Item>
        <Descriptions.Item label="Описание">{content}</Descriptions.Item>
      </Descriptions>
      <Flex>
        <Button icon={<LeftOutlined />} onClick={goBack}>
          {BACK}
        </Button>
        <Button type="primary" onClick={deleteCurrent}>
          {DELETE_NEWS}
        </Button>
      </Flex>
    </>
  );
};
