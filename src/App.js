import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import FoodList from "./FoodList";

export function Layout() {
  return (
    <nav
      className="p-3 mb-3 text-left"
      style={{
        backgroundColor: "#FFA500",
        color: "#ffffff",
        fontfamily: "Sarabun, sans-serif",
      }}
    >
      <img
        src="f0101.jpg"
        class="circle-image"
        width="50"
        height="50"
        alt="Logo"
      />

      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลลอรี่
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <h4 style={{ textAlign: "center" }}>
        อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี
      </h4>
      <div>
        <FoodList />
      </div>
    </>
  );
}

function Menu() {
  const table = useRef();
  const tr = useRef([]);

  const data = [
    ["เมี่ยงคำกลีบบัวหลวงแบบโบราณ", 200],
    ["เแกงเห็ดเผาะไข่มดแดง", 199],
    ["แกงอ่อมหอยขม", 170],
  ];
  return (
    <>
      <Layout />
      <h4>เมนู</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนูอาหาร</th>
            <th>พลังงานที่ได้รับ</th>
            <th style={{ textAlign: "center" }}>เลือกเมนูนี้</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button>เลือกเมนูนี้</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h5 style={{ textAlign: "center" }}>พลังงานรวมที่ได้รับ {} kcal</h5>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
