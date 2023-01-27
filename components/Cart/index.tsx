import * as S from './styles';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Product } from '@/types/Product';
import { ReactElement } from 'react';
import CountItemsById from '@/utils/countItemsById';
import { addToCart, removeFromCart, } from '@/featuresSlice/cartSlice';

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
                <button type="button">
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
                <div className="text">
                    <h2>Apple Watch Series 4 GPS</h2>
                    <p>{product.name}</p>
                </div>

            </div>
            <div className="containerButtton">
                <p>Qtd</p>
                <div className="contentButton">
                    <button className="btnMinus" onClick={() => dispatch(removeFromCart(product))}>
                        <AiOutlineMinus size={12} />
                    </button>
                    <span>1</span>
                    <button className="btnAdd" onClick={() => dispatch(addToCart(product))}>
                        <AiOutlinePlus size={12} />
                    </button>
                </div>

                <div className="price">
                    <span>{stringPrice}</span>
                </div>

            </div>



        </S.Cards>


    )
}

//como criar sidebar