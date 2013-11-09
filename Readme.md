
# described-by

  Associates one or more inputs with one or more
  instances of informative help-text using the
  "aria-describedby" attribute.

## Installation

  Install with [component(1)](http://component.io):

    $ component install isner/describedBy

## API

### Example Usage

  Assuming the following markup:

    <body>
      <label for="answer">Of the male and female Mallard, which is more colorful?</label>
      <input type="text" id="answer">
      <span class="tinyHint">Hint #1: it's not the female</span>
      <span id="hint2" class="tinyHint">Hint #2: it's the male</span>
    </body>

  Select your elements and invoke the function:

    var describedBy = require('described-by');
    var input = document.getElementById('yearInput');
    var hints = document.querySelectorAll('span');
    describedBy(input, hints);

  To produce the following markup:

    <body>
      <label for="answer">Of the male and female Mallard, which is more colorful?</label>
      <input type="text" id="answer" aria-describedby="dsfhax hint2">
      <span id="dsfhax" class="tinyHint">Hint #1: it's not the female</span>
      <span id="hint2" class="tinyHint">Hint #2: it's the male</span>
    </body>

### Parameters

  `described` HTMLElementList or Array

   One or more HTML elements to which you wish to assign a new "aria-describedby" attribute token,

  `descriptor` HTMLElementList or Array

  One or more HTML elements to be used as aria descriptors of the inputs passed in to the `described` parameter.

## License

  MIT
