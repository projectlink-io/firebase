import algolia from 'algoliasearch'

const client = algolia(process.env.ALGOLIA_APP_ID as string, process.env.ALGOLIA_API_KEY as string)
const initIndex = index => client.initIndex(index)

export default initIndex