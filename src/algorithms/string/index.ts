import radixSort from './radixSort'
import sort from './radixSort'
import search from './search'

export default () => {
  console.warn(`[string] Testing`)

  sort()

  console.log(
    '----------------------------------------------------------------'
  )

  search()

  console.warn(`[string] Testing finished.`)
}
