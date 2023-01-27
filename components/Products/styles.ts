import styled from 'styled-components'

export const Container = styled.main`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 20px 0px 20px 0px;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
