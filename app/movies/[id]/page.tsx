import {Suspense} from "react";
import MovieInfo, {getMovie} from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";

interface IParams {
    params: { id: string };
}

// ❤️영화 제목을 동적으로 meta정보에 제목 보여주고 싶어.
// 참고로 ❤️export 키워드 추가 해야 프레임웍에서 찾아서 사용해.
export async function generateMetadata( { params: {id} } : IParams ) {
    const movie = await getMovie(id) // ❤️이미 캐싱한 호출했던 캐싱 데이터라서 두번 호출하는거 아님.
    return {
        title: movie.title
    }
}

// detailPage 가 호출되면서 동시에 generateMeta 호출되.
export default async function MovieDetailPage( { params: {id} } : IParams ) {

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
