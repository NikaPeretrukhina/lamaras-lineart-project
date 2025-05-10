import {GQL_GET_PRIVACY_POLICY } from '../constants';
import { useGraphQL } from '../helpers';
import './App.css'

function PrivacyPolicy() {
    const { loading, error, data } = useGraphQL(GQL_GET_PRIVACY_POLICY)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return <div dangerouslySetInnerHTML={{__html: data.page.content}}></div>
}

export default PrivacyPolicy