
import config from '../config.json'
import Header from '../components/Header'
import Timeline from '../components/Timeline'
import { CSSReset } from '../components/CSSReset'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}
