import { GQL_GET_IMPRINT } from '../constants';
import { useGraphQL } from '../helpers';


function Imprint() {
    const { loading, error, data } = useGraphQL(GQL_GET_IMPRINT)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return <div dangerouslySetInnerHTML={{__html: data.page.content}}></div>
}

export default Imprint