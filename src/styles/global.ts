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

  #dark .post{
    color: white;
  }

  #dark .wh-div{
    background: #1c2733;
    color: #EBEEF0;
  }

  #dark .feed{
    border-left: 1px solid #333d46 ;
    border-right: 1px solid #333d46;
  }

  #dark .header{
    border-bottom: 1px solid #333d46;
  }

  #dark .newtweet{
    border-top: 1px solid #333d46;
  }

  #dark .post{
    border-top: 1px solid #333d46;
    
  }

  #dark .card-container{
    border-top: 1px solid #333d46;
    border-bottom: 1px solid #333d46;
  }

  #dark .tweetBox__imageInput{
    background: #17202a;
  }

  #dark .new{
    border-top: 1px solid #333d46;
  }

  
`;