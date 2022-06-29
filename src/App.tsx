import React, { useEffect } from "react";
import { News } from "./components/News";
import { Col, Divider, PageHeader, Row } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsItem } from "./components/News/NewsItem";
import { fetchNewsList } from "./store/actionCreators";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsList());
  }, []);

  return (
    <>
      <BrowserRouter>
        <PageHeader title={"News"} />
        <Divider />
        <Row>
          <Col xs={24} md={{ span: 20, offset: 2 }}>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/news/:id" element={<NewsItem />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
