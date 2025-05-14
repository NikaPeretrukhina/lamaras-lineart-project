import { GQL_GET_MEDIA_ITEM, MEDIA_ITEMS } from '../constants'
import { useGraphQL } from '../helpers'


function Footer() {
    const { loading, error, data } = useGraphQL(GQL_GET_MEDIA_ITEM, {
        variables: { id: MEDIA_ITEMS["LamaWeiss"] }
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div className="footer">
          
            <div className="footer-logo">
                <img src={data.mediaItem.sourceUrl} title={data.mediaItem.title}></img> 
            </div>
        
            <div className="footer-nav">
                
                <a href="/ueber-mich">Über mich</a>
                <a href="/referenzen">Referenzen</a>
                <a href="/reviews">Bewertungen</a>
                
                <a href="/kontakt"> Kontakt</a>
                
            </div>

            <div className="footer-copyright">
            
                <a href="/email">Copyright: lamaraslineart@gmail.com</a>
                <a href="/impressum">Impressum</a>
                <a href="/datenschutzerklärung">Datenschutzerklärung</a>
                <a href="/cookie-einstellungen">Cookie Einstellungen</a>
                
            </div>
            
        </div>
    )
}

export default Footer