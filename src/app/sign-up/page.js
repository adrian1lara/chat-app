import "../styles/global.css"
import SignUpForm from "../components/signUpForm";


export default function SignUpPage () {

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-fuchsia-400">Sign Up</h2>
            <SignUpForm />
        </div>
    )
}