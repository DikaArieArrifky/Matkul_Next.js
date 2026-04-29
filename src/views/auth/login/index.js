import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";


const TampilanLogin = () => {
  const {push} = useRouter(); 
  const handleLogin = () => {
  localStorage.setItem("login", "true"); 
  push("/produk");
};
  
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
      <button onClick={() => handleLogin()}>Login</button> <br />
      <h1 style={{color:"red" , border:"1px solid red", borderRadius:"5px", padding:"5px"}}>Belum Punya Akun</h1>
      <Link href="/auth/register">Link Ke Halaman Register</Link>
    </div>
  );
}

export default TampilanLogin;