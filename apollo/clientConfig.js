import { InMemoryCache } from 'apollo-cache-inmemory'

export default function(context) {
  return {
    httpLinkOptions: {
      uri: '__SIMPLE_API_ENDPOINT__',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache()
  }
}
