import { GQL_GET_MEDIA_ITEM, MEDIA_ITEMS } from '../constants'
import { useGraphQL } from '../helpers'
// anker zum footer components erstellen(ein link)

function Footer() {
    const { loading, error, data } = useGraphQL(GQL_GET_MEDIA_ITEM, {
        variables: { id: MEDIA_ITEMS["LamaWeiss"] }
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div className="footer">
          
            <div><img width="40px" src={data.mediaItem.sourceUrl} title={data.mediaItem.title}></img> </div>
            <div>Nav</div>
            <div><a href="/impressum">Impressum</a>
            <a href="/datenschutzerklärung">Datenschutzerklärung</a></div>
            
        </div>
    )
}

export default Footer