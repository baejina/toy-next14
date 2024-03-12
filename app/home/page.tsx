import Link from "next/link";

export const metadata = {
    title: 'Home',
}

export const API_PATH = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(API_PATH)
    console.log(res);
    return await res.json();
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            <h2>Movie List Home</h2>
            { movies.map(movie =>
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>)
            }
        </div>
    )
}