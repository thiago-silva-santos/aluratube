
import config from '../config.json'
import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Menu from '../components/Menu'
import { useState } from 'react'

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        boxSizing: 'border-box'
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
      </div>
  )
}
