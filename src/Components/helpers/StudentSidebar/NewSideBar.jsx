import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import allRoutes from "../../../data/routes";
import useWindowDimensions from "../Dimensioner/Dimensioner";

const NewSideBar = ({ children }) => {
  const { obtainedHeight, obtainedWidth } = useWindowDimensions();
  console.log(obtainedHeight);
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100%",
            flex: `calc(${obtainedWidth} - 90%)`,
            maxWidth: `calc(${obtainedWidth} - 90%)`,
          }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#9f1c33">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href={allRoutes.studentDashboard}
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                RAIT
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink
                  exact
                  to={allRoutes.studentDashboard}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to={allRoutes.studentAcademic}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="table">
                    Academic Details
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to={allRoutes.studentAllSemesterDetails}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="chart-line">
                    All Semester Details
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to={allRoutes.studentAchievements}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="trophy">
                    Achievements
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to={allRoutes.studentMessage}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="envelope">
                    Messages
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to={allRoutes.studentProfile}
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>

        <div
          style={{
            height: "100%",
            overflowY: "auto",
            flex: `calc(${obtainedWidth} - 10%)`,
            maxWidth: `calc(${obtainedWidth} - 10%)`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default NewSideBar;
