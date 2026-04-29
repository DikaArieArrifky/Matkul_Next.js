import TampilanProduk from "../../views/produk";
import { ProdukType } from "../types/produk.type";

const HalamanProdukStatic = (props: { products: ProdukType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />

        </div>
    );
}

export default HalamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/produk');
    const response : { data: ProdukType[] } = await res.json();

    return {
        props: {
            products: response.data,
        },
        revalidate:10, // Revalidate every 10 seconds
    }
}