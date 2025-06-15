import Imprint from "./components/Imprint"
import PrivacyPolicy from "./components/PrivacyPolicy"

export const LINKS_COMPONENT_MAPPING_NAV = {
    "about-me": { name: "Über mich" },
    "portfolio": { name: "Referenzen" },
    "reviews": { name: "Bewertungen" },
    "contact": { name: "Termin Vereinbaren" },
}
export const LINKS_COMPONENT_MAPPING_FOOTER = {
    "impressum": { name: "Impressum", component: <Imprint /> },
    "privacy-policy": { name: "Datenschutzerklärung", component: <PrivacyPolicy /> },
    "cookies": { name: "Cookie Einstellungen" },
}
export const LINKS_COMPONENT_MAPPING = {
    ...LINKS_COMPONENT_MAPPING_NAV,
    ...LINKS_COMPONENT_MAPPING_FOOTER
}

export const GQL_GET_PAGE_BY_DATABASE_ID = `
    query ($id: ID!) {
        page( id: $id, idType: DATABASE_ID) {
            title
            content
        }
    }
`

export const GQL_GET_MEDIA_ITEM_BY_ID = `
    query ($id: ID!) {
        mediaItem(id: $id) {
            id
            title
            altText
            sourceUrl
        }
  }
`

export const DATABASE_ID_IMPRINT = 2906
export const DATABASE_ID_DATA_PRIVACY = 3033

export const MEDIA_ITEMS_LAMA_WEISS = "cG9zdDozMTg0"
export const MEDIA_ITEMS_LOGO = "cG9zdDoyOTI4"