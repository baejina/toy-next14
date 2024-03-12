import {API_PATH} from "../home/page";
import styles from "../../styles/movie-videos.module.css"

async function getVideos( id: string ) {
    console.log(`fetching video: ${Date.now() }: `)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // 컴포넌트 내 data fetching 일때 에러나면 어떻게 처리 하면 될까
    // throw new Error('something broken...')
    const res = await fetch(`${API_PATH}/${id}/videos`)
    return await res.json();
}

export default async function MovieVideos( { _id } : { _id: string })  {
    const videos = await getVideos( _id );
    return (
        <div className={styles.container}>
            {videos.map((video) => (
              <iframe key={video.id}
              src={`https://youtube.com/embed/${ video.key }`}
              title={video.name}
              allowFullScreen />
            ) ) }
        </div>
    )
}