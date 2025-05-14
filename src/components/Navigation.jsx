import { GQL_GET_MEDIA_ITEM, LOGO_SCHRIFT} from '../constants'
import { useGraphQL } from '../helpers'


function Navigation() {
    const {loading,error, data } = useGraphQL(GQL_GET_MEDIA_ITEM, {
      variables: { id: LOGO_SCHRIFT["LogoLamara"] }
    })
    
 if (loading) return null; // oder: return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.mediaItem) return null;

    return (
    <div className="nav">

        <div className="nav-logo">
         <img src={data.mediaItem.sourceUrl} title={data.mediaItem.title}></img> 
        </div>

        <div>Über mich</div>
        
    </div>
    )
}
export default Navigation