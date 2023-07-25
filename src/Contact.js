import React from "react";
import { Layout } from "./App";

function Contact() {
  return (
    <>
      <Layout />
      <img
        src="maprofile01.jpg"
        width="350"
        height="400"
        alt="Profile Image"
        style={{ paddingBottom: 30 }}
      />
      <br></br>
      <h3>นายกวีวัฒน์ ทาก้อน</h3>
      <div>
        มหาลัยวิทยาลัยอุบลราชธานี
        <br />
        สาขาเทคโนโลยีสารสนเทศและการสื่อสาร
        <br />
        fc : ชาย'ไร้ตัวตน 'นั่งตกปลา' อญู่ลิมทะหริ่ง
        <br />
      </div>
    </>
  );
}

export default Contact;
