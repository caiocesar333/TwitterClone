import styled from 'styled-components';


export const Container = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
    font-family: "sf-compact";
    padding: 9px 19px 20px;

    max-height: 100vh;

`;

export const Topside =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;


export const MenuButton = styled.div`
    display: flex;
    align-items: flex-start;
    flex-shrink:0 ;
    flex-direction: column;
    justify-content: space-between;
`;

export const MenuText = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: column;
`;