/** @type {string} */
let myString = 'Hello world';

/** @type {number} */
let myNumber = 1;

/** @type {number[]} */
let nyArray = [1, 2 ,3, 4];

/** @type {{a: string, b: number}} */
let myObject = {
  a: 'a string',
  b: 1,
};

/** 
 * @typedef {Object} Point
 * @property {number} x - The x coordinate
 * @property {number} y - The y coordinate
 * */

/** @type {Point} */
let myPoint = { x: 10, y: 20 }; 


/**
 * @typedef {Object} BlogArticle
 * @property {string} title - The title of the article
 * @property {string} author - The author of the article
 * @property {string} content - The content of the article
 * @property {Date} datePublished - The date the article was published
 */

/** @type {BlogArticle} */
let myArticle = {
  title: 'JSDoc and Typescript',
  author: 'John Doe',
  content: 'This is a blog article about JSDoc and Typescript',
  datePublished: new Date(),
}

/** @type {string|number} */
let myStringOrNumber = 'a string';
myStringOrNumber = 12;

/** 
 * @typedef {(string|number)} StringOrNumber 
 */

/** @type {StringOrNumber} */
let myVariable = 12;
myVariable = 'a string';

/**
 * @param {string} param1 - A string parameter.
 * @param {number} [param2] - An optional number parameter.
 * @returns {string}
 */
function myFunction(param1, param2) {
  return param1 + (param2 || '')
}

/**
 * @param {number} a - The first number.
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function myFunction(a, b) {
  return a + b
}

/** @type {*} */
let anythingGoes = 'It can be any type!!'
