import React, { useState } from "react";

const useInput = (initializeValue) => {
  const [value, setValue] = useState(initializeValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};

export default useInput;
