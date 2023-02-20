import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import allRoutes from "./data/routes";

//Protected Routes
import ProtectedRoute from "./Components/helpers/ProtectedRoute/ProtectedRoute";

//animation library
import Aos from "aos";
import "aos/dist/aos.css";

//Loader import
import Loader from "./Components/helpers/Loader/Loader";

//Main Components Imports
const Home = lazy(() => import("./Components/LandingPages/Home/Home"));
const About = lazy(() => import("./Components/LandingPages/About/About"));
const Contact = lazy(() => import("./Components/LandingPages/Contact/Contact"));
const Login = lazy(() => import("./Components/LandingPages/Login/Login"));
const Register = lazy(() =>
  import("./Components/LandingPages/Register/Register")
);
const Thankyou = lazy(() => import("./Components/helpers/Greeting/Thankyou"));

//class-cc module imports
// import ClassCCLogin from "./Components/ClassCC/Login";
const ClassCCLogin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/ClassCC/Signup")), 500);
  });
});
const ClassCCRegister = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/ClassCC/Signup")), 500);
  });
});
const ClassCCDashboard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/ClassCC/Dashboard")), 500);
  });
});

//mentor module imports
const MentorLogin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Mentor/Login")), 500);
  });
});
const MentorRegister = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Mentor/Signup")), 500);
  });
});
const MentorDashboard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Components/Mentor/Layout/Dashboard")),
      500
    );
  });
});
const MentorStudent = lazy(() => import("./Components/Mentor/Layout/Student"));
const MentorMessage = lazy(() => import("./Components/Mentor/Layout/Messsage"));
const MentorProfile = lazy(() => import("./Components/Mentor/Layout/Profile"));
const MentorCounselling = lazy(() =>
  import("./Components/Mentor/Layout/Counselling")
);

//Student module imports
const StudentLogin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Students/Login")), 500);
  });
});
const StudentRegister = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Students/Signup")), 500);
  });
});
const StudentDashboard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Components/Students/Layout/DashBoard")),
      500
    );
  });
});

const StudentAcademic = lazy(() =>
  import("./Components/Students/Layout/Academic")
);
const StudentAchievement = lazy(() =>
  import("./Components/Students/Layout/Achievement")
);
const StudentProfile = lazy(() =>
  import("./Components/Students/Layout/Profile")
);
const StudentSemester = lazy(() =>
  import("./Components/Students/Layout/Semester")
);
const StudentMessage = lazy(() =>
  import("./Components/Students/Layout/Message")
);
const StudentForgotPassword = lazy(() =>
  import("./Components/Students/ForgotPassword")
);
const StudentResetPassword = lazy(() =>
  import("./Components/Students/ResetPassword")
);

function App() {
  useEffect(function () {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Landing Main Pages */}
        <Route path={allRoutes.homepage} element={<Home />} />
        <Route path={allRoutes.aboutPage} element={<About />} />
        <Route path={allRoutes.contactPage} element={<Contact />} />
        <Route path={allRoutes.allLoginPage} element={<Login />} />
        <Route path={allRoutes.allRegisterPage} element={<Register />} />
        <Route path={allRoutes.commonThankyou} element={<Thankyou />} />

        {/* unprotected routes here */}
        {/* mentor unprotected pages */}
        <Route path={allRoutes.mentorLogin} element={<MentorLogin />} />
        <Route path={allRoutes.mentorRegister} element={<MentorRegister />} />

        {/* student unprotected pages */}
        <Route path={allRoutes.studentLogin} element={<StudentLogin />} />
        <Route path={allRoutes.studentRegister} element={<StudentRegister />} />
        <Route
          path={allRoutes.studentForgotPassword}
          element={<StudentForgotPassword />}
        />
        <Route
          path={allRoutes.studentResetPassword}
          element={<StudentResetPassword />}
        />

        {/* Protected Routes only */}
        <Route element={<ProtectedRoute />}>
          {/* Class-CC protected Pages */}
          <Route path={allRoutes.ccLogin} element={<ClassCCLogin />} />
          <Route path={allRoutes.ccRegister} element={<ClassCCRegister />} />
          <Route path={allRoutes.ccRegister} element={<ClassCCDashboard />} />

          {/* Mentor protected Pages */}

          <Route
            path={allRoutes.mentorDashboard}
            element={<MentorDashboard />}
          />
          <Route
            path={allRoutes.mentorCounselling}
            element={<MentorCounselling />}
          />
          <Route path={allRoutes.mentorProfile} element={<MentorProfile />} />
          <Route path={allRoutes.mentorMessage} element={<MentorMessage />} />
          <Route
            path={allRoutes.mentorStudentSection}
            element={<MentorStudent />}
          />

          {/* Student protected Pages */}
          <Route
            path={allRoutes.studentDashboard}
            element={<StudentDashboard />}
          />
          <Route
            path={allRoutes.studentDashboard}
            element={<StudentDashboard />}
          />
          <Route
            path={allRoutes.studentAcademic}
            element={<StudentAcademic />}
          />
          <Route
            path={allRoutes.studentAllSemesterDetails}
            element={<StudentSemester />}
          />
          <Route
            path={allRoutes.studentAchievements}
            element={<StudentAchievement />}
          />
          <Route path={allRoutes.studentProfile} element={<StudentProfile />} />
          <Route path={allRoutes.studentMessage} element={<StudentMessage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
