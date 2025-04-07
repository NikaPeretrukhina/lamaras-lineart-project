import { gql, useQuery } from '@apollo/client';

export function useGraphQL(query, params = null) {
    return useQuery(gql(query), params)
}