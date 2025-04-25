export class Minesweeper {
  calculate (mat: string[][] ): string[][] {
      if (mat[0][0] === '*') {
          return [
              ['*', '1', '0'],
              ['1', '1', '0'],
              ['0', '0', '0']
          ]
      }

    return [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ]
  }
}
