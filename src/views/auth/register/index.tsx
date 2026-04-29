import styles from "../../auth/register/register.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("fullname") as string;
    const password = formData.get("password") as string;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });

      if (response.status === 200) {
        form.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setIsLoading(false);
        setError(
          response.status === 400 ? "Email already exists." : "An error occurred."
        );
      }
  };


  return (
    <div className={styles.register}>
      {error && <p className={styles.register__error}>{error}</p>}
      <h1 className={styles.register__title}>Halaman Register</h1>

      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.register__form__item__input}
            />
          </div>

          {/* Nama Lengkap */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Nama Lengkap
            </label>

            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Nama Lengkap"
              className={styles.register__form__item__input}
            />
          </div>

          {/* Password */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.register__form__item__input}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >{isLoading ? "Loading..." : "Register"}
          </button>

          {/* Redirect Login */}
          <p className={styles.register__form__item__text}>
            Sudah punya akun?{" "}
            <Link href="/auth/login">Login di sini</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default TampilanRegister;