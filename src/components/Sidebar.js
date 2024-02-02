import React, { useCallback, useEffect, useState } from "react";
import {
  IoBook,
  IoCalendarClearOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoutLogic from "../Logic/UserLogic.js/Logout.logic";
import client from "../appwrite.config";
import { Account } from "appwrite";
import { useNotifications } from "../context/notificationContext";
import Brand from "./Brand";
import { useUser } from "../context/userContext";

function Sidebar() {
  const { logout } = LogoutLogic();
  const { userInfo, setUserInfo } = useUser();
  const { toggleNotificationBar, unreadNotifications } = useNotifications();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const getUserInfo = useCallback(async () => {
    try {
      const account = new Account(client);
      const res = await account.get();
      
      localStorage.setItem("spotlight-user", JSON.stringify(res));
      setUserInfo(res);
    } catch (err) {
      console.error(err);
      localStorage.removeItem("spotlight-user");
      localStorage.removeItem("token");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getUserInfo();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getUserInfo]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
  };

  return (
    <div className={`flex flex-col p-4 border-r border-neutral-200 gap-2 ${isMobile ? 'w-48' : 'w-64'}`}>
      <div className="sidebar-link hover:bg-transparent hover:shadow-none w-max">
        <Brand />
      </div>
      <Link className="sidebar-link" to="">
        <IoHomeOutline /> Home
      </Link>
      <NavLink className="sidebar-link" to="events?filter=total">
        <IoCalendarClearOutline /> Events
      </NavLink>
      {/* Render other links conditionally based on screen size */}
      {!isMobile && (
        <>
          <button className="sidebar-link" onClick={toggleNotificationBar}>
            <div className="relative">
              <IoNotificationsOutline />
              {unreadNotifications > 0 && (
                <p className="absolute -top-3 p-2 aspect-square -right-2 bg-primary text-white rounded-full text-[10px] text-center w-2 h-2 flex items-center justify-center">
                  <span className="w-max h-max">
                    {unreadNotifications > 9 ? `9+` : unreadNotifications}
                  </span>
                </p>
              )}
            </div>
            Notifications
          </button>
          <NavLink className="sidebar-link" to="https://drive.google.com/file/d/1uilPY7nvRNY3LRvih_QByoMy0AEuBy2B/view" target="_blank">
            <IoBook /> Instructions
          </NavLink>
        </>
      )}
      <div className="mt-auto flex flex-col">
        <NavLink
          title={userInfo?.email}
          className="sidebar-link inline-flex items-center gap-1"
          to="account"
        >
          {userInfo ? (
            <>
              <IoPersonOutline /> {userInfo?.name}
            </>
          ) : (
            "Account"
          )}
        </NavLink>
        <button className="sidebar-link" onClick={logout}>
          <IoLogOutOutline /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
