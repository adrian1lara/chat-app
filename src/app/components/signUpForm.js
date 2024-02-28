import "../styles/global.css"

export default function SignUpForm () {
    return (
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#">  
                <input type="text" name="username" placeholder="username"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        
                </input>
                <input type="email" name="email" placeholder="example@domain.com"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <input type="password" name="password" placeholder="********"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>

                <button type="submit"
                class="flex w-full justify-center rounded-md bg-fuchsia-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">sign up</button>

                <p class="mt-10 text-center text-sm text-gray-500">
                   Do you have an account?
                    <a href="/log-in" class="font-semibold leading-6 text-fuchsia-400 hover:text-fuchsia-600"> Log In here</a>
                </p>
            </form>
        </div>
    )
}