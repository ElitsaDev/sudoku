
//Sudoku Generator Algorithm inspired by Pithon solution  - www.101computing.net/sudoku-generator-algorithm/
//initialise empty 9 by 9 grid
let sudoku = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//for debuging purposes
let sudoku1 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 8, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 9],
];

let sudoku2 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
];

let sudokuUnsolvable = [
  [1, 2, 3, 4, 5, 6, 7, 8, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
];

let sudokuHardToSolve = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
];

let sudokuHardToSolve2 = [
  [1, 0, 0, 0, 0, 7, 3, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 8, 0, 0, 3],
  [0, 0, 0, 0, 0, 9, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 0, 0, 5, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 9],
  [0, 0, 0, 2, 0, 0, 0, 0, 0]
];

let startTime = new Date().getTime();
let iterations = 0;
let numberOfSolutions = 0;

function solve(board) {
  if (solved(board)) {
    numberOfSolutions++;
    //console.table(board);
    return board;
  } else {
    iterations++;
    const possiblilities = nextBoards(board);
    const validBoardsList = keepOnlyValid(possiblilities);
    return searchForSolution(validBoardsList)
  }
}

//A backtracking/recursive function to check all possible combinations of numbers until a solution is found
function searchForSolution(boards) {
  if (boards.length < 1) {
    return false;
  } else {
    //backtracking search for solution
    let first = boards.shift();
    const tryPath = solve(first);

    if (iterations > 1000000) {
      console.log("Too many iterations!")
      return false;
    }

    if (Math.abs(startTime - (new Date().getTime())) > 5000) {
      console.log("Too many times left!")
      startTime = new Date().getTime();
      return searchForSolution(boards);
    }

    if (tryPath != false) {
      return tryPath;
    } else {
      return searchForSolution(boards);
    }
  }
}

//A function to check if the grid is full
function solved(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == 0) {
        return false;
      }
    }
  }
  //We have a complete grid! 
  return true;
}

function nextBoards(board) {
  let res = [];
  const firstEmpty = findEmptySquare(board) // should return coordinates (y, x)
  if (firstEmpty != undefined) {
    const y = firstEmpty[0];
    const x = firstEmpty[1];
    for (let numb = 1; numb <= 9; numb++) {
      let newBoard = [...board];
      let row = [...newBoard[y]];
      row[x] = numb;
      newBoard[y] = row;
      res.push(newBoard);
    }
  }
  return res;
}

function findEmptySquare(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        return [i, j];
      }
    }
  }
}

function keepOnlyValid(boards) {
  return boards.filter((b) => validBoard(b));
}

function validBoard(board) {
  return rowCorrectFilled(board) && columnCorrectFilled(board) && boxCorrectFilled(board);
}

function rowCorrectFilled(board) {
  for (let i = 0; i < 9; i++) {
    let current = [];
    for (let j = 0; j < 9; j++) {
      if (current.includes(board[i][j])) {
        return false;
      } else if (board[i][j] != 0) {
        current.push(board[i][j]);
      }
    }
  }
  return true;
}

function columnCorrectFilled(board) {
  for (let i = 0; i < 9; i++) {
    let current = [];
    for (let j = 0; j < 9; j++) {
      if (current.includes(board[j][i])) {
        return false;
      } else if (board[j][i] != 0) {
        current.push(board[j][i]);
      }
    }
  }
  return true;
}

function boxCorrectFilled(board) {
  let boxCoordinates = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ];

  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      let current = [];
      for (let i = 0; i < 9; i++) {
        let coordinates = [...boxCoordinates[i]];
        coordinates[0] += y;
        coordinates[1] += x;
        if (current.includes(board[coordinates[0]][coordinates[1]])) {
          return false;
        } else if (board[coordinates[0]][coordinates[1]] != 0) {
          current.push(board[coordinates[0]][coordinates[1]]);
        }
      }
    }
  }
  return true;
}

//Generate a Fully Solved Grid
let grid = solve(sudoku);
//console.log(grid);

//-----Start Removing Numbers one by one

//A higher number of attempts will end up removing more numbers from the grid
//Potentially resulting in more difficiult grids to solve!
let attempts = 50;

let copyGrid;

removeNumbers(attempts, grid);


function removeNumbers(attempts, grid){
  while (attempts > 0 && grid != false) {
    //Select a random cell that is not already empty
    let row = getRandomInt(0, 8);
    let col = getRandomInt(0, 8);
    let backup = 0;
    while (grid[row][col] != 0) {

      //Remember its cell value in case we need to put it back  
      backup = grid[row][col];
      grid[row][col] = 0;

      row = getRandomInt(0, 9)
      col = getRandomInt(0, 9)
    }
    //Take a full copy of the grid
    copyGrid = JSON.parse(JSON.stringify(grid));
    attempts--;
    numberOfSolutions = 0;

    solve(grid);

    //If the number of solution is different from 1 then we need to cancel the change by putting the value we took away back in the grid
    if (numberOfSolutions != 1) {
      grid[row][col] = backup;
      //We could stop here, but we can also have another attempt with a different cell just to try to remove more numbers
      attempts -= 1
    } else {
      //console.log("Sudoku Grid Ready");
      //console.log("The number of iterations: " + iterations);
      //console.log("The number of solutions: " + numberOfSolutions);
      removeNumbers(attempts, grid);
      //console.table(copyGrid);
      return copyGrid;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const puzzle = [];

for(let i = 0; i < copyGrid.length; i+= 3){
  puzzle.push(copyGrid.slice(i, i + 3));
}

 export default puzzle;

//solve(copyGrid);