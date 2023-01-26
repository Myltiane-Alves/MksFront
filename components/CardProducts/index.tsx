import Link from 'next/link';
import * as S from './styles';
import { RiShoppingBag3Line } from "react-icons/ri";
import { Product } from '@/types/Product';
import { ReactElement } from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../../featuresSlice/cartSlice";

export default function CardProducts({
    product,
}: {
    product: Product;
}): ReactElement {
    const dispatch = useDispatch()
    const stringPrice: string = `R$${Number(product.price).toFixed(0)}`;

    return (
        <S.Container>
            <S.Card>
                <div className="containerImg">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="imageProduct"
                    />
                </div>
                <div className="title">
                    <div className="text">
                    
                        <p>
                            {product.name}
                        </p>
                    </div>
                    <div className="price">
                        <span>
                            {stringPrice}
                        </span>
                    </div>
                </div>
                <div className="description">
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className="containerBtn">
                    
                    <RiShoppingBag3Line 
                        color="#fff" 
                        className="icon"
                        size={25}
                    />
                    <button
                        type="button"
                        onClick={() => dispatch(addToCart(product))}
                    >      
                        <Link href="">
                            Comprar
                        </Link>
                    </button>
                    
                </div>
            </S.Card>
        </S.Container>
    )
}
