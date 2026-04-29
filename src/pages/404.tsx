import styles from "@/styles/404.module.scss";
import Link from "next/link";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>

      <Image
        src="/page-not-found.png"
        alt="404"
        width={400}
        height={200}
        className={styles.error__image}
        />
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <button>
            <Link href="/">Go back to homepage</Link>
          </button>

        </div>
        );
};

        export default Custom404;