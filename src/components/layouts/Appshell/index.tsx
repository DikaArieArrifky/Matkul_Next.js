import Navbar from "../navbar";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

const disableFooter = ["/auth/login", "/auth/register", "/404"];

type AppshellProps = {
    children: React.ReactNode;
}

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});
const Appshell = (props: AppshellProps) => {

    const { children } = props;
    const {pathname} = useRouter();

    return (
        <main className={roboto.className}>
            {!disableFooter.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
}

export default Appshell;