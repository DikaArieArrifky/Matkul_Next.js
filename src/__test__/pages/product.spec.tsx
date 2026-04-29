import {render, screen} from "@testing-library/react";
import TampilanProduk from "@/views/produk";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/product",
            pathname: "",
            query: {},  
            asPath: "",
            push : jest.fn(),
            event: {
                on: jest.fn(),
                off: jest.fn(),
            },
            isReady: true,
        }
    },
}));

    
describe("Tampilan Produk", () => {
    it("renders produk page correctly", () => {
        const page = render(<TampilanProduk products={[]} />);
        //expect(screen.getByTestId("title").textContent).toBe("Product Page");
        expect(page).toMatchSnapshot()
    })
})