import {API_PATH} from "../../libs/movies";
import styles from "../../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`${API_PATH}/${id}`)
    return res.json();
}

export default async function MovieInfo({_id}: { _id: string }) {
    const movie = await getMovie(_id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster}
                 alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}> {movie.title}</h1>
                <h3>평점:⭐️{movie.vote_average}</h3>
                <a href={movie.homepage} target={"_blank"}> 홈페이지: → </a>
                <p>줄거리 : {movie.overview}</p>
            </div>

            {/*{JSON.stringify( movie )}*/}
        </div>

    )

}