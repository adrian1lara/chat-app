import LogInForm from "../components/loginForm";
import Logo from "../components/logoHeader";


export default function LogInPage() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center">
            <Logo fontSize={"text-8xl"}/>
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500">Log In</h1>
            <LogInForm />
        </div>
    )
}