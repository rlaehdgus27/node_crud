import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Detail = ({ history, match }) => {
  const [detail, setDetail] = useState("");

  const noticeDetail = useCallback(async () => {
    const result = await axios.get(
      `http://localhost:4000/notice/${match.params.id}`
    );

    setDetail(result.data);
  }, [detail]);

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  useEffect(() => {
    noticeDetail();
  }, []);

  if (!detail) {
    return null;
  }
  return (
    <div class="container">
      <h2 class="title">{detail.title}</h2>

      <div class="infoBox">
        <span class="infoText">작성자</span>
        <span class="infoText">{detail.author}</span>
        <span class="infoText">작성일</span>
        <span class="infoText">{detail.createdAt}</span>
      </div>

      <hr />

      <div class="contentBox">
        <p>{detail.content}</p>
      </div>

      <div class="createBox">
        <button
          type="submit"
          class="btn btn-outline-success"
          onClick={() => moveLinkHandler(`/update/${detail._id}`)}
        >
          수정
        </button>

        <button
          type="submit"
          class="btn btn-outline-danger createBtn"
          onClick={() => moveLinkHandler(`/delete/${detail._id}`)}
        >
          삭제
        </button>

        <button
          class="btn btn-outline-secondary"
          onClick={() => moveLinkHandler(`/notice`)}
        >
          목록
        </button>
      </div>
    </div>
  );
};

export default Detail;
