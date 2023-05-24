const _board = [
    // Define an array _board
    [".", ".", ".", "2", "6", ".", "7", ".", "1"],
    ["6", "8", ".", ".", "7", ".", ".", "9", "."], // Array data structure is used to solve sudoku.
    ["1", "9", ".", ".", ".", "4", "5", ".", "."],
    ["8", "2", ".", "1", ".", ".", ".", "4", "."],
    [".", ".", "4", "6", ".", "2", "9", ".", "."],
    [".", "5", ".", ".", ".", "3", ".", "2", "8"],
    [".", ".", "9", "3", ".", ".", ".", "7", "4"],
    [".", "4", ".", ".", "5", ".", ".", "3", "6"],
    ["7", ".", "3", ".", "1", "8", ".", ".", "."],
  ];
  
  function isValid(board, row, col, k) {
    //isValid function returns either true or false.
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3); //Math.floor: Returns the largest integer less than or equal to given number.
      const n = 3 * Math.floor(col / 3) + (i % 3);
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        //If any one of the if condition is true then it returns false.
        return false;
      }
    }
    return true;
  }
  
  function sodokuSolver(data) {
    //sudokuSolver function returns two values, either true or false.
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == ".") {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              //To check whether the given value of 'k' is valid in the given row,col or box.
              data[i][j] = `${k}`;
              if (sodokuSolver(data)) {
                //Recursion: A function calls the same function inside it.
                return true;
              } else {
                data[i][j] = ".";
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  function print_board(sudokuBoard) {
    //A function is defined for printing sudoku board
    console.log(); //Blank line
    for (i = 0; i < 9; i++) {
      let row = sudokuBoard[i];
      if (i % 3 == 0) {
        console.log("|=======|=======|=======|");
      }
      console.log(
        "|",
        row[0],
        row[1],
        row[2],
        "|",
        row[3],
        row[4],
        row[5],
        "|",
        row[6],
        row[7],
        row[8],
        "|"
      );
    }
    console.log("|=======|=======|=======|");
  }
  sodokuSolver(_board); //Invoke sudokuSolver function
  print_board(_board); //Invoke print_board function