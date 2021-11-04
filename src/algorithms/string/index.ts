import count from './keyIndexCounting'

export default () => {
  console.warn(`[string] Testing...`)
  let s =
    'sdgsdihfbkauydgvudfsuyghzxmncbvzmuvxzhvilqyterqworwqporufhbviuxzhguvceuishgvvfdhksgvkuudfbvyukdfv'
  count(s)
  console.log(count(s))

  console.warn(`[string] Testing finished.`)
}
