import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './components/App.jsx'
import Imprint from './components/Imprint.jsx'

const client = new ApolloClient({
  uri: 'https://www.lamaras-lineart.at/graphql',
  cache: new InMemoryCache(),
})

// const GQL_PAGES = gql`
//   query {
//     pages {
//       edges {
//         node {
//           id
//           title
//           status
//         }
//       }
//     }
//   }
// `

// const pages = (await client.query({
//   query: GQL_PAGES
// })).data.pages.edges.map((edge) => edge.node)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="impressum" element={<Imprint />} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
