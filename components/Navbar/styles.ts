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
      font-family: "Montserrat";
      span {
        width: 100px;
        font-weight: 600;
        font-family: "Montserrat";
        color: #fff;
        font-size: 40px;
        line-height: 19px;
      }
      p {
        font-weight: 300;
        font-size: 20px;
        font-family: "Montserrat";
        line-height: 19px;
        color: #fff;
        margin: 0;
        padding: 0;
      }
    }
  }


  button.mobileMenu {
    display: none;
  }

  @media (max-width: 720px) {


    button.mobileMenu {
      display: flex;
      padding: 16px;
      font-size: 32px;
      color: #fff;
      border: none;
      background: transparent;
    }

    nav {
      display: none;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      li {

        line-height: 22px;
        list-style: none;
        span {
          width: 100px;
          font-weight: 600;
          font-family: "Montserrat";
          color: #fff;
          font-size: 40px;
          line-height: 19px;
        }
        p {
          font-weight: 300;
          font-size: 20px;
          font-family: "Montserrat";
          line-height: 19px;
          color: #fff;
        }

        a {
          font-size: 22px;
          color: #3AB8FB;
          font-weight: 500;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
       
        .containerCart {
          .btnCart {
            /* padding: 1rem 1.87rem; */
            width: 90px;
            height: 40px;
            border-radius: 8px;
            line-height: 10px;
            transition: filter 0.2s;
            background-color: #ffffff;
            border: none;

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
          }

        }
      }
    }
  }
`;