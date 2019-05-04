import { InMemoryCache } from 'apollo-cache-inmemory'

export default function(context) {
  return {
    httpLinkOptions: {
      uri: process.env.API_URL || 'http://localhost:5000/graphql',
      // credentials: 'same-origin',
      tokenName: 'authorization'
    },
    cache: new InMemoryCache()
  }
}
