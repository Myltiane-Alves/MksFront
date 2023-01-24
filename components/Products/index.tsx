import Link from 'next/link';
import * as S from './styles';
import { RiShoppingBag3Line } from "react-icons/ri";
export default function Products() {
    return (
        <S.Container>
            <S.Card>
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
                    <div className="price">
                        <span>R$399</span>
                    </div>
                </div>
                <div className="description">
                    <p>Redesigned from scratch and completely revised.</p>
                </div>
                <div className="containerBtn">
                    
                    <RiShoppingBag3Line 
                        color="#fff" 
                        className="icon"
                        size={25}
                    />
                    <button>      
                        <Link href="">
                            Comprar
                        </Link>
                    </button>
                    
                </div>
            </S.Card>
        </S.Container>
    )
}


      {/* <svg 
                            width="14" 
                            height="16" 
                            viewBox="0 0 14 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                opacity="0.737212" 
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" 
                                stroke="white" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                            />
                        </svg> */}