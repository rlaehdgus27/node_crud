import React, { useCallback } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Form, Input } from "antd";

const Create = ({ history }) => {
  const titleInput = useInput("");
  const contentInput = useInput("");
  const authorInput = useInput("");

  const createHandler = useCallback(async () => {
    const result = await axios.post("http://localhost:4000/create", {
      title: titleInput.value,
      content: contentInput.value,
      author: authorInput.value,
    });

    if (result) {
      titleInput.setValue("");
      contentInput.setValue("");
      authorInput.setValue("");

      alert("게시글이 등록되었습니다.");
    }
  }, [titleInput, contentInput, authorInput]);

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <div class="container">
      <h2> 게시글 등록</h2>

      <Form onFinish={createHandler}>
        <div>
          제목:
          <Input placeholder="제목" allowClear {...titleInput} />
        </div>

        <br />
        <div>
          내용:
          <Input.TextArea placeholder="내용" allowClear {...contentInput} />
        </div>

        <div>
          작성자:
          <Input placeholder="작성자" allowClear {...authorInput} />
        </div>
        <button type="submit">등록</button>
      </Form>

      <button onClick={() => moveLinkHandler(`/notice`)}>목록</button>
    </div>
  );
};

export default Create;
