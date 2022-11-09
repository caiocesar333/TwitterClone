import styled from "styled-components"


export const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    width: min(299px, 100%);
`;

export const SearchWrapper = styled.div`
    padding: 10px 24px;
    width: 500px;

    /* position: fixed; */
    top: 0;
    z-index: 2;

    max-height: 57px;
`;

