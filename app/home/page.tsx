import Link from "next/link";
import styles from "../../styles/home.module.css"
import Movie from "../components/movie"
import {API_PATH} from "../../libs/movies";

export const metadata = {
    title: 'Home',
}


async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(API_PATH)
    console.log(res);
    return await res.json();
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) =>
                <Movie
                    id={movie.id}
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            )}
        </div>
    )
}