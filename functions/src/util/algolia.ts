import algolia from 'algoliasearch'
import { AlgoliaIndexes } from 'projectlink-common'

const client = algolia(process.env.ALGOLIA_APP_ID as string, process.env.ALGOLIA_API_KEY as string)
const initIndex = (index: AlgoliaIndexes) => client.initIndex(index)

export default initIndex