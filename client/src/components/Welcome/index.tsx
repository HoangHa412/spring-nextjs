import Link from "next/link";

const Welcome = () =>{
    return(
        <div>
            <h1>Welcome to Next.js!</h1>
            <p>This is a simple example of a Next.js page.</p>
            <Link href='/about'>Go to About Page</Link>  {/* Link to the about page */}
        </div>
    )
}

export default Welcome