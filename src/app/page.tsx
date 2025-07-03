import { auth, signIn, signOut } from "@/app/auth"
import { redirect } from 'next/navigation'
import LogoutBtn from "./pages/components/LogoutBtn";
import Signin from "./components/Signin";
import Alert from "./components/Alert";

export default async function Home() {
    const session = await auth();
    const user = session?.user;
    const email = user?.email || "";
    const re_id = email.slice(3, 10);

    if( user ) {
        if (re_id == "0102361") {
            return redirect('/pages/')
        }
        return <Alert/>
    } 
    return <Signin/>
} 