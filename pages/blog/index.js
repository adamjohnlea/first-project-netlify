import head from 'next/head'
import Link from 'next/link'

function Blog() {
    return (
        <>
        <head>
            <title>My Next.js Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </head>
        <div>Welcome to my blog :)</div>
        <Link href="/">
            Go back home...
        </Link>
        </>
    )  
}

export default Blog