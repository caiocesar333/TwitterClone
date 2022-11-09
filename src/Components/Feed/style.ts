import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media screen and (min-width: 500px) {
        border-left: 1px solid #EBEEF0 ;
        border-right: 1px solid #EBEEF0;
    }
`;


export const Header = styled.div`

    align-items: center;

    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid #EBEEF0;
    
    display: flex;
    justify-content: space-between;

    color:#00B6F1;
`;

export const NewTweet = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    /* border-bottom: 1px solid #EBEEF0; */
    border-top: 1px solid #EBEEF0;
`;

