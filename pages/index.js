
import config from '../config.json'
import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Menu from '../components/Menu'
import { useState, useEffect } from 'react'
import { videoService } from '../src/services/videoDataService'

export default function Home() {
  const service = videoService();
  const [playlists, setPlaylists] = useState({});
  const [valorDoFiltro, setValorDoFiltro] = useState("");


  useEffect(() => {
    console.log("useEffect");
    service
        .getAllVideos()
        .then((dados) => {
            console.log(dados.data);
            const novasPlaylists = {};
            dados.data.forEach((video) => {
                if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                novasPlaylists[video.playlist] = [
                    video,
                    ...novasPlaylists[video.playlist],
                ];
            });

            setPlaylists(novasPlaylists);
        });
}, []);

  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        boxSizing: 'border-box'
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists}/>
      </div>
  )
}
