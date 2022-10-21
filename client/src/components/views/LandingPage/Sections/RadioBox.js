import React, { useState } from "react";
import { Collapse, Radio, Slider } from "antd";

const { Panel } = Collapse;

function RadioBox(props) {
  const [Value, setValue] = useState(0);

  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => (
      <Radio key={value._id} value={value._id}>
        {value.name}
      </Radio>
    ));

  const handleChange = (e) => {
    setValue(e.target.value);
    props.handleFilters(e.target.value);
  };

  return (
    <div>
      <Collapse
        defaultActiveKey={["0"]}
        style={{
          border: "2px solid #f74c25",
          backgroundColor: "#f7f6f2",
          color: "#f74c25",
          fontSize: "20px",
        }}
      >
        <Panel header="PRICE" key="1">
          <Radio.Group onChange={handleChange} value={Value}>
            {/* Value==this.state.value */}
            {renderRadioBox()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
