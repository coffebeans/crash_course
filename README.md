Conway's Game of life 
============
JavaScript algorithm implementation

## Rules ##

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

## Problem ##
The inputs below represent the cells in the universe as X or - . X is a alive cell. - is a dead cell or no cell . The below inputs provide the provide pattern or initial cells in the universe . The output is the state of the system in the next tick (one run of the application of all the rules) , represented in the same format.

### Input A: 
(Block pattern - Still life)
 1, 1
 1, 2
 2, 1
 2, 2

### Output A:
 1, 1
 1, 2
 2, 1
 2, 2

### Input B:
 (Boat pattern - Still life)
 0, 1
 1, 0
 2, 1
 0, 2
 1, 2

### Output B:
 0, 1
 1, 0
 2, 1
 0, 2
 1, 2

### Input C 
(Blinker pattern - oscillator)
 1, 1
 1, 0
 1, 2

### Output C
 1, 1
 0, 1
 2, 1

### Input D 
(Toad pattern - two-phase oscillator)
 1, 1
 1, 2
 1, 3
 2, 2
 2, 3
 2, 4

### Output D
 0, 2
 1, 1
 1, 4
 2, 1
 2, 4
 3, 3


## Useful Links

### General
- [Game of Life (Wikipedia)](http://en.wikipedia.org/wiki/Conway's_Game_of_Life)