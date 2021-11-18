import React, { useCallback, useEffect } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Form, Input } from "antd";

const Update = ({ history, match }) => {
  const contentInput = useInput("");

  const updateHandler = useCallback(async () => {
    const result = await axios.patch(
      `http://localhost:4000/update/${match.params.id}`,
      { content: contentInput.value }
    );

    if (result.data) {
      alert("수정되었습니다.");

      history.goBack();
    }
  }, [contentInput]);

  const updateDetail = useCallback(async () => {
    const result = await axios.get(
      `http://localhost:4000/notice/${match.params.id}`
    );

    contentInput.setValue(result.data.content);
  }, [contentInput]);

  useEffect(() => {
    updateDetail();
  }, []);

  return (
    <div class="container">
      <h2>게시글 수정</h2>

      <Form onFinish={updateHandler}>
        내용
        <Input.TextArea id="content" {...contentInput} />
        <button type="submit">등록</button>
      </Form>
    </div>
  );
};

export default Update;
