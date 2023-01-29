import { fetchProducts } from "../../featuresSlice/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Fragment, ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardProducts from "../CardProducts";
import { Skeleton } from "@mui/material";
import * as S from './styles';

export default function Products(): ReactElement {
    const products = useSelector((state: RootState) => state.products.allProducts);
    const isLoading = useSelector((state: RootState) => state.products.isLoading);
    const dispatch = useDispatch<AppDispatch>();
   
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    
    return (
        <S.Container>
            {!isLoading
            ?   products?.map((product) => (
                    <CardProducts product={product} key={product.id} />
                ))
            :   [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item}>
                  <Skeleton variant="rounded" width={217} height={285} />
                </div>
            ))}
            
        </S.Container>
    )
}