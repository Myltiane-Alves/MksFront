import { useSelector } from 'react-redux';
import { RootState } from '../services/store';
export default function CountItemsById(id: number){
    const items = useSelector((state: RootState) => state.cart.totalItems);
    const newItems = items.filter((item) => {
       return item.id === id;
    })
    return newItems.length;
}