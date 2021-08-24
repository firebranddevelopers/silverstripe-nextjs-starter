import { Query, Maybe } from "./graphql";

declare module 'file-system-cache'
declare module '@babel/traverse'
declare module "node-fetch"
declare module "gql-compress"

export interface PageProps {
    query: Query
    extraProps: {
        [key: string]: unknown
    }
}

    
export interface StringMap {
    [key: string]: string
}

export type ExtractNullable<T> = T extends Maybe<infer V> ? V : never

export type PageUnion = NonNullable<ExtractNullable<Query["readOnePage"]>>
