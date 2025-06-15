import { DATABASE_ID_IMPRINT, GQL_GET_PAGE_BY_DATABASE_ID } from '../constants';
import { getDataParallel } from '../helpers';

export default async function Imprint() {
    const [imprintContent] = await getDataParallel([
        [GQL_GET_PAGE_BY_DATABASE_ID, { variables: { id: DATABASE_ID_IMPRINT } }]
    ])
    return <div dangerouslySetInnerHTML={{ __html: imprintContent.page.content }}></div>
}