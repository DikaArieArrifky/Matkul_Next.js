import { useRouter } from "next/router";

export default function Category() {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Halaman Kategori</h1>

            <p>
                Kategori Utama: {slug ? slug[0] : "Semua Kategori"}
            </p>

            <h3>Semua isi category:</h3>
            <ul>
                {slug?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}