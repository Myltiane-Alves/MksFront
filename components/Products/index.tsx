import { fetchProducts } from "@/featuresSlice/productsSlice";
import { AppDispatch, RootState } from "@/services/store";
import { Fragment, ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardProducts from "../CardProducts";


export default function Products(): ReactElement {
    const products = useSelector((state: RootState) => state.products.allProducts);
    const isLoading = useSelector((state: RootState) => state.products.isLoading);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    
    return (
        <Fragment>
            {products.map((product) => (
                <CardProducts product={product} key={product.id} />
            ))}
        </Fragment>
    )
}