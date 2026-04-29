import TampilanProduk from "../../views/produk";
import { ProdukType } from "../types/produk.type";


const HalamanProdukServer = (props: { products: ProdukType[] }) => {
    const {products} = props;
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={products} />
        </div>
    );
}
export default HalamanProdukServer;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/`);
    const response = await res.json();
    return {
        props: {
            products: response.data,
        }
    }
}