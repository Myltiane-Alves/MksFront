import * as S from './styles';
import { Product } from '@/types/Product';
import { ReactElement } from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../../featuresSlice/cartSlice";
import Image from 'next/image';
import shop from "../../assets/img/shopping-bag.svg";

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
                    
                        <h1>
                            {product.name}
                        </h1>
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
                
                <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    data-testid="buyButton"
                >      
                    
                    <Image 
                        src={shop}
                        alt="carrinho para adicionar compra"
                        className="cart"
                        width={100}
                        height={20}
                    />
                    
                    <span> Comprar</span> 
                
                </button>
            </S.Card>
        </S.Container>
    )
}
