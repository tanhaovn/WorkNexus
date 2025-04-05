import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <div class="left">
        <li>
          <NavLink to="/">Việt làm</NavLink>
        </li>
        <li>
          <NavLink to="/createCV">Tạo CV</NavLink>
        </li>
        <li>
          <NavLink to="/company">Danh Sách Công Ty</NavLink>
        </li>
      </div>

      <div class="right">
        <li>
          <NavLink to="/register">Đăng Ký</NavLink>
        </li>
        <li>
          <NavLink to="/login">Đăng Nhập</NavLink>
        </li>
        <li>
          <NavLink to="/recruiter">DÀNH CHO NHÀ TUYỂN DỤNG</NavLink>
        </li>
      </div>
    </ul>
  );
};

export default Header;
