import {API_PATH} from "../home/page";

export async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now() }`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`${API_PATH}/${id}`)
    return res.json();
}

export default async function MovieInfo( { _id } : { _id: string })  {
    const movie = await getMovie( _id );
    return <h6> {JSON.stringify( movie )}</h6>

}