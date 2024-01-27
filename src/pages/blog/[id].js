export default function Post({post}) {
    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
}

export async function getStaticProps({params}) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(r => r.json())
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    // Obtenez les articles du blog à partir de l'API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");
    const posts = await response.json();

    return {
        paths: posts.map(post => ({
            params: {id:post.id.toString()}
        })),
        fallback: false
    };
}