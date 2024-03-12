import {API_PATH} from "../home/page";

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
    return <h6> {JSON.stringify( videos )}</h6>
}