import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../../views/DetailProduct";
import { ProdukType } from "../../pages/types/produk.type";


const HalamanProduk = ({ product }: { product: ProdukType}) => {
    //const router = useRouter();
    //const { id } = router.query;
    // const {query} = useRouter();
    // const { data, error, isLoading } = useSWR(`/api/produk/${query.id}`, fetcher);
    return (
        <div>
            <DetailProduct products={product} />
        </div>
    );
};

export default HalamanProduk;

// {ini untuk server side rendering, jadi data akan diambil saat halaman diminta, bukan saat halaman dirender di klien.}
export async function getServerSideProps({ params }:{params: { produk: string }}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
    const response = await res.json();

    return {
        props: {
            product: response.data,
        },
    };
}

// {ini untuk static site generation, jadi data akan diambil saat build time, bukan saat halaman diminta.}
// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:3000/api/products`);
//     const response = await res.json();

//     const paths = response.data.map((product: ProdukType) => ({
//         params: { id: product.id },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// }

function cleanUndefined(obj: any): any {
    if (obj === null || obj === undefined) return null;
    if (Array.isArray(obj)) {
        return obj.map(cleanUndefined);
    }
    if (typeof obj === 'object') {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = cleanUndefined(value);
            }
            return acc;
        }, {} as any);
    }
    return obj;
}

// export async function getStaticProps({ params }:{params: { id: string }}) {
//     try {
//         const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`);
//         const response : {data : ProdukType} = await res.json();

//         if (!response.data) {
//             return {
//                 notFound: true,
//                 revalidate: 60,
//             };
//         }

//         const product = cleanUndefined(response.data);

//         return {
//             props: {
//                 product,
//             },
//             revalidate: 60,
//         };
//     } catch (error) {
//         return {
//             notFound: true,
//             revalidate: 60,
//         };
//     }
// }