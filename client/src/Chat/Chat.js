
import React from "react";
import { ChatEngine } from "react-chat-engine";
import { PeopleSettings } from "react-chat-engine";
import "./Chat.css";
export const Chat = () => {
  const username = sessionStorage.getItem("msv");
  return (
    <div >
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Bảng điểm sinh viên</h1>
        </div>
        <div className="border_div">
          <div className="center_div">
            <label className="lbHKy">Học kỳ 232 </label>
            <br></br>
            <label className="lbDateUpdate">Ngày cập nhật điểm các môn học:20/03/2024 4:52:57 PM</label>
            <table className="tableBD">
              <tr>
                <th>MÃ MH</th>
                <th>TÊN MÔN HỌC</th>
                <th>NHÓM-TỔ</th>
                <th>SỐ TC</th>
                <th>ĐIỂM THÀNH PHẦN</th>
                <th>ĐIỂM THI</th>
                <th>ĐIỂM TỔNG KẾT</th>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Lập trình nâng cao</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Hệ điều hành</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Anh văn 3</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Khởi nghiệp</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Xác suất thống kê</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Kinh tế Chính trị Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
            <div className="sum_div">
              <label className="lbTKet">Số tín chỉ đăng ký học kỳ:</label><label className="lbTKet bold">17</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy học kỳ:</label><label className="lbTKet bold"></label><br/>
              <label className="lbTKet">Điểm trung bình học kỳ:</label><label className="lbTKet bold"></label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy:</label><label className="lbTKet bold"></label><br/>
              <label className="lbTKet">Điểm trung bình tích lũy:</label><label className="lbTKet bold"></label>
            </div>
          </div>
        </div>
      </div>

      <div className='Container'>
       
        <div className="border_div">
          <div className="center_div">
            <label className="lbHKy">Học kỳ 231</label>
            <br></br>
            <label className="lbDateUpdate">Ngày cập nhật điểm các môn học:20/03/2024 4:52:57 PM</label>
            <table className="tableBD">
              <tr>
                <th>MÃ MH</th>
                <th>TÊN MÔN HỌC</th>
                <th>NHÓM-TỔ</th>
                <th>SỐ TC</th>
                <th>ĐIỂM THÀNH PHẦN</th>
                <th>ĐIỂM THI</th>
                <th>ĐIỂM TỔNG KẾT</th>
              </tr>
              <tr>
                <td>CO2003</td>
                <td>Cấu trúc Dữ liệu và Giải Thuật</td>
                <td>L16-A</td>
                <td>4</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>CO2007	</td>
                <td>Kiến trúc Máy tính</td>
                <td>L16-A</td>
                <td>4</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>CO2011	</td>
                <td>Mô hình hóa Toán học</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>LA1005	</td>
                <td>Anh văn 2</td>
                <td>L16-A</td>
                <td>2</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SP1031</td>
                <td>Triết học Mác - Lênin</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
      
            </table>
            <div className="sum_div">
              <label className="lbTKet">Số tín chỉ đăng ký học kỳ:</label><label className="lbTKet bold">16</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy học kỳ:</label><label className="lbTKet bold">16</label><br/>
              <label className="lbTKet">Điểm trung bình học kỳ:</label><label className="lbTKet bold">4.0</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy:</label><label className="lbTKet bold">47</label><br/>
              <label className="lbTKet">Điểm trung bình tích lũy:</label><label className="lbTKet bold">4.0</label>
            </div>
          </div>
        </div>
      </div>

      <div className='Container'>
        <div className="border_div">
          <div className="center_div">
            <label className="lbHKy">Học kỳ 222</label>
            <br></br>
            <label className="lbDateUpdate">Ngày cập nhật điểm các môn học:20/03/2024 4:52:57 PM</label>
            <table className="tableBD">
              <tr>
                <th>MÃ MH</th>
                <th>TÊN MÔN HỌC</th>
                <th>NHÓM-TỔ</th>
                <th>SỐ TC</th>
                <th>ĐIỂM THÀNH PHẦN</th>
                <th>ĐIỂM THI</th>
                <th>ĐIỂM TỔNG KẾT</th>
              </tr>
              <tr>
                <td>CO1007</td>
                <td>Cấu trúc Rời rạc cho Khoa học Máy tính</td>
                <td>L16-A</td>
                <td>4</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>CO1027</td>
                <td>Kỹ thuật Lập trình</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>LA1003</td>
                <td>Anh văn 1</td>
                <td>L16-A</td>
                <td>2</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>MI1003</td>
                <td>Giáo dục Quốc phòng</td>
                <td>L16-A</td>
                <td>0</td>
                <td>DT</td>
                <td>DT</td>
                <td>DT</td>
              </tr>
              <tr>
                <td>MT1005</td>
                <td>Giải tích 2</td>
                <td>L16-A</td>
                <td>4</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>MT1007</td>
                <td>Đại số Tuyến tính</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>PE1035</td>
                <td>Bóng chuyền (Học phần 2)</td>
                <td>L16-A</td>
                <td>0</td>
                <td>BT:10 </td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>PH1007</td>
                <td>Thí nghiệm Vật lý</td>
                <td>L16-A</td>
                <td>1</td>
                <td>BT:10 </td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div className="sum_div">
              <label className="lbTKet">Số tín chỉ đăng ký học kỳ:</label><label className="lbTKet bold">17</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy học kỳ:</label><label className="lbTKet bold">17</label><br/>
              <label className="lbTKet">Điểm trung bình học kỳ:</label><label className="lbTKet bold">4.0</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy:</label><label className="lbTKet bold">31</label><br/>
              <label className="lbTKet">Điểm trung bình tích lũy:</label><label className="lbTKet bold">4.0</label>
            </div>
          </div>
        </div>
      </div>

      <div className='Container'>
        
        <div className="border_div">
          <div className="center_div">
            <label className="lbHKy">Học kỳ 221</label>
            <br></br>
            <label className="lbDateUpdate">Ngày cập nhật điểm các môn học:20/03/2023 4:52:57 PM</label>
            <table className="tableBD">
              <tr>
                <th>MÃ MH</th>
                <th>TÊN MÔN HỌC</th>
                <th>NHÓM-TỔ</th>
                <th>SỐ TC</th>
                <th>ĐIỂM THÀNH PHẦN</th>
                <th>ĐIỂM THI</th>
                <th>ĐIỂM TỔNG KẾT</th>
              </tr>
              <tr>
                <td>CO1005</td>
                <td>Nhập môn Điện toán</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>CO1023</td>
                <td>Hệ thống số</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>LA1001</td>
                <td>Anh văn Cơ bản</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>MT1003</td>
                <td>Giải tích 1</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>PH1003</td>
                <td>Vật lý 1</td>
                <td>L16-A</td>
                <td>3</td>
                <td>BT:10 BLT:10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              
            </table>
            <div className="sum_div">
              <label className="lbTKet">Số tín chỉ đăng ký học kỳ:</label><label className="lbTKet bold">14</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy học kỳ:</label><label className="lbTKet bold">14</label><br/>
              <label className="lbTKet">Điểm trung bình học kỳ:</label><label className="lbTKet bold">4.0</label><br/>
              <label className="lbTKet">Số tín chỉ tích lũy:</label><label className="lbTKet bold">14</label><br/>
              <label className="lbTKet">Điểm trung bình tích lũy:</label><label className="lbTKet bold">4.0</label>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
};
