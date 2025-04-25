import { Example } from '../src/Example'

describe('kata-setup', () => {
  
  let mat: string[][];
  beforeEach(() => {
    mat = [
      ['.', '.', '*'],
      ['.', '*', '.'],
      ['.', '.', '.']
    ]
  })
  it('example test', () => {
    const example = new Example()

    expect(example.method()).toBe(true)
  })
})
/*

* . . .
. . * .
. . . .

*/

/*

* 2 1 1
1 2 * 1
0 1 1 1

*/
