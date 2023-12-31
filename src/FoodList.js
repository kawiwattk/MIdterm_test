import React from "react";
import { Button } from "react-bootstrap";

const FoodList = () => {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <div1>
        <img src="f0101.jpg" alt="อาหารที่ 1" class="circle-image1" />
        <h3>เมี่ยงคำกลีบบัวหลวงแบบโบราณ</h3>
        <p>
          เมี่ยงคำกลีบบัวหลวง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          มีความโดดเด่นและมีเอกลักษณ์ที่มีความประณีตสวยงาม
          เป็นต้นตำรับเมนูสมุนไพรของคนไทยโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม
          เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ มีคุณค่าทางสมุนไพรสูง
          เพราะมีคุณสมบัติในการบำรุงรักษาธาตุทั้ง 4 เพื่อให้สมดุลกัน
        </p>
        <Button>เรียนรู้เพิ่มเติม</Button>
      </div1>
      <div1>
        <img src="f0501.jpg" alt="อาหารที่ 2" class="circle-image2" />
        <h3>แกงเห็ดเผาะไข่มดแดง</h3>
        <p>
          แกงเห็ดเผาะไข่มดแดง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          ที่ได้สืบทอดกันมารุ่นต่อรุ่น
          โดยการนำเอาทรัพยากรชีวภาพที่มีอยู่ในท้องถิ่นมาปรุงเป็นอาหารพื้นเมือง
          ที่มีรสชาติกลมกล่อม เป็นอาหารที่ให้คุณค่าทางโภชนาการ
          เห็ดเผาะมีโปรตีนและแร่ธาตุต่างๆและสรรพคุณทางยาให้ประโยชน์ช่วยบำรุงร่างกาย
        </p>
        <Button>เรียนรู้เพิ่มเติม</Button>
      </div1>
      <div1>
        <img src="f0901.jpg" alt="อาหารที่ 3" class="circle-image3" />
        <h3>แกงอ่อมหอยขม</h3>
        <p>
          แกงอ่อมหอยขม เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
          ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
          ที่ได้สืบทอดกันมารุ่นต่อรุ่น
          เป็นแกงอ่อมอาหารพื้นเมืองที่อุดมไปด้วยคุณค่าทางโภชนาการเพราะส่วนประกอบหลักส่วนใหญ่
          เป็นผักและสมุนไพรพื้นบ้านนานาชนิดเป็นความผสมผสานที่ลงตัวระหว่างชนิดของอาหาร
          และเครื่องปรุง
        </p>
        <Button>เรียนรู้เพิ่มเติม</Button>
      </div1>
    </div>
  );
};

export default FoodList;
