import * as S from './styles';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { totalPrice } from '../../featuresSlice/cartSlice';
import SidebarCart from '../SidebarCart';
import Image from 'next/image';
import iconCart from '../../assets/img/cart1.svg';

export const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const countItems = useSelector((state: RootState) => state.cart.countItems);
    const [itemAdd, setItemAdd] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const OpenMobileMenu = useCallback(() => {
        setMobileMenu(oldValue => !oldValue);
    }, []);


    useEffect(() => {
        dispatch(totalPrice());
        if(!countItems) return;
        setItemAdd(true);
        setTimeout(() => {
            setItemAdd(false);
        }, 300);
    }, [countItems]);

    return (
        <S.Container>
            <S.Content>
                <div className="containerLogo">
                    <Link href="/">
                        <span>MKS</span>
                    </Link>
                    <Link href="/">
                        <p>Sistemas</p>
                    </Link>
                </div>
              
                {mobileMenu && <SidebarCart  openMobileMenu={OpenMobileMenu}/>}
              
                    <button
                        type="button"
                        className="btnCart"
                        onClick={OpenMobileMenu}
                        data-testid="buttonCart"
                    >
                        <Image src={iconCart}  alt="icone de carrinho de compra" />

                        <span data-testid="countItems">
                            {countItems}
                        </span>
                    </button>
                
            </S.Content>
        </S.Container>
    )
}