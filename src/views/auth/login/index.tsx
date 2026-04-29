import styles from "../../auth/login/login.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl : any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    // const form = event.currentTarget;
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;  
    // const fullname = formData.get("fullname") as string;
    // const password = formData.get("password") as string;
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, fullname, password }),
    // });

    //   if (response.status === 200) {
    //     form.reset();
    //     setIsLoading(false);
    //     push("/auth/login");
    //   } else {
    //     setIsLoading(false);
    //     setError(
    //       response.status === 400 ? "Email already exists." : "An error occurred."
    //     );
    //   }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login Failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Wrong email or password.");
    }
  };
  


  return (
    <>
    <div className={styles.login}>
      {error && <p className={styles.login__error}>{error}</p>}
      <h1 className={styles.login__title}>Halaman login</h1>

      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.login__form__item}>
            <label
              htmlFor="email"
              className={styles.login__form__item__label}
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.login__form__item__input}
            />
          </div>


          {/* Password */}
           <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.login__form__item__input}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={styles.login__form__item__button}
            disabled={isLoading}
          >{isLoading ? "Loading..." : "login"}
          </button>
          <br /><br />
          <button onClick={() => signIn("google", { callbackUrl })}
            className={styles.login__form__item__button}
            disabled={isLoading}
            >
            {isLoading ? "Loading..." : "Sign In with Google"}
          </button>
          {/* Redirect Login */}
          <p className={styles.login__form__item__text}>
            Tidak punya akun?{" "}
            <Link href="/auth/register">Ke Halaman Register</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Tampilanlogin;