import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
   #light{
  background-color: white;
    }
  
  #dark{
   background-color: #17202a;
  }

  #dark .sidebar{
    color:  #EBEEF0
  }

  #dark .sidebarOption:hover{
    color: black;
  }


  #dark .home{
   color: #EBEEF0;
  }

  #dark .input{
    background-color: #17202a;
    color:  #EBEEF0;
  }

  #dark .input:focus{
    outline: none;
  }


  #dark .card {
    color:  #EBEEF0;
    background-color: #17202a;
  }

  #darkMode-div{
    color: #1DA1F2;
    position:sticky;
    right: 550px;
    top: 50px;
  }

  #darkMode-div:hover{
    cursor: pointer;
  }

  #dark .search-input{
    opacity: 1;
    background-color: #283340;
  }
`;