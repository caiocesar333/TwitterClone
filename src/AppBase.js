import React, { useState, createContext } from "react";
import GlobalStyle from './styles/global';
import { Container, Wrapper } from "./Components/Layout/style"
import Sidebar from "./Components/SideBar/Sidebar"
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widget/Widgets";
import Footer from "./Components/Footer/Footer";
import './styles/global.css';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PopUpLogin from "../src/Components/Modal/PopUpLogin"

// import { Container } from "postcss";


export const ThemeContext = createContext(null);

function AppBase() {

  window.addEventListener("load", () => {
    let popUp = document.querySelector("#popUp")
    let overlay = document.querySelector("#overlay")
    if (!(localStorage.getItem("admin") === "admin") ) {
      popUp.classList.add("show")
      overlay.classList.add("show")
    } else {
      popUp.classList.remove("show")
      overlay.classList.remove("show")
    }
  })

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle />
      <div className="app">
        <PopUpLogin/>
        <Container id={theme}>
          <Wrapper>
            <Sidebar />
            <Feed />
            <div id="darkMode-div">
              <AutoAwesomeOutlinedIcon className="right" id="darkMode" onClick={toggleTheme} />
            </div>
            <Widgets />
          </Wrapper>
          <Footer />
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppBase;
