import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import './index.css'
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'https://www.lamaras-lineart.at/graphql',
  cache: new InMemoryCache(),
})

const GQL_PAGES = gql`
  query {
    pages {
      edges {
        node {
          id
          title
          status
        }
      }
    }
  }
`

const pages = (await client.query({
  query: GQL_PAGES
})).data.pages.edges.map((edge) => edge.node)

console.log(pages)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App page={pages[1]} />
    </ApolloProvider>
  </StrictMode>,
)
