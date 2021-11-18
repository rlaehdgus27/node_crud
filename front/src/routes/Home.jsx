import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Home = ({ history }) => {
  const [notice, setNotice] = useState([]);

  const list = useCallback(async () => {
    const result = await axios.get("http://localhost:4000/notice");

    setNotice(result.data);
  }, [notice]);

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  useEffect(() => {
    list();
  }, []);

  return (
    <div class="container">
      <h2>게시판</h2>

      <div class="col">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th className="title" scope="col">
                제목
              </th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            {notice.map((data, idx) => {
              return (
                <tr key={data._id}>
                  <td>{idx + 1}</td>
                  <td onClick={() => moveLinkHandler(`/notice/${data._id}`)}>
                    {data.title}
                  </td>
                  <td>{data.author}</td>
                  <td>{data.hit}</td>
                  <td>{data.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div class="createBox">
        <button
          class="btn btn-outline-primary"
          onClick={() => moveLinkHandler(`/create`)}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Home;
