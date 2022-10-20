import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import axios from "axios";

const { TextArea } = Input;

const Cakes = [
  { key: 1, value: "ButterCake" },
  { key: 2, value: "RollCake" },
  { key: 3, value: "CheeseCake" },
  { key: 4, value: "SpongeCake" },
  { key: 5, value: "MooseCake" },
  { key: 6, value: "ChiffonCake" },
  { key: 7, value: "Another" },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Cake, setCake] = useState(1);
  const [Images, setImages] = useState([]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const cakeChangeHandler = (e) => {
    setCake(e.target.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!Title || !Description || !Price || !Cake || !Images) {
      return alert(" 모든 값을 넣어 주셔야 합니다.");
    }

    //서버에 채운 값들을 request로 보낸다.

    const body = {
      //로그인된 사람의 ID
      writer: props.user.userData._id,
      title: Title,
      description: Description,
      price: Price,
      images: Images,
      cake: Cake,
    };

    axios.post("/api/product", body).then((response) => {
      if (response.data.success) {
        alert("상품 업로드에 성공했습니다.");
        props.history.push("/");
      } else {
        alert("상품 업로드에 실패했습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div
        style={{ fontColor: "pink", textAlign: "center", marginBottom: "2rem" }}
      >
        <h2>C A K E U P L O A D P A G E 🍰</h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>이름</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <label>가격(won)</label>
        <Input type="number" onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <select onChange={cakeChangeHandler} value={3}>
          {Cakes.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button htmlType="submit">확인</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
