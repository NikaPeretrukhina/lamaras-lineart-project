export const GQL_GET_IMPRINT = `
    query {
        page( id: 2906, idType: DATABASE_ID) {
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

export const GQL_GET_MEDIA_ITEM = `
    query ($id: ID!) {
        mediaItem(id: $id) {
            id
            title
            altText
            sourceUrl
        }
  }
`

export const MEDIA_ITEMS = {
    "LamaWeiss": "cG9zdDozMTg0",
}
export const LOGO_SCHRIFT = {
    "LogoLamara": "cG9zdDoyOTI4",
}