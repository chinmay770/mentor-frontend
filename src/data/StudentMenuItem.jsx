import allRoutes from "./routes";
import ProfileLogo from "../images/Student/Profile.svg";
import AcademicLogo from "../images/Student/Academic.svg";
import AchievementLogo from "../images/Student/Achievement.svg";
import MessageLogo from "../images/Student/Message.svg";
import SemesterLogo from "../images/Student/Semester.svg";
import DashboardLogo from "../images/Student/Dashboard.svg";

const StudentMenuItem = [
  {
    path: allRoutes.studentDashboard,
    name: "Dashboard",
    icon: DashboardLogo,
  },
  {
    path: allRoutes.studentAcademic,
    name: "Academic",
    icon: AcademicLogo,
  },
  {
    path: allRoutes.studentAllSemesterDetails,
    name: "All Semester Details",
    icon: SemesterLogo,
  },
  {
    path: allRoutes.studentAchievements,
    name: "Achievements",
    icon: AchievementLogo,
  },
  {
    path: allRoutes.studentMessage,
    name: "Messages",
    icon: MessageLogo,
  },
  {
    path: allRoutes.studentProfile,
    name: "Profile",
    icon: ProfileLogo,
  },
];

export default StudentMenuItem;
