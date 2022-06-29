import React from "react";
import { useAppSelector } from "../../hooks";
import { Spin, Table } from "antd";
import { columns } from "./tableConfig";

export const News = () => {
  const { news, isLoading, error } = useAppSelector((state) => state);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Table rowKey="description" dataSource={news} columns={columns} />
    </>
  );
};
