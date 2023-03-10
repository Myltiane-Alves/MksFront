import styled from 'styled-components'

export const Container = styled.div`
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
                text-align: center;
                width: 100%;
                
            }
        }

        .text {
            width: 124px;
            h1 {
                color: #2C2C2C;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                text-align: left;
            }

        }
    }
    .description {
        width: 188px;
        padding: 8px 11px 12px 14px;
        p {      
            color: #2c2c2c;
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;
            text-align: left;
        }

    }
    button {
        all: unset;
        cursor: pointer;
        gap: 22.4px;
        background-color: #0F52BA;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 36px;
        border-radius: 0px 0px 8px 8px;
        border: none;
        font-weight: 600;
        font-size: 16px;
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