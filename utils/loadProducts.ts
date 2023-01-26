import api from "@/api/config";
import { Product } from "@/types/Product";

const LoadProducts = async () => {
  const { data }: { data: { products: Product[] } } = await api.get(
    "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  return data.products;
}
export default LoadProducts;