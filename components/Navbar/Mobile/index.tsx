import * as S from './styles';
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import Link from 'next/link';
interface MobileMenuProps {
    openMobileMenu(): void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu }) => {

    return (
        <S.Container>
            <S.Nav>
                {/* <div className="logoMenu">
                    <Link href="">
                        <span>MKS</span>
                    </Link>
                    <Link href="">
                        <p>Sistemas</p>
                    </Link>
                </div> */}
                <ul>
                    
                    <li>
                        <Link href="">
                            <span>MKS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <p>Sistemas</p>
                        </Link>     
                    </li>
                </ul>
                <div className="containerCloseMenu">
                    <button
                        className="closeMenu"
                        type="button"
                        aria-label="Close Menu"
                        onClick={openMobileMenu}>
                        <AiOutlineClose className="icon" />
                    </button>
                </div>
            </S.Nav>
        </S.Container>
    )
}