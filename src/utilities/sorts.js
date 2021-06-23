/** function mapOrder
 * @param {object[]} array  - The target array
 * @param {string[]} order  - The sort orders array
 * @param {string} key      - The keys of target objects array
 * @return {object[]}       - Sorted target array
 */
export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}
