import Link from 'next/link';
import * as S from './styles';
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/store';
import { Product } from '@/types/Product';

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const totalItems = useSelector((state: RootState) => state.cart.totalItems);


    const getItem = (product: Product) => {
        const productFinaly = totalItems.find((item) => {
            return item.id === product.id;
        });
        if (!productFinaly) {
            return false;
        }
        return true;
    }

    return (
        <S.Container>
            <header>
                <div className="text">
                    <h2>Carrinho de Compras</h2>
                </div>
                <div className="btnClose">

                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="black" />
                        <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                    </svg>

                </div>
            </header>

            <S.Cards>
                <div className="card">
                    <div className="containerImg">
                        <img
                            src="/img/apple-watch.png"
                            alt=""
                            className="imageProduct"
                        />
                    </div>
                    <div className="title">
                        <div className="text">
                            <p>Apple Watch Series 4 GPS</p>
                        </div>

                    </div>
                    <div className="containerButtton">
                        <p>Qtd</p>
                        <div className="contentButton">
                            <button className="btnMinus">
                                <AiOutlineMinus size={12} />
                            </button>
                            <span>1</span>
                            <button className="btnAdd">
                                <AiOutlinePlus size={12} />
                            </button>
                        </div>


                    </div>
                    <div className="price">
                        <span>R$399</span>
                    </div>
                    <div className="btnClose">
                        
                        <svg width="18" height="18" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19" cy="19" r="19" fill="black" />
                            <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                        </svg>

                    </div>
                </div>
                <div className="card">
                    <div className="containerImg">
                        <img
                            src="/img/apple-watch.png"
                            alt=""
                            className="imageProduct"
                        />
                    </div>
                    <div className="title">
                        <div className="text">
                            <p>Apple Watch Series 4 GPS</p>
                        </div>

                    </div>
                    <div className="containerButtton">
                        <p>Qtd</p>
                        <div className="contentButton">
                            <button className="btnMinus">
                                <AiOutlineMinus size={12} />
                            </button>
                            <span>1</span>
                            <button className="btnAdd">
                                <AiOutlinePlus size={12} />
                            </button>
                        </div>


                    </div>
                    <div className="price">
                        <span>R$399</span>
                    </div>
                    <div className="btnClose">
                        
                        <svg width="18" height="18" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19" cy="19" r="19" fill="black" />
                            <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                        </svg>

                    </div>
                </div>
            </S.Cards>
            <S.Footer>
                <div className="container">
                    <div className="total">
                        <span>Total:</span>
                        <span>{`R$${totalPrice}`}</span>
                    </div>
                </div>
                <div className="btn">
                    <button>Finalizar Compra</button>
                </div>
            </S.Footer>
        </S.Container>
    )
}

//como criar sidebar