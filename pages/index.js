import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../requests";

export default function Home({results}) {
  return (
   <div>
     <Head>
        <title>Movie</title>
     </Head>
     <Header/>
     <Navbar/>
     <Results results={results}/>
   </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre || "fetchTrending";
  const request = await fetch(`
    https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results
    }
  }
}