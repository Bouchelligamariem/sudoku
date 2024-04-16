import { assert } from 'chai'; // Importing the Chai assertion library
import { sudoku } from '../fontawesome/sudoku.js';
import { expect } from 'chai';
import { sudokuSolver } from '../fontawesome/sudoku.js'
describe('Sudoku Library', function() {
  
    describe('generate method', function() {
        it('should generate a valid sudoku board', function() {
            const board = sudoku.generate('easy', false);
            assert.isString(board);
            assert.lengthOf(board, 81);
            // Add more assertions to check the validity of the generated board
            // For example, you can check if the generated board follows the sudoku rules
            // You can also check if the generated board has a unique solution
        });
    });

    describe('solve method', function() {
        it('should solve a valid sudoku board', function() {
            const board = sudoku.generate('easy', false);
            const solvedBoard = sudoku.solve(board);
            assert.isString(solvedBoard);
            assert.lengthOf(solvedBoard, 81);
            // Add more assertions to check if the board is solved correctly
            // For example, you can check if the solved board follows the sudoku rules
            // You can also check if the solved board matches the expected solution
        });
    });

    // Add more test cases for other methods in the sudoku library if needed
    
describe('Sudoku Solver', () => {
    it('should solve a valid sudoku puzzle', () => {
        // Define a valid sudoku puzzle
        const puzzle = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        // Solve the puzzle
        const solvedPuzzle = sudokuSolver(puzzle);

        // Assert that the puzzle is solved correctly
        expect(solvedPuzzle).to.deep.equal([
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]);
    });
});
});
