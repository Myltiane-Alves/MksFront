import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/store';
import { Product } from '@/types/Product';
import { hide } from '@/featuresSlice/sidebarCartSlice';
import { ReactElement, useCallback, useState } from 'react';
import Cart from '../Cart';

export default function SidebarCart(): ReactElement {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const totalItems = useSelector((state: RootState) => state.cart.totalItems);
    const [mobileMenu, setMobileMenu] = useState(false);

    const OpenMobileMenu = useCallback(() => {
        setMobileMenu(oldValue => !oldValue);
    }, []);

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
                    <h2>Carrinho <br /> de Compras</h2>
                </div>
                <button
                    type="button"
                    // onClick={() => dispatch(hide())}
                    onClick={OpenMobileMenu}
                    className="btnClose"
                >

                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.9609" cy="23.4307" r="22.9609" fill="black" />
                        <path d="M34.66 34L25.42 22.12L34.132 10.856H30.7L23.748 19.92L16.796 10.856H13.276L21.988 22.12L12.836 34H16.356L23.748 24.32L31.096 34H34.66Z" fill="#0F52BA" />
                    </svg>


                </button>
            </header>
            {mobileMenu && <SidebarCart openMobileMenu={OpenMobileMenu} />}
            <div className="card">
                {products.map((item: Product) =>
                    getItem(item) ? <Cart product={item} key={item.id} /> : ""
                )}
            </div>

            {/* <S.Footer>
                <div className="container">
                    <div className="total">
                        <span>Total:</span>
                        <span>{`R$${totalPrice}`}</span>
                    </div>
                </div>
                <div className="btn">
                    <button>Finalizar Compra</button>
                </div>
            </S.Footer> */}
        </S.Container>
    )
}

//como criar sidebar