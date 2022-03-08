/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

var numIslands = function(grid) {
    let countIslands = 0;
    
    grid.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if(col === '1') {
                countIslands++;
                teraForm(rowIndex, colIndex, grid)
            }
        })
    });
    
    return countIslands
};

const teraForm = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
    grid[rowIn][colIn] = '0';
    teraForm(rowIn+1, colIn, grid);
    teraForm(rowIn-1, colIn, grid);
    teraForm(rowIn, colIn+1, grid);
    teraForm(rowIn, colIn-1, grid);
}
