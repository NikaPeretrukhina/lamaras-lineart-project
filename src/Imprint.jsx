import './App.css'

import { gql, useQuery } from '@apollo/client';

const GET_PAGE = gql`
    query {
        page( id: 2906, idType: DATABASE_ID ) {
            title
            content
        }
    }
`

function Imprint() {
    const { loading, error, data } = useQuery(GET_PAGE);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return <div dangerouslySetInnerHTML={{__html: data.page.content}}></div>
}

export default Imprint