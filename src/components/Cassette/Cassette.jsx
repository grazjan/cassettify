import { CassetteBottom, CassetteInner, CassetteInnerBottom, CassetteInnerTop, CassetteScrew, CassetteScrewsWrapper, CassetteSide, CassetteTape, CassetteWheel, CassetteWheelsWrapper, CassetteWhitespace, SongArtist, SongTitel, StyledCassetteWrapper } from "./styled"


const Cassette = ({ song, isPlaying }) => {
  return (
    <StyledCassetteWrapper>
        <CassetteScrewsWrapper position="top">
            <CassetteScrew deg="10deg" position="left"/>
            <CassetteScrew deg="60deg" position="right"/>
        </CassetteScrewsWrapper>
        <CassetteInner>
            <CassetteInnerTop>
                <CassetteSide>A</CassetteSide>
                <CassetteWhitespace>
                    <SongArtist>Unknown Artist</SongArtist>
                    <SongTitel>Unknown</SongTitel>
                </CassetteWhitespace>
            </CassetteInnerTop>
            <CassetteInnerBottom>
                <CassetteWheelsWrapper>
                    <CassetteWheel isPlaying={isPlaying} />
                    <CassetteTape />
                    <CassetteWheel isPlaying={isPlaying}/>
                </CassetteWheelsWrapper>
            </CassetteInnerBottom>
        </CassetteInner>
        <CassetteBottom>
            <div className="inner">
                <div className="first-side"></div>
                <div className="second-side"></div>
            </div>
        </CassetteBottom>
        <CassetteScrewsWrapper position="bottom">
            <CassetteScrew deg="130deg" position="left"/>
            <CassetteScrew position="right"/>
        </CassetteScrewsWrapper>
    </StyledCassetteWrapper>
  )
}

export default Cassette