import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import LoginSignup from "./pages/login_signup/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSessionInfo } from "./features/redux/userSlice";
import { setAccessTokenFromSessionStorage } from "./features/redux/userSlice";
import { setRefreshTokenFromSessionStorage } from "./features/redux/userSlice";
import { absolutePaths , relativePaths } from "./navigation";
const App = () => {
  const dispatch = useDispatch();
  dispatch(setAccessTokenFromSessionStorage());
  dispatch(setRefreshTokenFromSessionStorage());
  console.log(relativePaths);
  useEffect(() => {
    (async () => {
      try {
        // dispatch(getCurrentPathBack())
        dispatch(getSessionInfo());
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
          <Route
            index
            element={
            
              <LoginSignup />
              
            }
          />
          
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   {/* {user ? <Logout/> : <Login/>} */}
    //   {/* <SignupForm/> */}
    //   <Test/>
    // </div>
  );
};

export default App;
