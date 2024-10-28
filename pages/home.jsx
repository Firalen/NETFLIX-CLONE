import Service from "../pages/service"
import Row from '../pages/row'
import Request from '../Request'
function Home() {
  return (
       <>
     <Service />
     <Row  rowId='1' title='Upcoming' fetchingURL={Request.requestUpcoming} />
     <Row  rowId='2' title='Popular' fetchingURL={Request.requestPopular} />
     <Row  rowId='3' title='Trending' fetchingURL={Request.requestTrending} />
     <Row  rowId='4' title='Toprated' fetchingURL={Request.requestTopRated} />
     <Row rowId='5' title='Horror' fetchingURL={Request.requestHorror} />
      </>
  )
}

export default Home
