import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
    
//const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
    // const router = useRouter();
    const {push} = useRouter();
    const [products, setProducts] = useState([]);
    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    // useEffect(() => {
    //     const isLogin = localStorage.getItem("login");

    //     if (!isLogin) {
    //         router.push("/auth/login");
    //     }
    // }, []);

    // useEffect(() => {
    //     fetch("/api/produk")
    //         .then((response) => response.json())
    //         .then((responsedata) => {
    //             setProducts(responsedata.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching products:", error);
    //         });
    // }, []);

    // return <div>Produk User Page
    //     <div>
    //         <button
    //             onClick={() => {
    //                 localStorage.removeItem("login");
    //                 router.push("/auth/login");
    //             }}
    //         >
    //             Logout
    //         </button>
    //     </div>
    // </div>;

    
    return (    
    <div>
        <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
    
    );
};

export default kategori;