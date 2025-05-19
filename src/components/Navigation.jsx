import { GQL_GET_MEDIA_ITEM, LOGO_SCHRIFT } from '../constants'
import { useGraphQL } from '../helpers'


function Navigation() {
  const { loading, error, data } = useGraphQL(GQL_GET_MEDIA_ITEM, {
    variables: { id: LOGO_SCHRIFT["LogoLamara"] }
  })

  if (loading) return null // oder: 
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="nav">
      {data?.mediaItem ? <div className="nav-logo">
        <img src={data.mediaItem.sourceUrl} title={data.mediaItem.title}></img>
      </div> : null}
      <div className="nav-links">
        <a href="about-me">Über mich</a>
        <a href="portfolio">Referenzen</a>
        <a href="reviews">Bewertungen</a>
        <a href="contsct">Termin Vereinbaren</a>
      </div>
    </div>
  )
}
export default Navigation