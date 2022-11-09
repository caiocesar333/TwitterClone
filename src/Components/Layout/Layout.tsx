import React from "react";
// import Footer from "../Footer/Footer";

import Feed from "../Feed/Feed"
import Sidebar from "../SideBar/Sidebar"
import Widget from "../Widget/Widgets"

import { Container, Wrapper }from "./style"

export interface LayoutProps{
    children: any;
}


export function Layout({ children}: LayoutProps){
    return (
        <Container>
            
        </Container>
    )
}

export default Layout