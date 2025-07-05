import { auth, signIn, signOut } from "@/app/auth"
import { redirect } from 'next/navigation'
import LogoutBtn from "./pages/components/LogoutBtn";
import Signin from "./components/Signin";
import SigninSm from "./components/SigninSm";
import Alert from "./components/Alert";
import AlertSm from "./components/AlertSm";

export default async function Home() {
    const session = await auth();
    const user = session?.user;
    const email = user?.email || "";
    const re_id = email.slice(3, 10);

    if( user ) {
        if (re_id == "0102361") {
            return redirect('/pages/')
        }
        return (
            <div>
                <div className="max-md:hidden"><Alert/></div>
                <div className="max-md:block md:hidden"><AlertSm/></div>
            </div>
        )
    } 
    return (
        <div>
            <div className="max-md:hidden"><Signin/></div>
            <div className="max-md:block md:hidden"><SigninSm/></div>
        </div>
    )
} 