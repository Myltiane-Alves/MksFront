import styled from 'styled-components'

export const Container = styled.aside`
    background-color: #0F52BA;
    /* padding: 10px; */
    min-height: 90vh;
    width: 486px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
   
    transition: 350ms;
    header {
        padding: 36px 0px 0px 47px;
        display: flex;
        padding-bottom: 70px;
        justify-content: space-between;
        width: 460px;

        .text {
            width: 141px;
            height: 56px;
            
            h2 {
                font-size: 27px;
                font-weight: 700;
                font-family: "Montserrat";
                line-height: 32.91px;
                color: #ffffff;
                margin: 0;
            }

        }
        .btnClose {
            display: flex;
            .icon {
                background-color: #000000;
                color: #ffffff;
            }
        }
    }
`;

export const Cards = styled.div`
    padding-left: 47px;
    .card {

        background-color: #ffffff;
        border-radius:  8px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        display: flex;
        width: 379px;
        height: 96px;
        padding-right:  47px;
        margin-top:  28px;
        .btnClose {
            display: flex;
            margin-left: 42px;
            margin-top: -5px;
            /* padding-left: 37px; */
            float: left;
    
        }
        .containerImg {
            /* display: flex; */
            /* background-color: #0F52BA; */
            padding: 19px 0px 0px 23px;
            text-align: center;
            .imageProduct {
        
                width: 46px;
                height: 57px;
                left: 23px;
            }
        }
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 11px 8px 14px;
           
    
            .text {
                width: 100px;
                p {
                    color: #2C2C2C;
                    font-weight: 400;
                    font-size: 13px;
                    font-family: "Montserrat";
                    line-height: 17px;
                    text-align: left;
                }
    
            }
        }
        
        .containerButtton {
            align-self: center;
            p {
                font-size: 10px;
                line-height: 6px;
                font-weight: 400;
                margin-bottom: 5px;
            }
            .contentButton {
        
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 0.3px solid #BFBFBF;
                border-radius: 4px;
                background: #FFFFFF;
                width: 70px;
                height: 25px;
                align-self: center;
                padding: 5px;
                /* margin-top: 50px; */
                .btnAdd {
                    background-color: transparent;
                    color: #000000;
                    font-size: 12px;
                    transition: 0.5s;
                    border: none;
                    border-left: 0.2px solid #BFBFBF;
                    width: 20px;
                    height: 20px;
                    padding: 5px;
                    /* margin: 10px; */
                    ;
                    cursor: pointer;
                }
                .btnMinus {
                    background-color: transparent;
                    color: #000000;
                    font-size: 12px;
                    transition: 0.5s;
                    border: none;
                    border-right: 0.2px solid #BFBFBF;
                    width: 20px;
                    height: 20px;
                    padding: 5px;
                    /* margin: 10px; */
                    ;
                    cursor: pointer;
                }
            }
        }
        .price {
            display: flex;
            border-radius: 5px;
            width: 64px;
            height: 26px;
            /* align-items: center; */
            align-self: center;
            align-items: self-end;
            padding-left: 20px;
            span {
                color: #000000;
                font-weight: 700;
                font-size: 14px;
                /* line-height: 15px; */
                text-align: center;
                width: 100%;
                font-family: "Montserrat";
            }
        }
    }
 
  
`;

export const Footer = styled.footer`
    width: 486px;
    .container {
        padding: 40px 60px 10px 47px;
        .total {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 28px;
                font-weight: 700;
                line-height: 15px;
                color: #ffffff;
            }
        }
    }
    .btn {
        margin-top: 42px;
        background-color: #000000;
        text-align: center;
        button {
            height: 50px;
            font-size: 28px;
            line-height: 15px;
            font-weight: 700;
            font-family: "Montserrat";
            color: #ffffff;
            background-color: #000000;
            border: none;
        }
    }
`;