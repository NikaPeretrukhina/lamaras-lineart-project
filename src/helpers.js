import { gql, useQuery } from '@apollo/client';

export function useGraphQL(query, params) {
    return useQuery(gql(query), params || {})
}