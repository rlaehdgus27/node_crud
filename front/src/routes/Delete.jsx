import React from "react";
import axios from "axios";

const Delete = ({ history, match }) => {
  const deleteHandler = async () => {
    const result = await axios.get(
      `http://localhost:4000/delete/${match.params.id}`
    );

    if (result.data) {
      alert("식제되었습니다.");

      history.push(`/notice`);
    }
  };

  const moveLinkHandler = () => {
    history.goBack();
  };

  return (
    <div class="container">
      <h2>게시글 삭제</h2>

      <button
        type="submit"
        class="btn btn-outline-danger"
        onClick={deleteHandler}
      >
        삭제
      </button>
      <button
        type="submit"
        class="btn btn-outline-secondary"
        onClick={() => moveLinkHandler()}
      >
        아니요.
      </button>
    </div>
  );
};

export default Delete;
