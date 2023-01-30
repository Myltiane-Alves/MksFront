import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 101px;
  background-color: #0F52BA;

`;

export const Content = styled.div`
  max-width: 1230px;
  padding: 0 2rem;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  background-color: #0F52BA;
  .containerLogo {
    padding-top: 20px;
    display: flex;
    a {
      span {
        width: 100px;
        font-weight: 600;
        color: #fff;
        font-size: 40px;
        line-height: 19px;
      }
      p {
        font-weight: 300;
        font-size: 20px;
        line-height: 19px;
        color: #fff;
        margin: 0;
        padding: 0;
      }
    }
  }



    .btnCart {
      width: 90px;
      height: 40px;
      border-radius: 8px;
      line-height: 10px;
      transition: filter 0.2s;
      background-color: #ffffff;
      border: none;
      cursor: pointer;
      span {
        font-size: 18px;
        font-weight: 700;
        color: #000;
        text-transform: uppercase;
        padding-left: 15px;
      }
      &:hover {
        filter: brightness(0.9);
      }
      /* .itemAdd{
        transform: scale(1.1);
        transition: transform 0.4s ease-in-out;
      } */
    

  }
`;