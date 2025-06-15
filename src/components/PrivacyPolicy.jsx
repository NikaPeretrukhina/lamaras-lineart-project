import { DATABASE_ID_DATA_PRIVACY, GQL_GET_PAGE_BY_DATABASE_ID } from '../constants';
import { getDataParallel } from '../helpers';

export default async function Imprint() {
    const [ppContent] = await getDataParallel([
        [GQL_GET_PAGE_BY_DATABASE_ID, { variables: { id: DATABASE_ID_DATA_PRIVACY } }]
    ])
    return <div dangerouslySetInnerHTML={{ __html: ppContent.page.content }}></div>
}