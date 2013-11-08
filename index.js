'use strict';

  // Require component dependencies
var rndid = require('rndid');

module.exports = describedBy;

/**
 * Associates one or more inputs with one or more
 * instances of informative help-text using the
 * "aria-describedby" attribute.
 *
 *  - Assigns unique ids to each help-text element,
 *      if none are present.
 *      
 *  - Uses each help-text element's id to add a
 *      token to the input's "aria-describedby"
 *      value.
 * 
 * @param  {HTMLElementList|Array} described  
 * 
 *         One or more input elements to which you wish to
 *         assign a new "aria-describedby" token.
 *         
 * @param  {HTMLElementList|Array} descriptor 
 * 
 *         One or more help-text elements to be used as
 *         aria descriptors of the inputs passed in to
 *         the {described} parameter.
 *
 * @author   matthew.isner@deque.com
 */
function describedBy(described, descriptor) {

  if (!described || !descriptor) {
    return;
  }

  if (!described.length) {
    described = [ described ];
  }

  if (!descriptor.length) {
    descriptor = [ descriptor ];
  }

  // Cache the array lengths for looping
  var bedLen = described.length,
      torLen = descriptor.length;

  // For each Descriptor element
  for (var torIndex = 0; torIndex < torLen; torIndex += 1) {

    // If this Descriptor has no id, give it one
    descriptor[torIndex].id = descriptor[torIndex].id || rndid();

    // For each Described element
    for (var bedIndex = 0; bedIndex < bedLen; bedIndex += 1) {

      // Determine the new "aria-describedby" value for this Described element
      var ariaDescByVal = (described[bedIndex].getAttribute('aria-describedby'))
        ? described[bedIndex].getAttribute('aria-describedby')
          + ' '
          + descriptor[torIndex].id
        : descriptor[torIndex].id;

      // Apply the new "aria-describedby" value to the Described element
      described[bedIndex].setAttribute('aria-describedby', ariaDescByVal);

    }

  }

}