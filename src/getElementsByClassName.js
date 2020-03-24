/**
 * Document.body
 *    The Document.body property represents the <body> or <frameset> node of the
 *    current document, or null if no such element exists.
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/Document/body
 *
 *
 *
 * NodeList object
 *    NodeList objects are collections of nodes, usually returned by properties
 *    such as Node.childNodes and methods such as document.querySelectorAll()
 *    https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 *
 *
 *
 * .classList property
 *    The Element.classList is a read-only property that returns a live
 *    DOMTokenList collection of the class attributes of the element.
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 *
 *
 *
 * DOMTokenList object
 *    The DOMTokenList interface represents a set of space-separated tokens.
 *    Such a set is returned by Element.classList
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
 *
 */

/*
getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
/**
 * Gets a collection of objects based on the value of the NAME or ID attribute.
 * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
 */


// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, result = [], node = document.body) {

  // Step 1: check if current node has class name

  // check if there exists an element(s) in .classList
  if (node.classList !== undefined) {
    // traverse .classList to check if class name in .classList
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach
    node.classList.forEach(function(el) {
      if (el === className) {
        result.push(node);
      }
    });
  }

  // Step 2: check if current node has child node, then getElementsByClassName(node.childNodes)

  if (node.hasChildNodes() === true) {
    node.childNodes.forEach(function(child) {
      getElementsByClassName(className, result, child);
    });
  }

  return result;

};

