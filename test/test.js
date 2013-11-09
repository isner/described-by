
  // Require the assertion library for Mocha
var assert = require('assert');

  // Require the method to be tested
var describedBy = require('describedBy');

describe('.describedBy()', function () {

  var inputs, inputA, inputC, spans, spanA, spanB, spanC;

  beforeEach(function () {

    document.getElementById('fixture').innerHTML = [
      '<input type="text" id="inputA" style="display: none;">',
      '<span></span>',
      '<input type="text" id="inputB" style="display: none;">',
      '<span></span>',
      '<input type="text" id="inputC" style="display: none;">',
      '<span id="spanC"></span>'
    ].join('');

    inputs = document.querySelectorAll('#fixture input'),
    inputA = inputs[0], inputC = inputs[2],
    spans = document.querySelectorAll('#fixture span'),
    spanA = spans[0], spanB = spans[1], spanC = spans[2];

  });

  it('should be a function', function () {
    assert(typeof describedBy === 'function');
  });

  it('should assign a new id to each "descriptor" element', function () {
    describedBy(inputA, spans);
      // The first and second spans should now have ids
    assert(spanA.id.length > 0 && spanB.id.length > 0);
  });

  it('should not clobber a descriptor element\'s existing id', function () {
    describedBy(inputC, spans);
      // #spanC should still have the same id
    assert(spanC.id === 'spanC');
  });

  it('should give every `described` an "aria-describedby" value', function () {
    describedBy(inputs, spans);
      // Each of the three inputs should now have an "aria-describedby" attr
    for (var i = 0; i < inputs.length; i += 1) {
      assert(!!inputs[i].getAttribute('aria-describedby'));
    }
  });

  it('should not clobber a "described" element\'s existing "aria-describedby"');
    // This test is pending an update to the describedBy repo.
    // In the meantime, devs should only invoke describedBy
    // when they know that an input does not already have an
    // "aria-describedby" attribute.
});