import { useSession } from "next-auth/react";

const HalamanProfile = () => {
    const { data }: any = useSession();
    return (
        <div>
            <h1>Halaman Profile</h1><br />
            <p>Selamat Datang, {data?.user?.fullname}</p>
        </div>
    );
}

export default HalamanProfile;