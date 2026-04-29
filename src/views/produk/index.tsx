import styles from "../../pages/produk/product.module.scss";

type ProdukType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
    image: string;
}

const TampilanProduk = ({ products }: { products: ProdukType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <br />

      <div className={styles.produk__content}>
        {products?.length > 0 ? (
          <>
            {products?.map((products: ProdukType) => (
              <li key={products.id} className={styles.produk__item}>
                <img
                  src={products.image}
                  alt={products.name}
                  width={200}
                  height={200}
                />

                <h2 className={styles.produk__item__name}>
                  {products.name}
                </h2>

                <p className={styles.produk__item__price}>
                  Harga: {products.price}
                </p>

                <p className={styles.produk__item__size}>
                  Ukuran: {products.size}
                </p>

                <p className={styles.produk__item__category}>
                  Kategori: {products.category}
                </p>

                <br />
                <br />
              </li>
            ))}

            <div className={styles.produk__content__skeleton}>
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__name}></div>
              <div className={styles.produk__content__skeleton__size}></div>
              <div className={styles.produk__content__skeleton__price}></div>
              <div className={styles.produk__content__skeleton__category}></div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TampilanProduk;
  
  