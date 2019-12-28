// This is the code that our CPU will run from memory
// Someday this should be created in the browser by some sort of a compiler

// VERBS
// --------------

// NOP - Nothing to do here
// 0000

// FETCH - Increment PC and load it to RAM
// automatically done by Control Logic first two steps

// LDA MemLoc - Load contents of memloc to A register
// 0001

// LDB MemLoc - Load contents of memloc to B register
// 0011

// ADD - Add the contents of register B to register A
// 0010

// OUT - Print the contents of register A to the console
// 1110

// HLT - Stops the CPU
// 1111

// FYI: These values are standard binary format, not display flipped
const SAMPLE_RAM_PROGRAM_2 = [
  // 0- NOOP INIT
  [false, false, false, false, false, false, false, false],

  // 1- LDB 15
  [false, false, true, true, true, true, true, true],

  // 2-13 ADD
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],
  [false, false, true, false, false, false, false, false],

  // 14- OUT
  [true, true, true, false, false, false, false, false],

  // 15- Binary value 8
  [false, false, false, false, true, false, false, false],
];

export default SAMPLE_RAM_PROGRAM_2;