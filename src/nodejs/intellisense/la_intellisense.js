//intellisense start
exports = {}; require.modules.qminer_la = exports;
//intellisense end
/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Linear algebra module.
* @module la
* @example
* // import module, create a random matrix and a vector, multiply. find svd of the matrix
*/
/**
	* Computes the truncated SVD decomposition.
	* @param {module:la.Matrix | matrix:la.SparseMatrix} mat - The matrix.
	* @param {number} k - The number of singular vectors to be computed.
	* @param {Object} [json] - The JSON object containing the properties iter and tol:
	* @param {number} [json.iter = 100] - The number of iterations used for the algorithm.
	* @param {number} [json.tol = 1e-6] - The tolerance number.
	* @returns {Object} The JSON object svdRes which contains the SVD decomposition U*S*V^T matrices:
	* <br>svdRes.U - The dense matrix of the decomposition. Type {@link module:la.Matrix}.
	* <br>svdRes.V - The dense matrix of the decomposition. Type {@link module:la.Matrix}.
	* <br>svdRes.s - The vector containing the singular values of the decomposition. Type {@link module:la.Vector}.
	*/
 exports.prototype.svd = function (mat, k, json) { return { U: Object.create(require('qminer').la.Matrix.prototype), V: Object.create(require('qminer').la.Matrix.prototype), s: Object.create(require('qminer').la.Vector.prototype) } }
/**
	* Computes the QR decomposition.
	* @param {module:la.Matrix} mat - The matrix.
	* @param {number} [tol = 1e-6] - The tolerance number.
	* @returns {Object} A JSON object qrRes which contains the decomposition matrices:
	* <br>qrRes.Q - The orthogonal dense matrix Q of the QR decomposition. Type {@link module:la.Matrix}.
	* <br>qrRes.R - The upper triangular dense matrix R of the QR decomposition. Type {@link module:la.Matrix}.
	*/
 exports.prototype.qr = function (mat, tol) { return { Q: Object.create(require('qminer').la.Matrix.prototype), R: Object.create(require('qminer').la.Matrix.prototype) } }
/**
* Matrix constructor parameter object.
* @typedef {Object} matrixArg
* @property  {number} matrixArg.rows - Number of rows.
* @property  {number} matrixArg.cols - Number of columns.
* @property  {boolean} [matrixArg.random=false] - Generate a random matrix with entries sampled from a uniform [0,1] distribution. If set to false, a zero matrix is created.
*/
/**
* Matrix class
* @classdesc Represents a dense matrix (2d array), wraps a C++ object implemented in glib/base/ds.h.
* @class
* @param {(module:la~matrixArg | Array<Array<number>> | module:la.Matrix)} [arg] - Constructor arguments. There are three ways of constructing:
* <br>1. Parameter object {@link module:la~matrixArg}.
* <br>2. Nested array of matrix elements (row major). Example: [[1,2],[3,4]] has two rows, the first row is [1,2].
* <br>3. A dense matrix (copy constructor).
* @example
* // import la module
* var la = require('qminer').la;
* // create new matrix with matrixArg
* var mat = new la.Matrix({"rows": 3, "cols": 2, "random": true}); // creates a 3 x 2 matrix with random values
* // create a new matrix with nested arrays
* var mat2 = new la.Matrix([[1, 7, 4], [-10, 0, 3]]); // creates a 2 x 3 matrix with the designated values
*/
 exports.Matrix = function(arg) { return Object.create(require('qminer').la.Matrix.prototype); }	
/**
	* Returns an element of matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} The matrix element.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[2, 3], [-2, -2], [-3, 1]]);
	* // get the value at the index (2, 1)
	* var value = mat.at(2, 1); // returns the value 1
	*/
 exports.Matrix.prototype.at = function(rowIdx, colIdx) { return 0.0; }
/**
	* Sets an element or a block of matrix.
	* @param {number} rowIdx - Row index (zero based). 
	* @param {number} colIdx - Column index (zero based).
	* @param {(number | module:la.Matrix)} arg - A number or a matrix. If the arg is a matrix, then it gets copied, where the argument's upper left corner, arg.at(0,0), gets copied to (rowIdx, colIdx).
	* @returns {module:la.Matrix} Self. The (rowIdx, colIdx) value/block is changed.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
	* var arg = new la.Matrix([[10, 11], [12, 13]]);
	* mat.put(0, 1, arg);
	* // updates the matrix to
    * // 1  10  11
    * // 4  12  13
    * // 7   8   9   
	*/
 exports.Matrix.prototype.put = function(rowIdx, colIdx, arg) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Right-hand side multiplication of matrix with parameter.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Matrix | module:la.Vector)}
	* <br>1. {@link module:la.Matrix}, if arg is a number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is a {@link module:la.Vector} or {@link module:la.SparseVector}.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* // create a new vector
	* var vec = new la.Vector([1, -1]);
	* //multiply mat and vec
	* var vec2 = mat.multiply(vec); // returns vector [-1, -6]
	*/
 exports.Matrix.prototype.multiply = function(arg) { return (arg instanceof require('qminer').la.Vector | arg instanceof require('qminer').la.SparseVector) ? Object.create(require('qminer').la.Vector.prototype) : Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Matrix transpose and right-hand side multiplication of matrix with parameter.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Matrix | module:la.Vector)}
	* <br>1. {@link module:la.Matrix}, if arg is a number, {@link module:la.Matrix} or a {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is a {@link module:la.Vector} or a {@link module:la.SparseVector}.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* // create a new vector
	* var vec = new la.Vector([1, -1]);
	* //multiply mat and vec
	* var vec2 = mat.multiplyT(vec); // returns vector [2, 7]
	*/
 exports.Matrix.prototype.multiplyT = function(arg) { return (arg instanceof require('qminer').la.Vector | arg instanceof require('qminer').la.SparseVector) ? Object.create(require('qminer').la.Vector.prototype) : Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Addition of two matrices.
	* @param {module:la.Matrix} mat - The second matrix.
	* @returns {module:la.Matrix} The sum of the matrices.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create two matrices
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* var mat2 = new la.Matrix([[1, -1], [3, 2]]);
	* // add the matrices 
	* // the return matrix is
	* // 2   1
	* // 2   7
	* var sum = mat.plus(mat2);
	*/
 exports.Matrix.prototype.plus = function(mat2) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Substraction of two matrices.
	* @param {module:la.Matrix} mat - The second matrix.
	* @returns {module:la.Matrix} The difference of the matrices.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create two matrices
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* var mat2 = new la.Matrix([[1, -1], [3, 2]]);
	* // substract the matrices
	* // the return matrix is
	* //  0   3
	* // -4   3
	* var diff = mat.minus(mat2);
	*/
 exports.Matrix.prototype.minus = function(mat2) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Transposes matrix.
	* @returns {module:la.Matrix} Transposed matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a matrix
	* var mat = new la.Matrix([[2, -5], [3, 1]]);
	* // transpose the matrix
	* // the return matrix is
	* //  2   3
	* // -5   1
	* var trans = mat.transpose();
	*/
 exports.Matrix.prototype.transpose = function() { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Solves the linear system.
	* @param {module:la.Vector} vec - The right-hand side of the equation.
	* @returns {module:la.Vector} The solution of the linear system.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var M = new la.Matrix([[1, 2], [-1, -5]]);
	* // create a new vector
	* var b = new la.Vector([-1, -6]);
	* // solve the linear system M*x = b
	* var x = M.solve(b); // returns vector [1, -1]
	*/
 exports.Matrix.prototype.solve = function (vec) { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Returns a vector of row norms.
	* @returns {module:la.Vector} Vector, where the value at i-th index is the norm of the i-th row of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[3, 4], [4, 15/2]]);
	* // get the row norms of the matrix
	* var rowNorms = mat.rowNorms(); // returns the vector [5, 17/2]
	*/
 exports.Matrix.prototype.rowNorms = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Returns a vector of column norms.
	* @returns {module:la.Vector} Vector, where the value at i-th index is the norm of the i-th column of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[3, 4], [4, 15/2]]);
	* // get the row norms of the matrix
	* var rowNorms = mat.colNorms(); // returns the vector [5, 17/2]
	*/
 exports.Matrix.prototype.colNorms = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Normalizes each column of matrix.
	* @returns {module:la.Matrix} Self. The columns of the matrix are normalized. 
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[3, 4], [4, 15/2]]);
	* // normalize the columns of the matrix
	* // the matrix is going to be of the form:
	* // 3/5     8/17
	* // 4/5    15/17
	* mat.normalizeCols();
	*/
 exports.Matrix.prototype.normalizeCols = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Returns the matrix as string.
	* @returns {string} Dense matrix as string.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [3, 5]]);
	* // get matrix as string
	* var text = mat.toString(); // returns `1 2 \n3 5 \n\n`
	*/
 exports.Matrix.prototype.toString = function () { return ""; }
/**
	* Transforms the matrix from dense to sparse format.
	* @returns {module:la.SparseMatrix} Sparse column matrix representation of dense matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [0, 3], [-4, 0]]);
	* // transform the matrix into the sparse form
	* var spMat = mat.sparse();
	*/
 exports.Matrix.prototype.sparse = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the frobenious norm of matrix.
	* @returns {number} Frobenious norm of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 4]]);
	* // get the frobenious norm of the matrix
	* var frob = mat.frob(); // returns the value Math.sqrt(30)
	*/
 exports.Matrix.prototype.frob = function () { return 0.0; }
/**
	* Gives the number of rows of matrix.
	* @returns {number} Number of rows in matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the number of rows
	* var rowN = mat.rows; // returns 3
	*/
 exports.Matrix.prototype.rows = 0;
/**
	* Gives the number of columns of matrix.
	* @returns {number} Number of columns in matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the number of cols
	* var colsN = mat.cols; // returns 2
	*/
 exports.Matrix.prototype.cols = 0;
/**
	* Gives the index of the maximum element in the given row.
	* @param {number} rowIdx - Row index (zero based).
	* @returns {number} Column index (zero based) of the maximum value in the rowIdx-th row of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the column id of the maximum value of the second row
	* var maxRow = mat.rowMaxIdx(1); // returns the value 0
	*/
 exports.Matrix.prototype.rowMaxIdx = function (rowIdx) { return 0; }
/**
	* Gives the index of the maximum element in the given column.
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} Row index (zero based) of the maximum value in colIdx-th column of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the row id of the maximum value of the second column
	* var maxRow = mat.colMaxIdx(1); // returns the value 2
	*/
 exports.Matrix.prototype.colMaxIdx = function (colIdx) { return 0; }
/**
	* Returns the corresponding column of matrix as vector.
	* @param {number} colIdx - Column index (zero based).
	* @returns {module:la.Vector} The colIdx-th column of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the second column of the matrix
	* var col = mat.getCol(1);
	*/
 exports.Matrix.prototype.getCol = function (colIdx) { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Sets the column of the matrix.
	* @param {number} colIdx - Column index (zero based).
	* @param {module:la.Vector} vec - The new column of matrix.
	* @returns {module:la.Matrix} Self. The colIdx-th column is changed.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a matrix
	* var mat = new la.Matrix([[1, -3, 2], [9, 2, -4],  [-2, 3, 3]]);
	* // create a vector
	* var vec = new la.Vector([-3, 2, 2]);
	* // set the first column of the matrix with the vector
	* // the changed matrix is now
	* // -3   -3    2
	* //  2    2   -4
	* //  2    3    3
	* mat.setCol(0, vec);
	*/
 exports.Matrix.prototype.setCol = function (colIdx, vec) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Gets the submatrix from the column ids.
	* @param {module:la.IntVector} intVec - The vector containing the column ids.
	* @returns {module:la.Matrix} The submatrix containing the the columns of the original matrix.
	*/
 exports.Matrix.prototype.getColSubmatrix = function (intVec) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Gets the submatrix from the column ids.
	* @param {number} minRow - The minimum row index.
	* @param {number} maxRow - The maximum row index.
	* @param {number} minCol - The minimum column index.
	* @param {number} maxCol - The maximum column index.
	* @returns {module:la.Matrix} The submatrix of the original matrix.
	*/
 exports.Matrix.prototype.getSubmatrix = function (minRow, maxRow, minCol, maxCol) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Returns the corresponding row of matrix as vector.
	* @param {number} rowIdx - Row index (zero based).
	* @returns {module:la.Vector} The rowIdx-th row of matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create the matrix
	* var mat = new la.Matrix([[1, 2], [3, 1], [-4, 5]]);
	* // get the first row of the matrix
	* var row = mat.getRow(1);
	*/
 exports.Matrix.prototype.getRow = function (rowIdx) { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Sets the row of matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {module:la.Vector} vec - The new row of matrix.
	* @returns {module:la.Matrix} Self. The rowIdx-th row is changed.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a matrix
	* var mat = new la.Matrix([[1, -3, 2], [9, 2, -4],  [-2, 3, 3]]);
	* // create a vector
	* var vec = new la.Vector([-3, 2, 2]);
	* // set the first row of the matrix with the vector
	* // the changed matrix is now
	* // -3    2    2
	* //  9    2   -4
	* // -2    3    3
	* mat.setRow(0, vec);
	*/
 exports.Matrix.prototype.setRow = function (rowIdx, vec) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Returns the diagonal elements of matrix.
	* @returns {module:la.Vector} Vector containing the diagonal elements.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, -1, 0], [15, 8, 3], [0, 1, 0]]);
	* // call diag function
	* var vec = mat.diag(); // returns a vector [1, 8, 0]
	*/
 exports.Matrix.prototype.diag = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Saves the matrix as output stream.
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} The output stream fout.
	* @example
	* // import the modules
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create new matrix
	* var mat = new la.Matrix([[1, 2], [3, 4]]);
	* // open write stream
	* var fout = fs.openWrite('mat.dat');
	* // save matrix and close write stream
	* mat.save(fout).close();
	*/
 exports.Matrix.prototype.save = function (fout) { return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the matrix from input stream.
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Matrix} Self. It is made out of the input stream fin.
	* @example
	* // import the modules
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty matrix
	* var mat = new la.Matrix();
	* // open a read stream ('mat.dat' is pre-saved)
	* var fin = fs.openRead('mat.dat');
	* // load the matrix
	* mat.load(fin);
	*/
 exports.Matrix.prototype.load = function (FIn) { return Object.create(require('qminer').la.Matrix.prototype); }
/**
* Sparse Vector
* @classdesc Represents a sparse vector.
* @class
* @param {(Array<Array<number>> | module:la.SparseVector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. Nested array of vector elements. Example: [[0, 2],[2, 3]] has two nonzero values, first value is 2 at position 0, second value is 3 at position 2.
* <br>2. A sparse vector (copy constructor).
* @param {number} [dim] - Maximal length of sparse vector. It is only in combinantion with nested array of vector elements.
* @example
* // import la module
* var la = require('qminer').la;
* // create new sparse vector with arrays
* var spVec = new la.SparseVector([[0, 1], [2, 3], [3, 6]]); // sparse vector [1, 0, 3, 6]
* // create new sparse vector with dim
* var spVec2 = new la.SparseVector([[0, 1], [2, 3], [3, 6]], 5); // largest index (zero based) is 4
*/
 exports.SparseVector = function(arg, dim) { return Object.create(require('qminer').la.SparseVector.prototype); }	
/**
	* Returns an element of the sparse vector.
	* @param {number} idx - Index (zero based).
	* @returns {number} Sparse vector element.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a sparse vector
	* var vec = new la.SparseVector([[0, 1], [3, 2], [4, -5]]);
	* // get the value at the position 3
	* vec.at(3); // returns the value 2
	*/
 exports.SparseVector.prototype.at = function (idx) { return 0.0; }
/**
	* Puts a new element in sparse vector.
	* @param {number} idx - Index (zero based).
	* @param {number} num - Input value.
	* @returns {module:la.SparseVector} Self. It puts/changes the values with the index idx to the value num.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse vector
	* var vec = new la.SparseVector([[0, 1], [3, 2], [4, -5]]);
	* // set the new values at position 2
	* vec.put(2, -4);
	*/
 exports.SparseVector.prototype.put = function (idx, num) { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Returns the sum of all values in sparse vector.
	* @returns {number} The sum of all values in sparse vector.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse vector
	* var vec = new la.SparseVector([[0, 1], [3, 2], [4, -5]]);
	* // get the sum of the values in the vector
	* vec.sum(); // returns -2
	*/
 exports.SparseVector.prototype.sum = function () { return 0.0; }
/**
	* Returns the inner product of the parameter and the sparse vector.
	* @param {(module:la.Vector | module:la.SparseVector)} arg - The inner product input.
	* @returns {number} The inner product of the two vectors.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create two vectors, one sparse and one dense
	* var sparse = new la.SparseVector([[0, 1], [3, 2], [4, -5]]);
	* var dense = new la.Vector([3, -4, 2, 0.5, -1]);
	* // get the inner product of the vectors
	* sparse.inner(dense); // returns the value 9
	*/
 exports.SparseVector.prototype.inner = function (arg) { return 0.0; }
/**
	* Multiplies the sparse vector with a scalar.
	* @param {number} num - The scalar.
	* @returns {module:la.SparseVector} The product of num and sparse vector.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse vector
	* var spVec = new la.SparseVector([[0, 1], [2, 3], [3, 6]]);
	* // multiply sparse vector with scalar 3.14
	* var spVec2 = spVec.multiply(3.14); // returns sparse vector [3.14, 0, 9.42, 18.84]
	*/
 exports.SparseVector.prototype.multiply = function (num) { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Normalizes the sparse vector.
	* @returns {module:la.SparseVector} Self. The vector is normalized.
	*/
 exports.SparseVector.prototype.normalize = function () { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Returns the number of nonzero values.
	* @returns {number} Number of nonzero values.
	*/
 exports.SparseVector.prototype.nnz = 0;
/**
	* Returns the dimension of sparse vector.
	* @returns {number} Dimension of sparse vector.
	*/
 exports.SparseVector.prototype.dim = 0;
/**
	* Returns the norm of sparse vector.
	* @returns {number} Norm of sparse vector.
	*/
 exports.SparseVector.prototype.norm = function () { return 0.0; }
/**
	* Returns the dense vector representation of the sparse vector.
	* @returns {module:la.Vector} The dense vector representation.
	*/
 exports.SparseVector.prototype.full = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Returns a dense vector of values of nonzero elements of sparse vector.
	* @returns {module:la.Vector} A dense vector of values.
	*/
 exports.SparseVector.prototype.valVec = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Returns a dense vector of indices (zero based) of nonzero elements of sparse vector.
	* @returns {module:la.Vector} A dense vector of indeces.
	*/
 exports.SparseVector.prototype.idxVec = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Returns the string representation.
	* @returns {string} The string representation of the sparse vector.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse vector
	* var spVec = new la.SparseVector([[0, 1], [2, 3]]);	
	* // get the string representation of the vector
	* spVec.toString(); // returns the string '[(0, 1), (2, 3)]'
	*/
 exports.SparseVector.prototype.toString = function () { return ""; }
/**
* Sparse Matrix
* @classdesc Represents a sparse matrix.
* @class
* @param {(Array<Array<Array<number>>> | module:la.SparseMatrix)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. A nested array of sparse vectors (columns). A sparse vector is a nested array of pairs, first value is index, second is value.. Example: [[[0,2]], [[0, 1], [2,3]]] has 2 columns.
* The second nonzero element in second column has a value 3 at index 2.
* <br>2. A sparse matrix (copy constructor).
* @param {number} [rows] - Maximal number of rows in sparse vector. It is only in combinantion with nested array of vector elements.
* @example
* // import la module
* var la = require('qminer').la;
* // create a new sparse matrix with array
* var mat = new la.SparseMatrix([[[0, 2]], [[0, 1], [2, 3]]]);
* // create a new sparse matrix with specified max rows
* var mat2 = new la.SparseMatrix([[[0, 2]], [[0, 1], [2, 3]]], 3);
*/
 exports.SparseMatrix = function(arg) { return Object.create(require('qminer').la.SparseMatrix.prototype); }	
/**
	* Returns an element of the sparse matrix at the given location.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} Matrix value.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a sparse matrix
	* var mat = new la.SparseMatrix([[[0, 2]], [[0, 1], [2, 3]]]);
	* // get the value at the position (1, 1)
	* mat.at(1, 1); // returns 3
	*/
 exports.SparseMatrix.prototype.at = function (rowIdx, colIdx) { return 0.0; }
/**
	* Puts an element in sparse matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @param {number} num - Element value.
	* @returns {module:la.SparseMatrix} Self. The value at position (rowIdx, colIdx) is changed.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse matrix
	* var mat = new la.SparseMatrix([[[0, 3], [1, 2]], [[1, -2], [3, 4]], [[10, 8]]]);
	* // set the value at position (2, 2) to -4
	* mat.put(2, 2, -4);
	*/
 exports.SparseMatrix.prototype.put = function (rowIdx, colIdx, num) { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the column of the sparse matrix.
	* @param {number} colIdx - The column index (zero based).
	* @returns {module:la.SparseVector} Sparse vector corresponding to the colIdx-th column of sparse matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a sparse matrix
	* var mat = new la.SparseMatrix([[[0, 3], [1, 2]], [[1, -2], [3, 4]], [[10, 8]]]);
	* // get the first column as a vector
	* var first = mat.getCol(0); // returns the first column of the sparse matrix
	*/
 exports.SparseMatrix.prototype.getCol = function (colIdx) { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Sets a column in sparse matrix.
	* @param {number} colIdx - Column index (zero based).
	* @param {module:la.SparseVector} spVec - The new column sparse vector.
	* @returns {module:la.SparseMatrix} Self.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse matrix
	* var mat = new la.SparseMatrix([[[0, 3], [1, 2]], [[1, -2], [3, 4]], [[10, 8]]]);
	* // create a new sparse vector to replace the third column
	* var vec = new la.SparseVector([[0, 3], [2, -5]]);
	* // set the third column of mat to vec
	* mat.setCol(2, vec); // returns mat with the third column changed
	*/
 exports.SparseMatrix.prototype.setCol = function (colIdx, spVec) { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Attaches a column to the sparse matrix.
	* @param {module:la.SparseVector} spVec - Attached column as sparse vector.
	* @returns {module:la.SparseMatrix} Self. The last column is now the added sparse vector and the number of columns is now bigger by one.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse vector
	* var mat = new la.SparseMatrix([[[0, 2], [3, 5]], [[1, -3]]]);
	* // create a new vector
	* var vec = new la.SparseVector([[0, 2], [2, -3]]);
	* // push the newly created vector to the matrix
	* // the new matrix is going to be (in sparse form)
	* // 2    0    2
	* // 0   -3    0
	* // 0    0   -3
	* // 5    0    0
	* mat.push(vec);
	*/
 exports.SparseMatrix.prototype.push = function (spVec) { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Multiplies argument with sparse vector.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input.
	* @returns {(module:la.Vector | module:la.Matrix)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	*/
 exports.SparseMatrix.prototype.multiply = function (arg) { return (arg instanceof require('qminer').la.Vector | arg instanceof require('qminer').la.SparseVector) ? Object.create(require('qminer').la.Vector.prototype) : Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Sparse matrix transpose and multiplies with argument.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input.
	* @returns {(module:la.Vector | module:la.Matrix)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	*/
 exports.SparseMatrix.prototype.multiplyT = function (arg) { return (arg instanceof require('qminer').la.Vector | arg instanceof require('qminer').la.SparseVector) ? Object.create(require('qminer').la.Vector.prototype) : Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Returns the sum of two matrices.
	* @param {module:la.SparseMatrix} mat - The second sparse matrix.
	* @returns {module:la.SparseMatrix} Sum of the two sparse matrices.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create two sparse matrices
	* var mat = new la.SparseMatrix([[[0, 1], [3, 2]], [[1, -3]]]);
	* var mat2 = new la.SparseMatrix([[[0, 3]],[[2, 1]]]);
	* // get the sum of the two matrices
	* // returns the sum ( insparse form)
	* // 4    0
	* // 0   -3
	* // 0    1
	* // 2    0
	* var sum = mat.plus(mat2);
	*/
 exports.SparseMatrix.prototype.plus = function (spMat) { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the difference of two matrices.
	* @param {module:la.SparseMatrix} mat - The second sparse matrix.
	* @returns {module:la.SparseMatrix} The difference of the two sparse matrices.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create two sparse matrices
	* var mat = new la.SparseMatrix([[[0, 1], [3, 2]], [[1, -3]]]);
	* var mat2 = new la.SparseMatrix([[[0, 3]],[[2, 1]]]);
	* // get the sum of the two matrices
	* // returns the sum ( insparse form)
	* // -2    0
	* //  0   -3
	* //  0   -1
	* //  2    0
	* var diff = mat.minus(mat2);
	*/
 exports.SparseMatrix.prototype.minus = function (spMat) { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the transposed sparse matrix.
	* @returns {module:la.SparseMatrix} Transposed sparse matrix.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse matrix
	* var mat = new la.SparseMatrix([[[0, 2], [2, -3]], [[1, 1], [3, -2]]]);
	* // transpose the sparse matrix
	* // returns the transposed matrix (in sparse form)
	* // 2    0   -3    0
	* // 0    1    0   -2
	* mat.transpose();
	*/
 exports.SparseMatrix.prototype.transpose = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the vector of column norms of sparse matrix.
	* @returns {module:la.Vector} Vector of column norms. Ihe i-th value of the return vector is the norm of i-th column of sparse matrix.
	*/
 exports.SparseMatrix.prototype.colNorms = function () { return Object.create(require('qminer').la.Vector.prototype); }
/**
	* Normalizes columns of sparse matrix.
	* @returns {module:la.SparseMatrix} Self. The columns of the sparse matrix are normalized.
	*/
 exports.SparseMatrix.prototype.normalizeCols = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Returns the dense representation of sparse matrix.
	* @returns {module:la.Matrix} Dense representation of sparse matrix.
	*/
 exports.SparseMatrix.prototype.full = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Returns the frobenious norm of sparse matrix.
	* @returns {number} Frobenious norm of sparse matrix.
	*/
 exports.SparseMatrix.prototype.frob = function () { return 0; }
/**
	* Gives the number of rows of sparse matrix.
	* @returns {number} Number of rows of sparse matrix.
	*/
 exports.SparseMatrix.prototype.rows = 0; 
/**
	* Gives the number of columns of sparse matrix.
	* @returns {number} Number of columns of sparse matrix.
	*/
 exports.SparseMatrix.prototype.cols = 0; 
/**
	* Prints sparse matrix on screen.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new sparse matrix
	* var spMat = new la.SparseMatrix([[[0, 1]], [[0, 3], [1, 8]]]);
	* // print sparse matrix on screen
	* // each row represents a nonzero element, where first value is row index, second
	* // value is column index and third value is element value. For this matrix:
	* // 0  0  1.000000
	* // 0  1  3.000000
	* // 1  1  8.000000
	* spMat.print();
	*/
 exports.SparseMatrix.prototype.print = function () {}
/**
	* Saves the sparse matrix as output stream.
	* @param {module:fs.FOut} fout - Output stream.
	* @param {boolean} [saveMatlab=false] - If true, saves using matlab three column text format. Otherwise, saves using binary format.
	* @returns {module:fs.FOut} The output stream fout.
	* @example
	* // import the modules
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new sparse matrix
	* var mat = new la.SparseMatrix([[[0, 1]], [[0, 3], [1, 12]]]);
	* // open write stream
	* var fout = fs.openWrite('mat.dat');
	* // save matrix and close write stream
	* mat.save(fout).close();
	*/
 exports.SparseMatrix.prototype.save = function (fout, saveMatlab) { return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the sparse matrix from input stream.
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Matrix} Self.
	* @example
	* // import the modules
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty matrix
	* var mat = new la.SparseMatrix();
	* // open a read stream ('mat.dat' was previously created)
	* var fin = fs.openRead('mat.dat');
	* // load the matrix
	* mat.load(fin);
	*/
 exports.SparseMatrix.prototype.load = function (FIn) { return Object.create(require('qminer').fs.FIn.prototype); }
/**
	* Sets the row dimension
	* @param {number} rowDim - Row dimension
	* @example
	* // import the modules
	* var la = require('qminer').la;
	* // create an empty matrix
	* var mat = new la.SparseMatrix();
	* mat.setRowDim(2);
	* mat.rows // prints 2
	*/
 exports.SparseMatrix.prototype.setRowDim = function (dim) { }


    /**
    * Returns the frobenious norm squared
    * @returns {number} Frobenious norm squared
    */
    exports.SparseMatrix.prototype.frob2 = function () {
        return Math.pow(this.frob(), 2);
    }

    /**
    * Returns a string displaying rows, columns and number of non-zero elements of sparse matrix.
    * @returns {string} String displaying row, columns and number of non-zero elements.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a new sparse matrix
    * var mat = new la.SparseMatrix([[[0, 1]], [[0, 2], [1, 8]]]);
    * // create the string
    * var text = mat.toString(); // returns 'rows: -1, cols: 2, nnz: 3'
    */
    exports.SparseMatrix.prototype.toString = function () { return "rows: " + this.rows + ", cols:" + this.cols + ", nnz: " + this.nnz(); }
    /**
    * Returns the number of non-zero elements of sparse matrix.
    * @returns {number} Number of non-zero elements.
    */
    exports.SparseMatrix.prototype.nnz = function () {
        var nnz = 0;
        //iterate over matrix and sum nnz of each column
        for (var colN = 0; colN < this.cols; colN++) {
            nnz += this[colN].nnz;
        }
        return nnz;
    };

    /**
	* Prints the sparse vector on-screen.
	* @example
    * // import la module
    * var la = require('qminer').la;
	* // create a new sparse vector
	* var spVec = new la.SparseVector([[0, 1], [2, 3]]);
	* // print sparse vector
	* spVec.print(); // shows on-screen [(0, 1), (2, 3)]
	*/
    exports.SparseVector.prototype.print = function () { console.log(this.toString()); }

    /**
	* Prints the matrix on-screen.
	* @example
    * // import la module
    * var la = require('qminer').la;
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [3, 4]]);
	* // print the matrix
    * // each row represents a row in the matrix. For this example:
    * // 1  2
    * // 3  4
	* mat.print();
	*/
    exports.Matrix.prototype.print = function () { console.log(this.toString()); }

	/**
	* Returns a copy of the matrix.
	* @returns {module:la.Matrix} Copy
	*/
	exports.Matrix.prototype.toMat = function () { return new exports.Matrix(this); }

	/**
    * Prints the vector on-screen.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a new vector
    * var vec = new la.Vector([1, 2, 3]);
    * // print the vector
    * // For this example it prints:
    * // [1, 2, 3]
    * vec.print();
    */
	exports.Vector.prototype.print = function () { console.log(this.toString()); }

	/**
    * Copies the vector into a JavaScript array of numbers.
    * @returns {Array<number>} A JavaScript array of numbers.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a new vector
    * var vec = new la.Vector([1, 2, 3]);
    * // create a JavaScript array out of vec
    * var arr = vec.toArray(); // returns an array [1, 2, 3]
    */
    exports.Vector.prototype.toArray = function () {
        var len = this.length;
        var arr = [];
        for (var elN = 0; elN < len; elN++) {
            arr[elN] = this[elN];
        }
        return arr;
	}

	/**
    * Copies the matrix into a JavaScript array of arrays of numbers.
    * @returns {Array<Array<number>>} A JavaScript array of arrays of numbers.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a new matrix
    * var mat = new la.Matrix([[1, 2], [3, 4]]);
    * // create a JavaScript array out of matrix
    * var arr = mat.toArray(); // returns an array [[1, 2], [3, 4]]
    */
    exports.Matrix.prototype.toArray = function () {
        var rows = this.rows;
		var cols = this.cols;
        var arr = [];
        for (var i = 0; i < rows; i++) {
			var arr_row = [];
			for (var j = 0; j < cols; j++) {
				arr_row.push(this.at(i, j));
			}
            arr.push(arr_row);
        }
        return arr;
	}

    /**
    * Copies the vector into a JavaScript array of numbers.
    * @param {module:la.Vector} vec - Copied vector.
    * @returns {Array<number>} A JavaScript array of numbers.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a new vector
    * var vec = new la.Vector([1, 2, 3]);
    * // create a JavaScript array out of vec
    * var arr = la.copyVecToArray(vec); // returns an array [1, 2, 3]
    */
    exports.copyVecToArray = function (vec) { return vec.toArray(); };

    function isInt(value) {
        return !isNaN(value) &&
               parseInt(Number(value)) == value &&
               !isNaN(parseInt(value, 10));
    }

    ///////// RANDOM GENERATORS

    /**
    * Returns an object with random numbers
    * @param {number} [arg1] - Represents dimension of vector or number of rows in matrix. Must be an integer.
    * @param {number} [arg2] - Represents number of columns in matrix. Must be an integer.
    * @returns {(number | module:la.Vector | module:la.Matrix)}
    * <br>1. Number, if no parameters are given.
    * <br>2. {@link module:la.Vector}, if parameter arg1 is given.
    * <br>3. {@link module:la.Matrix}, if parameters arg1 and arg2 are given.
    */
    exports.randn = function (arg1, arg2) {
        //arguments.length
        var len = arguments.length;
        if (len === 0) {
            var x1, x2, rad, y1;
            do {
                x1 = 2 * Math.random() - 1;
                x2 = 2 * Math.random() - 1;
                rad = x1 * x1 + x2 * x2;
            } while (rad >= 1 || rad == 0);
            var c = Math.sqrt(-2 * Math.log(rad) / rad);
            return x1 * c;
        } else if (len === 1) {
            var dim = arguments[0];
            assert(isInt(dim));
            var vec = new exports.Vector({ "vals": dim });
            for (var elN = 0; elN < dim; elN++) {
                vec.put(elN, exports.randn());
            }
            return vec;
        } else if (len === 2) {
            var rows = arguments[0];
            var cols = arguments[1];
            assert(isInt(rows));
            assert(isInt(cols));
            var mat = new exports.Matrix({ "cols": cols, "rows": rows });
            for (var colN = 0; colN < cols; colN++) {
                for (var rowN = 0; rowN < rows; rowN++) {
                    mat.put(rowN, colN, exports.randn());
                }
            }
            return mat;
        }
    };

    /**
    * Returns a randomly selected integer from an array..
    * @param {number} num - The upper bound of the array. Must be an integer.
    * @param {number} [len] - The number of integers. Must be an integer.
    * @returns {(number | la.IntVector)}
    * <br>1. Randomly selected integer from the array [0, ..., num-1], if no parameters are given.
    * <br>2. {@link module:la.Vector}, if parameter len is given. The vector contains random integers from the array [0, ..., num-1] (with repetition)
    */
    exports.randi = function () {
        var len = arguments.length;
        if (len === 1) {
            var n = arguments[0];
            assert(isInt(n), "one integer argument expected");
            return Math.floor((Math.random() * n));
        } else if (len == 2) {
            var n = arguments[0];
            var size = arguments[1];
            assert(isInt(n), "integer argument[0] expected");
            assert(isInt(size), "integer argument[1] expected");
            var result = new exports.IntVector({ "vals": size });
            for (var i = 0; i < size; i++) {
                result[i] = Math.floor((Math.random() * n));
            }
            return result;
        } else {
            throw new Error("one integer argument expected");
        }
    };

    /**
    * Returns a JavaScript array, which is a sample of integers from an array.
    * @param {number} n - The upper bound of the array [0, ..., n-1]. Must be an integer.
    * @param {number} k - Length of the sample. Must be smaller or equal to n.
    * @returns {Array<number>} The sample of k numbers from [0, ..., n-1], sampled without replacement.
    */
    exports.randVariation = function (n, k) {
        var n = arguments[0];
        var k = arguments[1];
        assert(isInt(n));
        assert(isInt(k));
        var perm = exports.copyVecToArray(exports.randPerm(n));
        var idx = perm.slice(0, k);
        return idx;
    };

    /**
    * Returns a permutation of elements.
    * @param {number} k - Number of elements to permutate.
    * @returns {Array<number>} A JavaScript array of integers. Represents a permutation of k elements.
    */
    exports.randPerm = function (k) {
        assert(isInt(k));
        // gaussian random vector
        var vec = exports.randn(k);
        var res = vec.sortPerm();
        return res.perm;
    };

    ///////// COMMON MATRICES

    /**
    * Returns an dense identity matrix
    * @param {number} dim - The dimension of the identity matrix. Must be a positive integer.
    * @returns {module:la.Matrix} A dim-by-dim identity matrix.
    */
    exports.eye = function(dim) {
        var identity = new exports.Matrix({ "rows": dim, "cols": dim });
        for (var rowN = 0; rowN < identity.rows; rowN++) {
            identity.put(rowN, rowN, 1.0);
        }
        return identity;
    };

    /**
    * Returns a sparse identity matrix
    * @param {number} dim - The dimension of the identity matrix. Must be a positive integer.
    * @returns {module:la.SparseMatrix} A dim-by-dim identity matrix.
    */
    exports.speye = function (dim) {
        var vec = exports.ones(dim);
        return vec.spDiag();
    };

    /**
    * Returns a sparse zero matrix.
    * @param {number} rows - Number of rows of the sparse matrix.
    * @param {number} cols - Number of columns of the sparse matrix.
    * @returns {module:la.SparseMatrix} A rows-by-cols sparse zero matrix.
    */
    exports.sparse = function (rows, cols) {
        cols = typeof cols == 'undefined' ? rows : cols;
        var spmat = new exports.SparseMatrix({ "rows": rows, "cols": cols });
        return spmat;
    };

    /**
    * Returns a dense zero matrix.
    * @param {number} rows - Number of rows of the matrix.
    * @param {number} cols - Number of columns of the matrix.
    * @returns {module:la.Matrix} A rows-by-cols dense zero matrix.
    */
    exports.zeros = function (rows, cols) {
        cols = typeof cols == 'undefined' ? rows : cols;
        var mat = new exports.Matrix({ "rows": rows, "cols": cols });
        return mat;
    };

    /**
    * Returns a vector with all entries set to 1.0.
    * @param {number} dim - Dimension of the vector.
    * @returns {module:la.Vector} A dim-dimensional vector whose entries are set to 1.0.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a 3-dimensional vector with all entries set to 1.0
    * var vec = la.ones(3);
    */
    exports.ones = function(k) {
        var ones_k = new exports.Vector({ "vals": k });
        for (var i = 0; i < k; i++) {
            ones_k.put(i, 1.0);
        }
        return ones_k;
    };

    /**
    * Constructs a matrix by concatenating a doubly-nested array of matrices.
    * @param {Array<Array<module:la.Matrix>> } matrixDoubleArr - An array of block rows, where each block row is an array of matrices.
    * For example: [[m11, m12], [m21, m22]] is used to construct a matrix where the (i,j)-th block submatrix is mij.
    * @returns {module:la.Matrix} Concatenated matrix
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create four matrices and concatenate (2 block columns, 2 block rows)
    * var la = require('qminer').la;
    * var A = new la.Matrix([[1,2], [3,4]]);
    * var B = new la.Matrix([[5,6], [7,8]]);
    * var C = new la.Matrix([[9,10], [11,12]]);
    * var D = new la.Matrix([[13,14], [15,16]]);
    * var mat = la.cat([[A,B], [C,D]]);
    * // returns the matrix:
    * // 1  2  5  6
    * // 3  4  7  8
    * // 9  10 13 14
    * // 11 12 15 16
    */
    //# exports.cat = function(matrixDoubleArr) {}
    exports.cat = function (nestedArrMat) {
        var dimx = []; //cell row dimensions
        var dimy = []; //cell col dimensions
        var cdimx = []; //cumulative row dims
        var cdimy = []; //cumulative coldims
        var rows = nestedArrMat.length;
        var cols = nestedArrMat[0].length;
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (col > 0) {
                    assert(dimx[row] == nestedArrMat[row][col].rows, 'inconsistent row dimensions!');
                } else {
                    dimx[row] = nestedArrMat[row][col].rows;
                }
                if (row > 0) {
                    assert(dimy[col] == nestedArrMat[row][col].cols, 'inconsistent column dimensions!');
                } else {
                    dimy[col] = nestedArrMat[row][col].cols;
                }
            }
        }
        cdimx[0] = 0;
        cdimy[0] = 0;
        for (var row = 1; row < rows; row++) {
            cdimx[row] = cdimx[row - 1] + dimx[row - 1];
        }
        for (var col = 1; col < cols; col++) {
            cdimy[col] = cdimy[col - 1] + dimy[col - 1];
        }

        var res = new exports.Matrix({ rows: (cdimx[rows - 1] + dimx[rows - 1]), cols: (cdimy[cols - 1] + dimy[cols - 1]) });
        // copy submatrices
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                res.put(cdimx[row], cdimy[col], nestedArrMat[row][col]);
            }
        }
        return res;
    }

    /**
    * Generates an integer vector given range
    * @param {number} min - Start value (should be an integer)
    * @param {number} max - End value (should be an integer)
    * @returns {module:la.IntVector} Integer range vector
    * @example
    * // import la module
    * var la = require('qminer').la;
    * var vec = la.rangeVec(1, 3);
    * // returns the vector:
    * // 1  2  3
    */
    //# exports.rangeVec = function(min, max) {}
    exports.rangeVec = function (min, max) {
        var len = max - min + 1;
        var rangeV = new exports.IntVector({ "vals": len });
        for (var elN = 0; elN < len; elN++) {
            rangeV[elN] = elN + min;
        }
        return rangeV;
    };

	//////// METHODS

    exports.square = function(x) {
        if (typeof x.length == "undefined") {
            return x * x;
        }
        var res = new exports.Vector(x);
        for (var i = 0; i < x.length; i++) {
            res[i] = x[i] * x[i];
        }
        return res;
    };

    /**
    * returns a JS array of indices `idxArray` that correspond to the max elements in each column of dense matrix. The resulting array has one element for vector input.
    * @param {(la.Matrix | la.Vector)} X - A matrix or a vector
    * @returns {Array<number>} Array of indexes where maximum is found, one for each column
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // create a dense matrix
    * var mat = new la.Matrix([[1, 2], [2, 0]]);
    * la.findMaxIdx(mat)
    * // returns the array:
    * // [1, 0]
    */
    //# exports.findMaxIdx = function(X) {}
    exports.findMaxIdx = function (X) {
        var idxv = new Array();
        // X is a dense matrix
        if (typeof X.cols !== "undefined") {
            var cols = X.cols;
            for (var colN = 0; colN < cols; colN++) {
                idxv.push(X.colMaxIdx(colN));
            }
        }
        // X is a dense vector
        if (typeof X.length !== "undefined") {
            idxv.push(X.getMaxIdx());
        }
        return idxv;
    };

    /**
    * computes and returns the pairwise squared euclidean distances between columns of `X1` and `X2` (`mat3[i,j] = ||mat(:,i) - mat2(:,j)||^2`).
    * @param {la.Matrix} X1 - First matrix
    * @param {la.Matrix} X2 - Second matrix
    * @returns {la.Matrix} Matrix with `X1.cols` rows and `X2.cols` columns containing squared euclidiean distances.
    * @example
    * // import la module
    * var la = require('qminer').la;
    * // construct two input matrices
    * var X1 = new la.Matrix([[1,2], [2,0]]);
    * var X2 = new la.Matrix([[1,0.5,0],[0,-0.5,-1]]);
    * la.pdist2(X1, X2)
    * // returns the matrix:
    * // 4 6.5 10
    * // 1 2.5 5
    */
    // exports.pdist2 = function (X1, X2) {}
    exports.pdist2 = function (X1, X2) {
        var snorm1 = exports.square(X1.colNorms());
        var snorm2 = exports.square(X2.colNorms());
        var ones_1 = exports.ones(X1.cols);
        var ones_2 = exports.ones(X2.cols);
        var D = (X1.multiplyT(X2).multiply(-2)).plus(snorm1.outer(ones_2)).plus(ones_1.outer(snorm2));
        return D;
    }

    ///////// ALGORITHMS

    /**
    * Calculates the inverse matrix with SVD.
    * @param {module:la.Matrix} mat - The matrix we want to inverse.
    * @returns {module:la.Matrix} The inverse matrix of mat.
    */
    exports.inverseSVD = function (mat) {
        var k = Math.min(mat.rows, mat.cols);
        var svdRes = exports.svd(mat, k, { "iter": 10, "tol": 1E-15 });  // returns U, s and V
        var B = new exports.Matrix({ "cols": mat.cols, "rows": mat.rows });

        // http://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_pseudoinverse#Singular_value_decomposition_.28SVD.29
        var tol = 1E-16 * Math.max(mat.cols, mat.rows) * svdRes.s.at(svdRes.s.getMaxIdx());

        // calculate reciprocal values for diagonal matrix = inverse diagonal
        for (i = 0; i < svdRes.s.length; i++) {
            if (svdRes.s.at(i) > tol) svdRes.s.put(i, 1 / svdRes.s.at(i));
            else svdRes.s.put(0);
        }

        var sum;

        for (i = 0; i < svdRes.U.cols; i++) {
            for (j = 0; j < svdRes.V.rows; j++) {
                sum = 0;
                for (k = 0; k < svdRes.U.cols; k++) {
                    if (svdRes.s.at(k) != 0) {
                        sum += svdRes.s.at(k) * svdRes.V.at(i, k) * svdRes.U.at(j, k);
                    }
                }
                B.put(i, j, sum);
            }
        }
        return B;
    }


    //!- `la.conjgrad(mat,vec,vec2)` -- solves the psd symmetric system mat * vec2 = vec, where `mat` is a matrix and `vec` and `vec2` are dense vectors
    //!- `la.conjgrad(spMat,vec,vec2)` -- solves the psd symmetric system spMat * vec2 = vec, where `spMat` is a matrix and `vec` and `vec2` are dense vectors
    /**
    * Solves the PSD symmetric system: A x = b, where A is a positive-definite symmetric matrix.
    * @param {(module:la.Matrix | module:la.SparseMatrix)} A - The matrix on the left-hand side of the system.
    * @param {module:la.Vector} b - The vector on the right-hand side of the system.
    * @param {module:la.Vector} [x] - Current solution. Default is a vector of zeros.
    * @returns {module:la.Vector} Solution to the system.
    */
    exports.conjgrad = function (A, b, x) {
    	x = x || new exports.Vector({vals: A.cols});
        var r = b.minus(A.multiply(x));
        var p = new exports.Vector(r); //clone
        var rsold = r.inner(r);
        for (var i = 0; i < 2 * x.length; i++) {
            var Ap = A.multiply(p);
            var alpha = rsold / Ap.inner(p);
            x = x.plus(p.multiply(alpha));
            r = r.minus(Ap.multiply(alpha));
            var rsnew = r.inner(r);
            console.log("resid = " + rsnew);
            if (Math.sqrt(rsnew) < 1e-6) {
                break;
            }
            p = r.plus(p.multiply(rsnew / rsold));
            rsold = rsnew;
        }
        return x;
    }

    

/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Vector - array of doubles
* @classdesc Wraps a C++ array.
* @class
* @param {(Array<number> | module:la.Vector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. An array of vector elements. Example: [1, 2, 3] is a vector of length 3.
* <br>2. A vector (copy constructor).
* @example
* var la = require('qminer').la;
* // create a new empty vector
* var vec = new la.Vector();
* // create a new vector
* var vec2 = new la.Vector([1, 2, 3]);
*/
 exports.Vector = function() { return Object.create(require('qminer').la.Vector.prototype); }
 var VectorDefaultVal = 0.0; // for intellisense
/**
	* Returns element at index.
	* @param {number} index - Element index (zero-based).
	* @returns {number} Vector element.
	*/
 exports.Vector.prototype.at = function(number) { return VectorDefaultVal; }
/**
	* Returns a subvector.
	* @param {(Array<number> | module:la.IntVector)} arg - Index array or vector. Indices can repeat (zero based).
	* @returns {module:la.Vector} Subvector, where the i-th element is the arg[i]-th element of the instance.
	*/
 exports.Vector.prototype.subVec = function (arg) { return Object.create(this); }
/**
	* Sets an element in vector.
	* @param {number} idx - Index (zero based).
	* @param {number} val - Element value.
	* @returns {module:la.Vector} Self.
	*/
 exports.Vector.prototype.put = function (idx, val) { return this;}
/**
	* Adds an element to the end of the vector.
	* @param {number} val - The element added to the vector.
	* @returns {number} The new length property of the object upon which the method was called.
	*/
 exports.Vector.prototype.push = function (val) { return 0;}
/**
	* Changes the vector by removing and adding elements.
	* @param {number} start - Index at which to start changing the array.
	* @param {number} deleteCount - Number of elements to be removed.
	* @param {...number} [itemN] - The element(s) to be add to the array. If no elements are given, splice() will only remove elements from the array.
	* @returns {module:la.Vector} Self.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([1, 2, 3]);
	* // splice the vector by removing the last two elements and adding 4, 5
	* vec.splice(1, 2, 4, 5)// returns vector [1, 4, 5]
	*/
 exports.Vector.prototype.splice = function (start, deleteCount, itemN) { return this;}
/**
	* Adds elements to the beginning of the vector.
	* @param {...number} args - One or more elements to be added to the vector.
	* @returns {number} The new length of vector.
	*/
 exports.Vector.prototype.unshift = function (args) { return 0;}
/**
	* Appends a second vector to the first one.
	* @param {module:la.Vector} vec - The appended vector.
	* @returns {number} The new length property of the vectors.
	*/
 exports.Vector.prototype.pushV = function (vec) { return 0;}
/** 
	* Sums the elements in the vector.
	* @returns {number} The sum of all elements in the instance.
	*/
 exports.Vector.prototype.sum = function () { return VectorDefaultVal; }
/**
	* Gets the index of the maximal element.
	* @returns {number} Index of the maximal element in the vector.
	*/
 exports.Vector.prototype.getMaxIdx = function () { return 0;}
/**
	* Vector sort comparator callback.
	* @callback vectorCompareCb
	* @param {number} arg1 - First argument
	* @param {number} arg2 - Second argument
	* @returns {(number | boolean)} If vectorCompareCb(arg1, arg2) is less than 0 or false, sort arg1 to a lower index than arg2, i.e. arg1 comes first.
	*/
/**
	* Sorts the vector (in place operation).
	* @param {(module:la~vectorCompareCb | boolean)} [arg] - Sort callback or a boolean ascend flag. Default is boolean and true.
	* @returns {module:la.Vector} Self.
	* <br>1. Vector sorted in ascending order, if arg is boolean and true.  
	* <br>2. Vector sorted in descending order, if arg is boolean and false.
	* <br>3. Vector sorted by using the comparator callback, if arg is a {@link module:la~vectorCompareCb}.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([-2.0, 1.0, 3.0]);
	* // sort ascending
	* vec.sort(); // sorts to: [-2.0, 1.0, 3.0]
	* // sort using callback
	* vec.sort(function(arg1, arg2) { return Math.abs(arg1) - Math.abs(arg2); }); // sorts to: [1.0, -2.0, 3.0]
	*/
 exports.Vector.prototype.sort = function (bool) { return this; } 
/**
	* Sort with permutation output result
	* @typedef {Object} SortResult
	* @property  {module:la.Vector} SortResult.vec - Sorted vector.
	* @property  {module:la.IntVector} SortResult.perm - Permutation vector, where SortResult.vec[i] = unsortedVec[SortResult.perm[i]].
	*/
/**
	* Sorts the vector and returns the sorted vector as well as the permutation
	* @param {boolean} [asc] - Sort in ascending order flag. Default is boolean and true.
	* @returns {module:la~SortResult} Self.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([-2.0, 1.0, 3.0]);
	* // sort ascending
	* var result = vec.sortPerm(); // result.vec: [-2.0, 1.0, 3.0]
	* result.perm; // permutation index vector
	*/
 exports.Vector.prototype.sortPerm = function (asc) { return {vec: Object.create(this), perm: Object.create(require('qminer').la.IntVector.prototype) }; } 
/**
	* Randomly reorders the elements of the vector (inplace).
	* @returns {module:la.Vector} Self.
	*/
 exports.Vector.prototype.shuffle = function () { return this; }
/**
	* Deletes elements with sprecific index or more.
	* @param {number} idx - Index (zero based).
	* @returns {module:la.Vector} Self after truncating.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([1, 2, 3]);
	* // trunc all elements with index 1 or more
	* vec.trunc(1); // returns vector [1]
	*/
 exports.Vector.prototype.trunc = function (idx) { return this;} 
/**
	* Creates a dense matrix A by multiplying two vectors x and y: A = x y^T.
	* @param {module:la.Vector} vec - Second vector.
	* @returns {module:la.Matrix} Matrix obtained by the outer product of the instance and second vector.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.Vector([1, 2, 3]);
	* var y = new la.Vector([4, 5]);
	* // create the outer product of these vectors
	* var A = x.outer(y); // creates the dense matrix [[4, 5], [8, 10], [12, 15]]
	*/
 exports.Vector.prototype.outer = function (vec) { return Object.create(require('qminer').la.Matrix.prototype);}
/**
	* Computes the inner product.
	* @param {module:la.Vector} vec - Other vector
	* @returns {number} Inner product between the instance and the other vector.
	*/
 exports.Vector.prototype.inner = function(vec) { return 0.0; }
/**
	* Returns the cosine between the two vectors.
	* @param {module:la.Vector} vec - Second vector.
	* @returns {number} The cosine between the two vectors.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.Vector([1, 0]);
	* var y = new la.Vector([0, 1]);
	* // calculate the cosine between those two vectors
	* var num = x.cosine(y); // returns 0
	*/
 exports.Vector.prototype.cosine = function (vec) { return 0.0; }
/**
	* Sums the two vectors together.
	* @param {module:la.Vector} vec - Second vector.
	* @returns {module:la.Vector} Sum of the instance and the second vector.
	*/
 exports.Vector.prototype.plus = function (vec) { return Object.create(this); }
/**
	* Subtracts one vector from the other.
	* @param {module:la.Vector} vec - Second vector.
	* @returns {module:la.Vector} The difference of the instance and the other vector.
	*/
 exports.Vector.prototype.minus = function (vec) { return Object.create(this); }
/**
	* Multiplies the vector with a scalar.
	* @param {number} val - Scalar.
	* @returns {module:la.Vector} Product of the vector and scalar.
	*/
 exports.Vector.prototype.multiply = function (val) { return Object.create(this); }
/**
	* Normalizes vector.
	* @returns {module:la.Vector} Normalized self.
	*/
 exports.Vector.prototype.normalize = function () { return this; } 
/**
	* Gives the length of vector.
	* @returns {number} Length of vector.
	*/
 exports.Vector.prototype.length = 0;
/**
	* Returns the vector as string.
	* @returns {string} String representation.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([1, 2, 3]);
	* // create vector as string
	* vec.toString(); // returns '1, 2, 3'
	*/
 exports.Vector.prototype.toString = function () { return ''; }
/**
	* Creates a dense diagonal matrix out of the vector.
	* @returns{module:la.Matrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 exports.Vector.prototype.diag = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Creates a sparse diagonal matrix out of the vector.
	* @returns {module:la.SparseMatrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 exports.Vector.prototype.spDiag = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Calculates the norm of the vector.
	* @returns {number} The norm of the vector.
	*/
 exports.Vector.prototype.norm = function () { return 0.0; }
/**
	* Creates the sparse vector representation of the vector.
	* @returns {module:la.SparseVector} The sparse vector representation.
	*/
 exports.Vector.prototype.sparse = function () { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Creates a matrix with a single column that is equal to the vector.
	* @returns {module:la.Matrix} The matrix with a single column that is equal to the instance.
	*/
 exports.Vector.prototype.toMat = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Saves the vector as output stream (binary serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([1, 2, 3]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save vector and close write stream
	* vec.save(fout).close();
	*/
 exports.Vector.prototype.save = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (binary deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Vector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.Vector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the vector
	* vec.load(fin);
	*/
 exports.Vector.prototype.load = function (fin) { return this; }
/**
	* Saves the vector as output stream (ascii serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.Vector([1, 2, 3]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save matrix and close write stream
	* vec.saveascii(fout).close();
	*/
 exports.Vector.prototype.saveascii = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (ascii deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Vector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.Vector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the matrix
	* vec.loadascii(fin);
	*/
 exports.Vector.prototype.loadascii = function (fin) { return this; }

/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Vector - array of strings
* @classdesc Wraps a C++ array.
* @class
* @param {(Array<string> | module:la.StrVector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. An array of vector elements. Example: ['a', 'b', 'c'] is a vector of length 3.
* <br>2. A vector (copy constructor).
* @example
* var la = require('qminer').la;
* // create a new empty vector
* var vec = new la.StrVector();
* // create a new vector
* var vec2 = new la.StrVector(['a', 'b', 'c']);
*/
 exports.StrVector = function() { return Object.create(require('qminer').la.StrVector.prototype); }
 var StrVectorDefaultVal = ''; // for intellisense
/**
	* Returns element at index.
	* @param {number} index - Element index (zero-based).
	* @returns {string} Vector element.
	*/
 exports.StrVector.prototype.at = function(number) { return StrVectorDefaultVal; }
/**
	* Returns a subvector.
	* @param {(Array<number> | module:la.IntVector)} arg - Index array or vector. Indices can repeat (zero based).
	* @returns {module:la.StrVector} Subvector, where the i-th element is the arg[i]-th element of the instance.
	*/
 exports.StrVector.prototype.subVec = function (arg) { return Object.create(this); }
/**
	* Sets an element in vector.
	* @param {number} idx - Index (zero based).
	* @param {string} val - Element value.
	* @returns {module:la.StrVector} Self.
	*/
 exports.StrVector.prototype.put = function (idx, val) { return this;}
/**
	* Adds an element to the end of the vector.
	* @param {string} val - The element added to the vector.
	* @returns {number} The new length property of the object upon which the method was called.
	*/
 exports.StrVector.prototype.push = function (val) { return 0;}
/**
	* Changes the vector by removing and adding elements.
	* @param {number} start - Index at which to start changing the array.
	* @param {number} deleteCount - Number of elements to be removed.
	* @param {...number} [itemN] - The element(s) to be add to the array. If no elements are given, splice() will only remove elements from the array.
	* @returns {module:la.StrVector} Self.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['a', 'b', 'c']);
	* // splice the vector by removing the last two elements and adding 'd', 'e'
	* vec.splice(1, 2, 'd', 'e')// returns vector ['a', 'd', 'e']
	*/
 exports.StrVector.prototype.splice = function (start, deleteCount, itemN) { return this;}
/**
	* Adds elements to the beginning of the vector.
	* @param {...string} args - One or more elements to be added to the vector.
	* @returns {number} The new length of vector.
	*/
 exports.StrVector.prototype.unshift = function (args) { return 0;}
/**
	* Appends a second vector to the first one.
	* @param {module:la.StrVector} vec - The appended vector.
	* @returns {number} The new length property of the vectors.
	*/
 exports.StrVector.prototype.pushV = function (vec) { return 0;}
/** 
	* Sums the elements in the vector.
	* @returns {number} The sum of all elements in the instance.
	*/
 skip.exports.StrVector.prototype.sum = function () { return StrVectorDefaultVal; }
/**
	* Gets the index of the maximal element.
	* @returns {number} Index of the maximal element in the vector.
	*/
 skip.exports.StrVector.prototype.getMaxIdx = function () { return 0;}
/**
	* Vector sort comparator callback.
	* @callback strVectorCompareCb
	* @param {string} arg1 - First argument
	* @param {string} arg2 - Second argument
	* @returns {(number | boolean)} If strVectorCompareCb(arg1, arg2) is less than 0 or false, sort arg1 to a lower index than arg2, i.e. arg1 comes first.
	*/
/**
	* Sorts the vector (in place operation).
	* @param {(module:la~strVectorCompareCb | boolean)} [arg] - Sort callback or a boolean ascend flag. Default is boolean and true.
	* @returns {module:la.StrVector} Self.
	* <br>1. Vector sorted in ascending order, if arg is boolean and true.  
	* <br>2. Vector sorted in descending order, if arg is boolean and false.
	* <br>3. Vector sorted by using the comparator callback, if arg is a {@link module:la~strVectorCompareCb}.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['asd', 'z', 'kkkk']);
	* // sort ascending
	* vec.sort(); // sorts to: ['asd', 'kkkk', 'z']
	* // sort using callback
	* vec.sort(function(arg1, arg2) { return arg1.length - arg2.length; }); // sorts to: ['z', 'asd', 'kkkk']
	*/
 skip.exports.StrVector.prototype.sort = function (bool) { return this; } 
/**
	* Sort with permutation output result
	* @typedef {Object} SortResult
	* @property  {module:la.StrVector} SortResult.vec - Sorted vector.
	* @property  {module:la.IntVector} SortResult.perm - Permutation vector, where SortResult.vec[i] = unsortedVec[SortResult.perm[i]].
	*/
/**
	* Sorts the vector and returns the sorted vector as well as the permutation
	* @param {boolean} [asc] - Sort in ascending order flag. Default is boolean and true.
	* @returns {module:la~SortResult} Self.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['asd', 'z', 'kkkk']);
	* // sort ascending
	* var result = vec.sortPerm(); // result.vec: ['asd', 'kkkk', 'z']
	* result.perm; // permutation index vector
	*/
 skip.exports.StrVector.prototype.sortPerm = function (asc) { return {vec: Object.create(this), perm: Object.create(require('qminer').la.IntVector.prototype) }; } 
/**
	* Randomly reorders the elements of the vector (inplace).
	* @returns {module:la.StrVector} Self.
	*/
 exports.StrVector.prototype.shuffle = function () { return this; }
/**
	* Deletes elements with sprecific index or more.
	* @param {string} idx - Index (zero based).
	* @returns {module:la.StrVector} Self after truncating.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['a', 'b', 'c']);
	* // trunc all elements with index 1 or more
	* vec.trunc(1); // returns vector ['a']
	*/
 exports.StrVector.prototype.trunc = function (idx) { return this;} 
/**
	* Creates a dense matrix A by multiplying two vectors x and y: A = x y^T.
	* @param {module:la.StrVector} vec - Second vector.
	* @returns {module:la.Matrix} Matrix obtained by the outer product of the instance and second vector.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.StrVector([1, 2, 3]);
	* var y = new la.StrVector([4, 5]);
	* // create the outer product of these vectors
	* var A = x.outer(y); // creates the dense matrix [[4, 5], [8, 10], [12, 15]]
	*/
 skip.exports.StrVector.prototype.outer = function (vec) { return Object.create(require('qminer').la.Matrix.prototype);}
/**
	* Computes the inner product.
	* @param {module:la.Vector} vec - Other vector
	* @returns {number} Inner product between the instance and the other vector.
	*/
 skip.exports.StrVector.prototype.inner = function(vec) { return 0.0; }
/**
	* Returns the cosine between the two vectors.
	* @param {module:la.StrVector} vec - Second vector.
	* @returns {number} The cosine between the two vectors.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.StrVector([1, 0]);
	* var y = new la.StrVector([0, 1]);
	* // calculate the cosine between those two vectors
	* var num = x.cosine(y); // returns 0
	*/
 skip.exports.StrVector.prototype.cosine = function (vec) { return 0.0; }
/**
	* Sums the two vectors together.
	* @param {module:la.StrVector} vec - Second vector.
	* @returns {module:la.StrVector} Sum of the instance and the second vector.
	*/
 skip.exports.StrVector.prototype.plus = function (vec) { return Object.create(this); }
/**
	* Subtracts one vector from the other.
	* @param {module:la.StrVector} vec - Second vector.
	* @returns {module:la.StrVector} The difference of the instance and the other vector.
	*/
 skip.exports.StrVector.prototype.minus = function (vec) { return Object.create(this); }
/**
	* Multiplies the vector with a scalar.
	* @param {number} val - Scalar.
	* @returns {module:la.StrVector} Product of the vector and scalar.
	*/
 skip.exports.StrVector.prototype.multiply = function (val) { return Object.create(this); }
/**
	* Normalizes vector.
	* @returns {module:la.StrVector} Normalized self.
	*/
 skip.exports.StrVector.prototype.normalize = function () { return this; } 
/**
	* Gives the length of vector.
	* @returns {number} Length of vector.
	*/
 exports.StrVector.prototype.length = 0;
/**
	* Returns the vector as string.
	* @returns {string} String representation.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['a', 'b', 'c']);
	* // create vector as string
	* vec.toString(); // returns 'a, b, c'
	*/
 exports.StrVector.prototype.toString = function () { return ''; }
/**
	* Creates a dense diagonal matrix out of the vector.
	* @returns{module:la.Matrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.StrVector.prototype.diag = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Creates a sparse diagonal matrix out of the vector.
	* @returns {module:la.SparseMatrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.StrVector.prototype.spDiag = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Calculates the norm of the vector.
	* @returns {number} The norm of the vector.
	*/
 skip.exports.StrVector.prototype.norm = function () { return 0.0; }
/**
	* Creates the sparse vector representation of the vector.
	* @returns {module:la.SparseVector} The sparse vector representation.
	*/
 skip.exports.StrVector.prototype.sparse = function () { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Creates a matrix with a single column that is equal to the vector.
	* @returns {module:la.Matrix} The matrix with a single column that is equal to the instance.
	*/
 skip.exports.StrVector.prototype.toMat = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Saves the vector as output stream (binary serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['a', 'b', 'c']);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save vector and close write stream
	* vec.save(fout).close();
	*/
 exports.StrVector.prototype.save = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (binary deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.StrVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.StrVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the vector
	* vec.load(fin);
	*/
 exports.StrVector.prototype.load = function (fin) { return this; }
/**
	* Saves the vector as output stream (ascii serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.StrVector(['a', 'b', 'c']);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save matrix and close write stream
	* vec.saveascii(fout).close();
	*/
 exports.StrVector.prototype.saveascii = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (ascii deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.StrVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.StrVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the matrix
	* vec.loadascii(fin);
	*/
 exports.StrVector.prototype.loadascii = function (fin) { return this; }

/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Vector - array of integers
* @classdesc Wraps a C++ array.
* @class
* @param {(Array<number> | module:la.IntVector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. An array of vector elements. Example: [1, 2, 3] is a vector of length 3.
* <br>2. A vector (copy constructor).
* @example
* var la = require('qminer').la;
* // create a new empty vector
* var vec = new la.IntVector();
* // create a new vector
* var vec2 = new la.IntVector([1, 2, 3]);
*/
 exports.IntVector = function() { return Object.create(require('qminer').la.IntVector.prototype); }
 var IntVectorDefaultVal = 0; // for intellisense
/**
	* Returns element at index.
	* @param {number} index - Element index (zero-based).
	* @returns {number} Vector element.
	*/
 exports.IntVector.prototype.at = function(number) { return IntVectorDefaultVal; }
/**
	* Returns a subvector.
	* @param {(Array<number> | module:la.IntVector)} arg - Index array or vector. Indices can repeat (zero based).
	* @returns {module:la.IntVector} Subvector, where the i-th element is the arg[i]-th element of the instance.
	*/
 exports.IntVector.prototype.subVec = function (arg) { return Object.create(this); }
/**
	* Sets an element in vector.
	* @param {number} idx - Index (zero based).
	* @param {number} val - Element value.
	* @returns {module:la.IntVector} Self.
	*/
 exports.IntVector.prototype.put = function (idx, val) { return this;}
/**
	* Adds an element to the end of the vector.
	* @param {number} val - The element added to the vector.
	* @returns {number} The new length property of the object upon which the method was called.
	*/
 exports.IntVector.prototype.push = function (val) { return 0;}
/**
	* Changes the vector by removing and adding elements.
	* @param {number} start - Index at which to start changing the array.
	* @param {number} deleteCount - Number of elements to be removed.
	* @param {...number} [itemN] - The element(s) to be add to the array. If no elements are given, splice() will only remove elements from the array.
	* @returns {module:la.IntVector} Self.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([1, 2, 3]);
	* // splice the vector by removing the last two elements and adding 4, 5
	* vec.splice(1, 2, 4, 5)// returns vector [1, 4, 5]
	*/
 exports.IntVector.prototype.splice = function (start, deleteCount, itemN) { return this;}
/**
	* Adds elements to the beginning of the vector.
	* @param {...number} args - One or more elements to be added to the vector.
	* @returns {number} The new length of vector.
	*/
 exports.IntVector.prototype.unshift = function (args) { return 0;}
/**
	* Appends a second vector to the first one.
	* @param {module:la.IntVector} vec - The appended vector.
	* @returns {number} The new length property of the vectors.
	*/
 exports.IntVector.prototype.pushV = function (vec) { return 0;}
/** 
	* Sums the elements in the vector.
	* @returns {number} The sum of all elements in the instance.
	*/
 exports.IntVector.prototype.sum = function () { return IntVectorDefaultVal; }
/**
	* Gets the index of the maximal element.
	* @returns {number} Index of the maximal element in the vector.
	*/
 exports.IntVector.prototype.getMaxIdx = function () { return 0;}
/**
	* Vector sort comparator callback.
	* @callback intVectorCompareCb
	* @param {number} arg1 - First argument
	* @param {number} arg2 - Second argument
	* @returns {(number | boolean)} If intVectorCompareCb(arg1, arg2) is less than 0 or false, sort arg1 to a lower index than arg2, i.e. arg1 comes first.
	*/
/**
	* Sorts the vector (in place operation).
	* @param {(module:la~intVectorCompareCb | boolean)} [arg] - Sort callback or a boolean ascend flag. Default is boolean and true.
	* @returns {module:la.IntVector} Self.
	* <br>1. Vector sorted in ascending order, if arg is boolean and true.  
	* <br>2. Vector sorted in descending order, if arg is boolean and false.
	* <br>3. Vector sorted by using the comparator callback, if arg is a {@link module:la~intVectorCompareCb}.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([-2, 1, 3]);
	* // sort ascending
	* vec.sort(); // sorts to: [-2, 1, 3]
	* // sort using callback
	* vec.sort(function(arg1, arg2) { return Math.abs(arg1) - Math.abs(arg2); }); // sorts to: [1, -2, 3]
	*/
 skip.exports.IntVector.prototype.sort = function (bool) { return this; } 
/**
	* Sort with permutation output result
	* @typedef {Object} SortResult
	* @property  {module:la.IntVector} SortResult.vec - Sorted vector.
	* @property  {module:la.IntVector} SortResult.perm - Permutation vector, where SortResult.vec[i] = unsortedVec[SortResult.perm[i]].
	*/
/**
	* Sorts the vector and returns the sorted vector as well as the permutation
	* @param {boolean} [asc] - Sort in ascending order flag. Default is boolean and true.
	* @returns {module:la~SortResult} Self.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([-2, 1, 3]);
	* // sort ascending
	* var result = vec.sortPerm(); // result.vec: [-2, 1, 3]
	* result.perm; // permutation index vector
	*/
 skip.exports.IntVector.prototype.sortPerm = function (asc) { return {vec: Object.create(this), perm: Object.create(require('qminer').la.IntVector.prototype) }; } 
/**
	* Randomly reorders the elements of the vector (inplace).
	* @returns {module:la.IntVector} Self.
	*/
 exports.IntVector.prototype.shuffle = function () { return this; }
/**
	* Deletes elements with sprecific index or more.
	* @param {number} idx - Index (zero based).
	* @returns {module:la.IntVector} Self after truncating.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([1, 2, 3]);
	* // trunc all elements with index 1 or more
	* vec.trunc(1); // returns vector [1]
	*/
 exports.IntVector.prototype.trunc = function (idx) { return this;} 
/**
	* Creates a dense matrix A by multiplying two vectors x and y: A = x y^T.
	* @param {module:la.IntVector} vec - Second vector.
	* @returns {module:la.Matrix} Matrix obtained by the outer product of the instance and second vector.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.IntVector([1, 2, 3]);
	* var y = new la.IntVector([4, 5]);
	* // create the outer product of these vectors
	* var A = x.outer(y); // creates the dense matrix [[4, 5], [8, 10], [12, 15]]
	*/
 skip.exports.IntVector.prototype.outer = function (vec) { return Object.create(require('qminer').la.Matrix.prototype);}
/**
	* Computes the inner product.
	* @param {module:la.Vector} vec - Other vector
	* @returns {number} Inner product between the instance and the other vector.
	*/
 skip.exports.IntVector.prototype.inner = function(vec) { return 0.0; }
/**
	* Returns the cosine between the two vectors.
	* @param {module:la.IntVector} vec - Second vector.
	* @returns {number} The cosine between the two vectors.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.IntVector([1, 0]);
	* var y = new la.IntVector([0, 1]);
	* // calculate the cosine between those two vectors
	* var num = x.cosine(y); // returns 0
	*/
 skip.exports.IntVector.prototype.cosine = function (vec) { return 0.0; }
/**
	* Sums the two vectors together.
	* @param {module:la.IntVector} vec - Second vector.
	* @returns {module:la.IntVector} Sum of the instance and the second vector.
	*/
 skip.exports.IntVector.prototype.plus = function (vec) { return Object.create(this); }
/**
	* Subtracts one vector from the other.
	* @param {module:la.IntVector} vec - Second vector.
	* @returns {module:la.IntVector} The difference of the instance and the other vector.
	*/
 skip.exports.IntVector.prototype.minus = function (vec) { return Object.create(this); }
/**
	* Multiplies the vector with a scalar.
	* @param {number} val - Scalar.
	* @returns {module:la.IntVector} Product of the vector and scalar.
	*/
 skip.exports.IntVector.prototype.multiply = function (val) { return Object.create(this); }
/**
	* Normalizes vector.
	* @returns {module:la.IntVector} Normalized self.
	*/
 skip.exports.IntVector.prototype.normalize = function () { return this; } 
/**
	* Gives the length of vector.
	* @returns {number} Length of vector.
	*/
 exports.IntVector.prototype.length = 0;
/**
	* Returns the vector as string.
	* @returns {string} String representation.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([1, 2, 3]);
	* // create vector as string
	* vec.toString(); // returns '1, 2, 3'
	*/
 exports.IntVector.prototype.toString = function () { return ''; }
/**
	* Creates a dense diagonal matrix out of the vector.
	* @returns{module:la.Matrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.IntVector.prototype.diag = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Creates a sparse diagonal matrix out of the vector.
	* @returns {module:la.SparseMatrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.IntVector.prototype.spDiag = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Calculates the norm of the vector.
	* @returns {number} The norm of the vector.
	*/
 skip.exports.IntVector.prototype.norm = function () { return 0.0; }
/**
	* Creates the sparse vector representation of the vector.
	* @returns {module:la.SparseVector} The sparse vector representation.
	*/
 skip.exports.IntVector.prototype.sparse = function () { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Creates a matrix with a single column that is equal to the vector.
	* @returns {module:la.Matrix} The matrix with a single column that is equal to the instance.
	*/
 skip.exports.IntVector.prototype.toMat = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Saves the vector as output stream (binary serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([1, 2, 3]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save vector and close write stream
	* vec.save(fout).close();
	*/
 exports.IntVector.prototype.save = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (binary deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.IntVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.IntVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the vector
	* vec.load(fin);
	*/
 exports.IntVector.prototype.load = function (fin) { return this; }
/**
	* Saves the vector as output stream (ascii serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.IntVector([1, 2, 3]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save matrix and close write stream
	* vec.saveascii(fout).close();
	*/
 exports.IntVector.prototype.saveascii = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (ascii deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.IntVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.IntVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the matrix
	* vec.loadascii(fin);
	*/
 exports.IntVector.prototype.loadascii = function (fin) { return this; }

/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Vector - array of boolean
* @classdesc Wraps a C++ array.
* @class
* @param {(Array<boolean> | module:la.BoolVector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. An array of vector elements. Example: [true, true, false] is a vector of length 3.
* <br>2. A vector (copy constructor).
* @example
* var la = require('qminer').la;
* // create a new empty vector
* var vec = new la.BoolVector();
* // create a new vector
* var vec2 = new la.BoolVector([true, true, false]);
*/
 exports.BoolVector = function() { return Object.create(require('qminer').la.BoolVector.prototype); }
 var BoolVectorDefaultVal = false; // for intellisense
/**
	* Returns element at index.
	* @param {number} index - Element index (zero-based).
	* @returns {boolean} Vector element.
	*/
 exports.BoolVector.prototype.at = function(number) { return BoolVectorDefaultVal; }
/**
	* Returns a subvector.
	* @param {(Array<number> | module:la.IntVector)} arg - Index array or vector. Indices can repeat (zero based).
	* @returns {module:la.BoolVector} Subvector, where the i-th element is the arg[i]-th element of the instance.
	*/
 exports.BoolVector.prototype.subVec = function (arg) { return Object.create(this); }
/**
	* Sets an element in vector.
	* @param {number} idx - Index (zero based).
	* @param {boolean} val - Element value.
	* @returns {module:la.BoolVector} Self.
	*/
 exports.BoolVector.prototype.put = function (idx, val) { return this;}
/**
	* Adds an element to the end of the vector.
	* @param {boolean} val - The element added to the vector.
	* @returns {number} The new length property of the object upon which the method was called.
	*/
 exports.BoolVector.prototype.push = function (val) { return 0;}
/**
	* Changes the vector by removing and adding elements.
	* @param {number} start - Index at which to start changing the array.
	* @param {number} deleteCount - Number of elements to be removed.
	* @param {...number} [itemN] - The element(s) to be add to the array. If no elements are given, splice() will only remove elements from the array.
	* @returns {module:la.BoolVector} Self.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, true, false]);
	* // splice the vector by removing the last two elements and adding false, true
	* vec.splice(1, 2, false, true)// returns vector [true, false, true]
	*/
 exports.BoolVector.prototype.splice = function (start, deleteCount, itemN) { return this;}
/**
	* Adds elements to the beginning of the vector.
	* @param {...boolean} args - One or more elements to be added to the vector.
	* @returns {number} The new length of vector.
	*/
 exports.BoolVector.prototype.unshift = function (args) { return 0;}
/**
	* Appends a second vector to the first one.
	* @param {module:la.BoolVector} vec - The appended vector.
	* @returns {number} The new length property of the vectors.
	*/
 exports.BoolVector.prototype.pushV = function (vec) { return 0;}
/** 
	* Sums the elements in the vector.
	* @returns {number} The sum of all elements in the instance.
	*/
 skip.exports.BoolVector.prototype.sum = function () { return BoolVectorDefaultVal; }
/**
	* Gets the index of the maximal element.
	* @returns {number} Index of the maximal element in the vector.
	*/
 skip.exports.BoolVector.prototype.getMaxIdx = function () { return 0;}
/**
	* Vector sort comparator callback.
	* @callback boolVectorCompareCb
	* @param {boolean} arg1 - First argument
	* @param {boolean} arg2 - Second argument
	* @returns {(number | boolean)} If boolVectorCompareCb(arg1, arg2) is less than 0 or false, sort arg1 to a lower index than arg2, i.e. arg1 comes first.
	*/
/**
	* Sorts the vector (in place operation).
	* @param {(module:la~boolVectorCompareCb | boolean)} [arg] - Sort callback or a boolean ascend flag. Default is boolean and true.
	* @returns {module:la.BoolVector} Self.
	* <br>1. Vector sorted in ascending order, if arg is boolean and true.  
	* <br>2. Vector sorted in descending order, if arg is boolean and false.
	* <br>3. Vector sorted by using the comparator callback, if arg is a {@link module:la~boolVectorCompareCb}.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, false, false]);
	* // sort ascending
	* vec.sort(); // sorts to: [false, true, true]
	* // sort using callback
	* vec.sort(function(arg1, arg2) { return arg2; }); // sorts to: [false, true, true]
	*/
 skip.exports.BoolVector.prototype.sort = function (bool) { return this; } 
/**
	* Sort with permutation output result
	* @typedef {Object} SortResult
	* @property  {module:la.BoolVector} SortResult.vec - Sorted vector.
	* @property  {module:la.IntVector} SortResult.perm - Permutation vector, where SortResult.vec[i] = unsortedVec[SortResult.perm[i]].
	*/
/**
	* Sorts the vector and returns the sorted vector as well as the permutation
	* @param {boolean} [asc] - Sort in ascending order flag. Default is boolean and true.
	* @returns {module:la~SortResult} Self.
	* @example
	* // import la module
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, false, false]);
	* // sort ascending
	* var result = vec.sortPerm(); // result.vec: [false, true, true]
	* result.perm; // permutation index vector
	*/
 skip.exports.BoolVector.prototype.sortPerm = function (asc) { return {vec: Object.create(this), perm: Object.create(require('qminer').la.IntVector.prototype) }; } 
/**
	* Randomly reorders the elements of the vector (inplace).
	* @returns {module:la.BoolVector} Self.
	*/
 exports.BoolVector.prototype.shuffle = function () { return this; }
/**
	* Deletes elements with sprecific index or more.
	* @param {boolean} idx - Index (zero based).
	* @returns {module:la.BoolVector} Self after truncating.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, true, false]);
	* // trunc all elements with index 1 or more
	* vec.trunc(1); // returns vector [true]
	*/
 exports.BoolVector.prototype.trunc = function (idx) { return this;} 
/**
	* Creates a dense matrix A by multiplying two vectors x and y: A = x y^T.
	* @param {module:la.BoolVector} vec - Second vector.
	* @returns {module:la.Matrix} Matrix obtained by the outer product of the instance and second vector.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.BoolVector([1, 2, 3]);
	* var y = new la.BoolVector([4, 5]);
	* // create the outer product of these vectors
	* var A = x.outer(y); // creates the dense matrix [[4, 5], [8, 10], [12, 15]]
	*/
 skip.exports.BoolVector.prototype.outer = function (vec) { return Object.create(require('qminer').la.Matrix.prototype);}
/**
	* Computes the inner product.
	* @param {module:la.Vector} vec - Other vector
	* @returns {number} Inner product between the instance and the other vector.
	*/
 skip.exports.BoolVector.prototype.inner = function(vec) { return 0.0; }
/**
	* Returns the cosine between the two vectors.
	* @param {module:la.BoolVector} vec - Second vector.
	* @returns {number} The cosine between the two vectors.
	* @example
	* var la = require('qminer').la;
	* // create two vectors
	* var x = new la.BoolVector([1, 0]);
	* var y = new la.BoolVector([0, 1]);
	* // calculate the cosine between those two vectors
	* var num = x.cosine(y); // returns 0
	*/
 skip.exports.BoolVector.prototype.cosine = function (vec) { return 0.0; }
/**
	* Sums the two vectors together.
	* @param {module:la.BoolVector} vec - Second vector.
	* @returns {module:la.BoolVector} Sum of the instance and the second vector.
	*/
 skip.exports.BoolVector.prototype.plus = function (vec) { return Object.create(this); }
/**
	* Subtracts one vector from the other.
	* @param {module:la.BoolVector} vec - Second vector.
	* @returns {module:la.BoolVector} The difference of the instance and the other vector.
	*/
 skip.exports.BoolVector.prototype.minus = function (vec) { return Object.create(this); }
/**
	* Multiplies the vector with a scalar.
	* @param {number} val - Scalar.
	* @returns {module:la.BoolVector} Product of the vector and scalar.
	*/
 skip.exports.BoolVector.prototype.multiply = function (val) { return Object.create(this); }
/**
	* Normalizes vector.
	* @returns {module:la.BoolVector} Normalized self.
	*/
 skip.exports.BoolVector.prototype.normalize = function () { return this; } 
/**
	* Gives the length of vector.
	* @returns {number} Length of vector.
	*/
 exports.BoolVector.prototype.length = 0;
/**
	* Returns the vector as string.
	* @returns {string} String representation.
	* @example
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, true, false]);
	* // create vector as string
	* vec.toString(); // returns 'true, true, false'
	*/
 exports.BoolVector.prototype.toString = function () { return ''; }
/**
	* Creates a dense diagonal matrix out of the vector.
	* @returns{module:la.Matrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.BoolVector.prototype.diag = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Creates a sparse diagonal matrix out of the vector.
	* @returns {module:la.SparseMatrix} Diagonal matrix, where the (i, i)-th element is the i-th element of vector.
	*/
 skip.exports.BoolVector.prototype.spDiag = function () { return Object.create(require('qminer').la.SparseMatrix.prototype); }
/**
	* Calculates the norm of the vector.
	* @returns {number} The norm of the vector.
	*/
 skip.exports.BoolVector.prototype.norm = function () { return 0.0; }
/**
	* Creates the sparse vector representation of the vector.
	* @returns {module:la.SparseVector} The sparse vector representation.
	*/
 skip.exports.BoolVector.prototype.sparse = function () { return Object.create(require('qminer').la.SparseVector.prototype); }
/**
	* Creates a matrix with a single column that is equal to the vector.
	* @returns {module:la.Matrix} The matrix with a single column that is equal to the instance.
	*/
 skip.exports.BoolVector.prototype.toMat = function () { return Object.create(require('qminer').la.Matrix.prototype); }
/**
	* Saves the vector as output stream (binary serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, true, false]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save vector and close write stream
	* vec.save(fout).close();
	*/
 exports.BoolVector.prototype.save = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (binary deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.BoolVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.BoolVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the vector
	* vec.load(fin);
	*/
 exports.BoolVector.prototype.load = function (fin) { return this; }
/**
	* Saves the vector as output stream (ascii serialization).
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create a new vector
	* var vec = new la.BoolVector([true, true, false]);
	* // open write stream
	* var fout = fs.openWrite('vec.dat');
	* // save matrix and close write stream
	* vec.saveascii(fout).close();
	*/
 exports.BoolVector.prototype.saveascii = function (fout) {  return Object.create(require('qminer').fs.FOut.prototype); }
/**
	* Loads the vector from input stream (ascii deserialization).
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.BoolVector} Self.
	* @example
	* // import fs module
	* var fs = require('qminer').fs;
	* var la = require('qminer').la;
	* // create an empty vector
	* var vec = new la.BoolVector();
	* // open a read stream
	* var fin = fs.openRead('vec.dat');
	* // load the matrix
	* vec.loadascii(fin);
	*/
 exports.BoolVector.prototype.loadascii = function (fin) { return this; }

