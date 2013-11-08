
# describedBy

  Associates one or more inputs with one or more
  instances of informative help-text using the
  "aria-describedby" attribute.

## Installation

  Install with [component(1)](http://component.io):

    $ component install isner/describedBy

## API

  Invoke the function:

    describedBy(described, descriptor);

  where `described {HTMLElementList|Array}` is one or more input elements to which you wish to assign a new "aria-describedby" token,

  and `descriptor {HTMLElementList|Array}` is one or more help-text elements to be used as aria descriptors of the inputs passed in to the {described} parameter.

## License

  MIT
