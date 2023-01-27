import styled from 'styled-components'

export const Cards = styled.div`
    background-color: #ffffff;
        border-radius:  8px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 328px;

        /* padding-right:  47px; */
        margin-bottom:  12px;
        padding-bottom: 20px;
        .btnClose {
            float: left;
            display: flex;
            justify-content: flex-end;
            /* place-items: flex-end; */
            background-color: transparent;
            button {
                background-color: transparent;
                border: none;
                /* margin-left: 42px; */
                /* margin-top: 5px; */
                /* padding-left: 37px; */
              
                color: #000000;
                font-size: 32px;
                font-weight: 400;
            }
        }
        .containerImg {
            /* display: flex; */
            /* background-color: #0F52BA; */
            padding: 19px 0px 0px 0px;
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
            /* padding: 14px 11px 8px 14px; */
            
    
            .text {
                
                width: 100%;
                h2 {
                    color: #2C2C2C;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                }
                p {
                   display: none;
                }
    
            }
        }
        
        .containerButtton {
            display: flex;
            align-self: center;
            justify-content: space-between;
            width: 80%;
            p {
                font-size: 10px;
                line-height: 6px;
                font-weight: 400;
                margin-bottom: 5px;
            }
            p {
                display: none;
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
            .price {
                display: flex;
                border-radius: 5px;
                width: 84px;
                height: 34.81px;
                align-items: center;        
                background-color: #2C2C2C;
                span {
                    color: #fff;
                    font-weight: 700;
                    font-size: 14px;
                    /* line-height: 15px; */
                    text-align: center;
                    width: 100%;
                    font-family: "Montserrat";
                }
        }
        }
    
    @media (min-width:  768px) {
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

