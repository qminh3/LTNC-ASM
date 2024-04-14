/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "./logo1.png";
import home from "./home.png";
import "../NavBar.css";
import AppBackground from "./background_home.jpg";

const Body = styled.div`
  background-image: url("../backgroud.png");
  width:100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;
const App_background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
`;
const App_background_blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -9;
`;
const Title = styled.p`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 7rem;
  letter-spacing: 20px;
  color: white;
  margin-top: 20%;
  padding: 20px 0px 20px 0px;
`;
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Body>
        <App_background_blur />
        <App_background src={AppBackground}/>
        <Title>TRƯỜNG ĐẠI HỌC BÁCH KHOA</Title>
      </Body>

      // <div id='main'>
      //   <div className='homepage'>
      //     <p className='elements' id='title'>
      //       Classe<span id='student'>369</span>
      //     </p>
      //     <hr className='elements' id='homehr' />
      //     <div className='introduction'>
      //       <h1 className='manage'>
      //         Mọi thứ
      //         <div id='_manage'>cần thiết cho việc</div> quản lí sinh viên
      //       </h1>
      //       <div className='manage_1'>
              
      //       </div>
      //       <p id='_intro1'>
      //         Classe369 là 1 phần mềm tiện ích giúp quản lý sinh viên một cách
      //         ngắn gọn và đầy đủ nhất thông qua những thống kê xác thực nhất và
      //         nhanh nhất
      //       </p>
      //       <img className='homewallpaper' src={home} />
      //       <div className='footer1'>
      //         <br />
      //         <p id='_footer2'>
      //           Hàng ngàn tổ chức giáo dục ngày nay sử dụng hệ thống quản lý
      //           trường học phân mảnh và nền tảng phần mềm để quản lý các hoạt
      //           động hành chính và học tập của họ. Classe369 cung cấp một giải
      //           pháp hợp nhất tất cả trong một nền tảng đơn giản và đẹp mắt.
      //         </p>
      //       </div>

      //       {/* FOOTER CHUC NANG */}

      //       <div className='footer2'>
      //         <hr className='elements' id='homehr' />
      //         <h1 id='_footer1'>Các tính năng của Classe369</h1>

      //         <div className='footer_icons'>
      //           <span className='fa fa-graduation-cap'></span>
      //         </div>
      //         <div className='footer_icons'>
      //           <span className='fa fa-chart-bar'></span>
      //         </div>
      //         <div className='footer_icons'>
      //           <BsClipboardData />
      //         </div>
      //         <div className='footer_icons'>
      //           <IoMdNotificationsOutline />
      //         </div>
      //         <br />

      //         <div className='footer_fn' id='footer_fn1'>
      //           Bảng điểm
      //         </div>
      //         <div className='footer_fn' id='footer_fn2'>
      //           Biểu đồ điểm
      //         </div>
      //         <div className='footer_fn' id='footer_fn3'>
      //           Danh sách sinh viên
      //         </div>
      //         <div className='footer_fn' id='footer_fn4'>
      //           Thông báo
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
