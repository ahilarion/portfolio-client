import Link from "next/link";

function Blog({posts}) {
    return (
        <div>
            <h1>Liste des articles</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Blog;