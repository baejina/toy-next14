import { API_PATH } from "../../home/page"
import {Suspense} from "react";
import MovieInfo from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";

type MovieDetailProps = { params: { id: string} }
export default async function MovieDetail( { params: {id}, } : MovieDetailProps ) {

    // 2가지 API를 호출할때 아래와 같이 쓰면 순차적으로 동작해. 1번이 느리면 2번도 느리지.
    /*
    const movie = await getMovie( id );
    const videos = await getVideos( id );
    */

    // so, Promise.all을 사용해서 병렬 페칭하는 방법
    // console.log('======start fetching!');
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log('======end fetching!')

    // so, 그것보다 더 좋은 방법이 있어. suspense
    return (
        <div>
            <Suspense fallback={<h3>Loading Movie info...</h3>}>
                <MovieInfo _id={id} />
            </Suspense>
            <Suspense fallback={<h3>Loading Movie videos info...</h3>}>
                <MovieVideos _id={id} />
            </Suspense>
        </div>
    )
}
