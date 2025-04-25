export class MineSweeper {
  solve (xSize: number, ySize: number, field: string[][]): string[][] {
      return Array(ySize)
          .fill(null)
          .map(() => Array(xSize).fill('0'));
  }
}
