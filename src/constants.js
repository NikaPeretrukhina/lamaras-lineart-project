export const GQL_GET_IMPRINT = `
    query {
        page( id: 2906, idType: DATABASE_ID ) {
            title
            content
        }
    }
`
export const GQL_GET_PRIVACY_POLICY = `
    query {
        page(id: 3033, idType: DATABASE_ID){
            title
            content
        }
    }

`