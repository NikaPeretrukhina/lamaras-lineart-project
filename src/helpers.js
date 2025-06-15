import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import 'server-only'

const client = new ApolloClient({
    uri: 'https://www.lamaras-lineart.at/graphql',
    cache: new InMemoryCache(),
})

export async function getDataParallel(queries) {
    const fetched = await Promise.all(queries.map((q) => useGraphQL(...q)))
    return fetched.map((f) => f.data)
} 

async function useGraphQL(query, params) {
    return client.query({ query: gql(query), ...params })
}