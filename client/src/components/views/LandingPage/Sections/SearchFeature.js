import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
  };

  return (
    <div>
      <Search
        placeholder="Search"
        onChange={searchHandler}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;
