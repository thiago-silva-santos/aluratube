import styled from "styled-components"


const StyledTimeline = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  padding: 16px;
  overflow: auto;
  box-sizing: border-box !important;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

function Timeline({ searchValue, ...props }) {


     const playlistsNames = Object.keys(props.playlists)
     return (
          <StyledTimeline>
               {
                    playlistsNames.map((item) => {
                         const videos = props.playlists[item]
                         return (
                              <section key={item}>
                                   <h2>{item}</h2>
                                   <div>
                                        {videos
                                             .filter((video) => {
                                                  const titleNormalized = video.title.toLowerCase();
                                                  const searchValueNormalized = searchValue.toLowerCase();
                                                  return titleNormalized.includes(searchValueNormalized)
                                             })
                                             .map((video) => {
                                                  return (
                                                       <a key={video.url} href={video.url}>
                                                            <img src={video.thumbnail} />
                                                            <span>
                                                                 {video.title}
                                                            </span>
                                                       </a>
                                                  )
                                             })}
                                   </div>
                              </section>
                         )
                    })}
          </StyledTimeline>
     )
}

export default Timeline