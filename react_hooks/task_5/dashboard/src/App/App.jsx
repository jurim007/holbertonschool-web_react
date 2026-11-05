import { useState, useCallback, useMemo } from "react";

import CourseList from "../CourseList/CourseList";
import "../CourseList/CourseList.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import newContext from "../Context/context";
import "./App.css";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    html: {
      __html: "<strong>Urgent requirement</strong> - complete by EOD",
    },
  },
];

const coursesList = [
  { id: 1, name: "ES6", credit: "60" },
  { id: 2, name: "Webpack", credit: "20" },
  { id: 3, name: "React", credit: "40" },
];

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const [notifications, setNotifications] = useState(notificationsList);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);

    setNotifications((previousNotifications) =>
      previousNotifications.filter((notification) => notification.id !== id),
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      logOut,
    }),
    [user, logOut],
  );

  return (
    <newContext.Provider value={contextValue}>
      <div className="notifications-header">
        <Header />

        <div className="root-notifications">
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
      </div>

      {user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={coursesList} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={logIn} email={user.email} password={user.password} />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer />
    </newContext.Provider>
  );
}

export default App;
