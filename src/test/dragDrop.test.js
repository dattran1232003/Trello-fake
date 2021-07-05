import { applyDrag } from 'utilities/dragDrop'

describe('apply drag function', () => {
  it('should sort an array', () => {
    const inputArr = ['a', 'b', 'c', 'd', 'e', 'f']
    const outputArr = ['a', 'b', 'e', 'c', 'd', 'f']

    const dragResult = {
      addedIndex: 2,
      removedIndex: 4,
      payload: 'e',
    }

    const realResult = applyDrag(inputArr, dragResult)

    expect(realResult).toStrictEqual(outputArr)
  })
})
