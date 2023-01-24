import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* z-index: 5; */
  }
`;

export const Nav = styled.div`
  @media (max-width: 720px) {
    border-top-left-radius: 1rem;
    margin-left: auto;
    display: flex;
    background-color: #0F52BA;
    color: #23272a;
    width: 65vw;
    height: 100vh;
    flex-direction: column;
    padding: 16px 16px 0 16px;
    position: relative;

    .logoMenu {
      width: 180px;
     
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
        }
      }

    }

    ul {
      display: flex;
      flex-direction: column;

      li {

        list-style: none;
        cursor: pointer;
        margin-top: 0.5rem;
        & + li {
          margin-top: 0.5rem;
        }
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
        }
        /* a {
          font-size: 22px;
          font-weight: 600;
          line-height: 32px;
          color: #fff;
          padding: 0.5rem;
          display: block;
          &:hover {
            text-decoration: underline;
          }
        } */
     
      }
    }
    .containerCloseMenu {

      button.closeMenu {
        position: absolute;
        top: 30px;
        right: 24px;
        padding: 8px;
        background-color: transparent;
        border: none;
        .icon {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }
      }

    }
  }
`;
