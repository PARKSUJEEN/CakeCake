import React from "react";
import "./HistoryPage.css";

function HistoryPage(props) {
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>구매내역</h1>
      </div>
      <br />

      <table>
        <thead>
          <tr style={{ border: "1px solid red" }}>
            <th>구매자 정보</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매날짜</th>
          </tr>
        </thead>
        <tbody>
          {props.user.userData &&
            props.user.userData.history.map((item) => (
              <tr key={item.dateOfPurchase}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{new Date(item.dateOfPurchase).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
