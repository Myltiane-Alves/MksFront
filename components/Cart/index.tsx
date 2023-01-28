import * as S from './styles';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Product } from '@/types/Product';
import { ReactElement } from 'react';
import CountItemsById from '@/utils/countItemsById';
import { addToCart,  removeFromProduct, } from '@/featuresSlice/cartSlice';

export default function Cart({
    product
}: {
    product: Product;
}): ReactElement {
    const dispatch = useDispatch();
    const itemsAmount: number = CountItemsById(product.id);
    const stringPrice: string = `R$${(Number(product.price) * itemsAmount).toFixed(0)}`;
    return (

        <S.Cards>
            <div className="btnClose">
                <button 
                    type="button"
                    onClick={() => dispatch(removeFromProduct(product))}    
                >
                    X
                </button>
            </div>
            <div className="containerImg">
                <img
                    src={product.photo}
                    alt={product.name}
                    className="imageProduct"
                />
            </div>
            <div className="title">
                <h2>{product.name}</h2>
            </div>

            <div className="containerPrice">
                <p>Qtd</p>
                <div className="containerButton">
                    <div className="contentButton">
                        <button className="btnMinus" onClick={() => dispatch(removeFromProduct(product))}>
                            <AiOutlineMinus size={12} />
                        </button>
                        <span>{itemsAmount}</span>
                        <button className="btnAdd" onClick={() => dispatch(addToCart(product))}>
                            <AiOutlinePlus size={12} />
                        </button>
                    </div>
                    <div className="price">
                        <span>{stringPrice}</span>
                    </div>

                </div>
            </div>

            <div className="btnCloseFooter">
                <button 
                    type="button"
                    onClick={() => dispatch(removeFromProduct(product))}
                >
                    <svg width="20" height="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="black" />
                        <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                    </svg>

                </button>
            </div>


        </S.Cards>


    )
}

//como criar sidebar