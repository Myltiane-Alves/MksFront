import styled from 'styled-components'

export const Container = styled.main`
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 20px 0px 20px 0px;

   
`;

export const Card = styled.div`
    background-color: #ffffff;
    border-radius:  8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    width: 217px;
    display: flex;
    flex-direction: column;

    
    .containerImg {
        /* display: flex; */
        /* background-color: #0F52BA; */
        padding-top: 18px;
        text-align: center;
        .imageProduct {
    
            width: 111px;
        }
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 11px 8px 14px;
        .price {
            display: flex;
            background-color: #373737;
            border-radius: 5px;
            width: 64px;
            height: 26px;
            align-items: center;
            span {
                color: #fff;
                font-weight: 700;
                font-size: 15px;
                /* line-height: 15px; */
                text-align: center;
                width: 100%;
                font-family: "Montserrat";
            }
        }

        .text {
            width: 124px;
            p {
                color: #2C2C2C;
                font-weight: 400;
                font-size: 16px;
                font-family: "Montserrat";
                line-height: 19px;
                text-align: left;
            }

        }
    }
    .description {
        width: 188px;
        /* background-color: red; */
        /* height: 25px; */
        padding: 8px 11px 12px 14px;
        p {      
            color: #2C2C2C;
            font-weight: 300;
            font-size: 10px;
            font-family: "Montserrat";
            line-height: 12px;
            text-align: left;
        }

    }
    .containerBtn {
        background-color: #0F52BA;
        /* background-color: red; */
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
  
        border-end-end-radius: 8px;
        border-end-start-radius: 8px;
        
    }
    button {
        all: unset;
        cursor: pointer;
        padding: 14px 0px;
        gap: 22.4px;
        background-color: #0F52BA;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 0px 0px 8px 8px;
        border: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 28px;
        text-transform: uppercase;
        color: #ffffff;
        .cart {
            box-sizing: border-box;
            display: inline-block;
            overflow: hidden;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            position: relative;
            max-width: 100%;
        }
    }
`;