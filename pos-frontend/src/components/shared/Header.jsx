import React from 'react'
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { IoLogOut } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="flex justify-between items-center py-4 bg-[#1a1a1a]">
    {/* LOGO */}
    <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
    </div>

    {/* SEARCH */}
    <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 py-2 rounded-[15px] w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
        type="text"
        placeholder="Search"
        className="bg-[#1f1f1f] outline-none text-[#f5f5f5] px-2 py-1 rounded-md"
        />
    </div>

    {/* LOGGED USER DETAILS */}
    <div onClick={() => navigate("/dashboard")} className="flex items-center gap-4 cursor-pointer">
      {userData.role === "Admin" && (
        <div onClick={() => navigate("/dashboard")} className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <MdDashboard className="text-[#f5f5f5] text-2xl" />
        </div>
      )}
      
      <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
        <FaBell className="text-[#f5f5f5] text-2xl" />
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <FaUserCircle className="text-[#f5f5f5] text-4xl" />
        <div className="flex flex-col items-start">
          <h1 className="text-md text-[#f5f5f5] font-semibold">{userData.name || "TEST USER"}</h1>
          <p className="text-xs text-[#ababab] font-medium">{userData.role || "ROLE"}</p>
        </div>
        <IoLogOut
          onClick={handleLogout}
          className="text-[#f5f5f5] ml-2"
          size={40}
        />
      </div>
    </div>

    
    </header>
  )
}

export default Header