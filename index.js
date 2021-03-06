var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'You clicked ',
      count,
      ' times'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return setCount(count + 1);
        } },
      'Click me'
    )
  );
}
ReactDOM.render(React.createElement(Example, null), document.getElementById('root'));