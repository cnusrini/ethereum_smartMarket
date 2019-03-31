webpackHotUpdate(5,{

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1428);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(84);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(85);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(393);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(926);

var _smartMarket = __webpack_require__(1186);

var _smartMarket2 = _interopRequireDefault(_smartMarket);

var _getContract = __webpack_require__(1427);

var _getContract2 = _interopRequireDefault(_getContract);

var _getWeb = __webpack_require__(1187);

var _getWeb2 = _interopRequireDefault(_getWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\hackathon\\ethereum_smartMarket\\client\\pages\\index.js?entry';


var Products = function (_Component) {
  (0, _inherits3.default)(Products, _Component);

  function Products(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Products);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Products.__proto__ || (0, _getPrototypeOf2.default)(Products)).call(this, props));

    _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, networkId, deployedNetwork, smartMarketInstance;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _getWeb2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return _getWeb2.default.eth.net.getId();

            case 6:
              networkId = _context.sent;
              deployedNetwork = _smartMarket2.default.networks[networkId];
              smartMarketInstance = new _getWeb2.default.eth.Contract(_smartMarket2.default.abi, deployedNetwork.address);

              console.log('loaded componentDidMount', smartMarketInstance);

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0.message);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 12]]);
    }));

    _this.handleChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));

                console.log('in nameonChange' + _this.state.name);
                console.log('in categoryOnChange' + _this.state.category);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var tx;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                console.log('in onsubmit');
                _context3.prev = 2;
                _context3.next = 5;
                return _getContract2.default.methods.addProductToStore(_this.state.name, _this.state.category, _this.state.ipfsImgHash, _this.state.ipfsDescHash, _this.state.price, _this.state.condition).send({
                  from: '0x3467992f9f050268902386ba5000b77C761FE7B9'
                });

              case 5:
                tx = _context3.sent;

                console.log('tx data', tx);
                console.log('contractInstance in submit', _smartMarket2.default);

                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](2);

                console.log('error in handleSubmit method:' + _context3.t0.message);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 10]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      name: '',
      category: '',
      ipfsImgHash: '',
      ipfsDescHash: '',
      price: '',
      condition: ''
    };

    return _this;
  }

  //getInitialProps async method fetches the accounts and allpastevents from block 0 to latest block.
  //allLogs returns all the events from block 0 to latest block.
  //newLogs returns all the events from block 0 to latest block for a specific filter such as address
  // Note of coution : For better performance consider moving this huge logs to off chain or to any JSON data storage.


  (0, _createClass3.default)(Products, [{
    key: 'render',

    //Below is the page render method. Render page is divided into 4 segment.
    //First segment : Login with uport identity.Will allow user to browse the snap and submit.
    //Second segment : As soon as the snap is uploaded . It will be displayed here with the date and time of upload.
    //Third segment : Displays all the snaps that are uploaded fromBlock 0 to latest block. With the ipfshash , date and time and the person who has uploaded.
    //Fourth segment : Displays all the snaps for an individual address. Third and fourth segment will be an onLoad()
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5;

      console.log('accounts', _smartMarket2.default);
      console.log('new ins', _getContract2.default);

      return _react2.default.createElement('div', { className: 'digital-identity', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Add Product'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { name: 'name', icon: 'truck', iconPosition: 'left', placeholder: 'name of the product',
        type: 'text', value: this.state.name, onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { pointing: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'Category'), _react2.default.createElement('input', (_React$createElement = { name: 'category', type: 'password', placeholder: 'Category'
      }, (0, _defineProperty3.default)(_React$createElement, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement, 'value', this.state.category), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 102
      }), _React$createElement))), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { pointing: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, 'Image'), _react2.default.createElement('input', (_React$createElement2 = { name: 'ipfsImgHash', type: 'password', placeholder: 'Image'
      }, (0, _defineProperty3.default)(_React$createElement2, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement2, 'value', this.state.ipfsImgHash), (0, _defineProperty3.default)(_React$createElement2, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement2, '__source', {
        fileName: _jsxFileName,
        lineNumber: 109
      }), _React$createElement2))), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { pointing: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Desc'), _react2.default.createElement('input', (_React$createElement3 = { name: 'ipfsDescHash', type: 'password', placeholder: 'Desc'
      }, (0, _defineProperty3.default)(_React$createElement3, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement3, 'value', this.state.ipfsDescHash), (0, _defineProperty3.default)(_React$createElement3, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement3, '__source', {
        fileName: _jsxFileName,
        lineNumber: 116
      }), _React$createElement3))), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { pointing: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'Price'), _react2.default.createElement('input', (_React$createElement4 = { name: 'price`', type: 'password', placeholder: 'price'
      }, (0, _defineProperty3.default)(_React$createElement4, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement4, 'value', this.state.price), (0, _defineProperty3.default)(_React$createElement4, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement4, '__source', {
        fileName: _jsxFileName,
        lineNumber: 123
      }), _React$createElement4))), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { pointing: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, 'Condition'), _react2.default.createElement('input', (_React$createElement5 = { name: 'condition', type: 'password', placeholder: 'Condition'
      }, (0, _defineProperty3.default)(_React$createElement5, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement5, 'value', this.state.condition), (0, _defineProperty3.default)(_React$createElement5, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement5, '__source', {
        fileName: _jsxFileName,
        lineNumber: 130
      }), _React$createElement5))), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', 'fluid-size': 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, 'submit')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _getWeb2.default.eth.getAccounts();

              case 2:
                accounts = _context4.sent;
                return _context4.abrupt('return', { accounts: accounts });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps() {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Products;
}(_react.Component);

exports.default = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1vbWVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIkxhYmVsIiwiY29udHJhY3RJbnN0YW5jZSIsImluc3RhbmFjZSIsIndlYjMiLCJQcm9kdWN0cyIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZE5ldHdvcmsiLCJuZXR3b3JrcyIsInNtYXJ0TWFya2V0SW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN0YXRlIiwiY2F0ZWdvcnkiLCJoYW5kbGVTdWJtaXQiLCJtZXRob2RzIiwiYWRkUHJvZHVjdFRvU3RvcmUiLCJpcGZzSW1nSGFzaCIsImlwZnNEZXNjSGFzaCIsInByaWNlIiwiY29uZGl0aW9uIiwic2VuZCIsImZyb20iLCJ0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVEsQUFBTyxBQUFLLEFBQU07O0FBQzFCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTtvQ0FDTjs7b0JBQUEsQUFBWSxPQUFNO2lCQUFBOzt3Q0FBQTs7MElBQUEsQUFDUjs7VUFEUSxBQXdCbEIsNkZBQW9CLG1CQUFBO2dEQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBO3FCQUlPLGlCQUFBLEFBQUssSUFKWixBQUlPLEFBQVM7O2lCQUExQjtBQUpVLGtDQUFBOzhCQUFBO3FCQUtRLGlCQUFBLEFBQUssSUFBTCxBQUFTLElBTGpCLEFBS1EsQUFBYTs7aUJBQS9CO0FBTFUsbUNBTVY7QUFOVSxnQ0FNUSxzQkFBQSxBQUFpQixTQU56QixBQU1RLEFBQTBCLEFBQzVDO0FBUFUsb0NBT1ksSUFBSSxpQkFBQSxBQUFLLElBQVQsQUFBYSxTQUFTLHNCQUF0QixBQUF1QyxLQUFLLGdCQVB4RCxBQU9ZLEFBQTRELEFBRXhGOztzQkFBQSxBQUFRLElBQVIsQUFBWSw0QkFUSSxBQVNoQixBQUF1Qzs7OEJBVHZCO0FBQUE7O2lCQUFBOzhCQUFBOzhDQVloQjs7c0JBQUEsQUFBUSxJQUFJLFlBWkksQUFZaEIsQUFBYzs7aUJBWkU7aUJBQUE7OEJBQUE7O0FBQUE7K0JBQUE7QUF4QkY7O1VBQUEsQUF3Q2xCLDJCQXhDa0I7MkZBd0NILGtCQUFBLEFBQU8sT0FBUDt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDYjtzQkFBQSxBQUFNLEFBRU47O3NCQUFBLEFBQUssMkNBQVksTUFBQSxBQUFNLE9BQXZCLEFBQThCLE1BQU8sTUFBQSxBQUFNLE9BQTNDLEFBQWtELEFBRWxEOzt3QkFBQSxBQUFRLElBQUksb0JBQW9CLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUMzQzt3QkFBQSxBQUFRLElBQUksd0JBQXVCLE1BQUEsQUFBSyxNQU4zQixBQU1iLEFBQThDOzttQkFOakM7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUF4Q0c7OzJCQUFBO2lDQUFBO0FBQUE7QUFBQTs7VUFBQSxBQWlEbEIsMkJBakRrQjsyRkFpREgsa0JBQUEsQUFBTyxPQUFQO1lBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ2I7c0JBQUEsQUFBTSxBQUNOO3dCQUFBLEFBQVEsSUFGSyxBQUViLEFBQVk7aUNBRkM7aUNBQUE7NkNBS0ksQUFBVSxRQUFWLEFBQWtCLGtCQUN6QixNQUFBLEFBQUssTUFERSxBQUNJLE1BQ1gsTUFBQSxBQUFLLE1BRkUsQUFFSSxVQUNYLE1BQUEsQUFBSyxNQUhFLEFBR0ksYUFDWCxNQUFBLEFBQUssTUFKRSxBQUlJLGNBQ1gsTUFBQSxBQUFLLE1BTEUsQUFLSSxPQUNYLE1BQUEsQUFBSyxNQU5FLEFBTUksV0FOSixBQU1lO3dCQVhuQixBQUtJLEFBTW9CLEFBQ3JCO0FBRHFCLEFBQzNCLGlCQVBPOzttQkFBWDtBQUxPLCtCQWNMOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxXQUFaLEFBQXVCLEFBQ3ZCO3dCQUFBLEFBQVEsSUFmSCxBQWVMLEFBQVksQUFBNkI7O2lDQWZwQztBQUFBOzttQkFBQTtpQ0FBQTtrREFrQlg7O3dCQUFBLEFBQVEsSUFBSSxrQ0FBaUMsYUFsQmxDLEFBa0JYLEFBQStDOzttQkFsQnBDO21CQUFBO2lDQUFBOztBQUFBO2tDQUFBO0FBakRHOzs0QkFBQTtpQ0FBQTtBQUFBO0FBRWQ7O1VBQUEsQUFBSztZQUFRLEFBQ04sQUFDTDtnQkFGVyxBQUVGLEFBQ1Q7bUJBSFcsQUFHQyxBQUNaO29CQUpXLEFBSUUsQUFDYjthQUxXLEFBS0wsQUFDTjtpQkFSWSxBQUVkLEFBQWEsQUFNRDtBQU5DLEFBQ1g7O1dBUUg7QUFFSDs7QUFDQTtBQUNBO0FBQ0E7Ozs7O1NBeURBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs2QkFDUTtxR0FDUjs7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUFXLEFBQ3ZCO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFBVSxBQUVwQjs7NkJBRVEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsZ0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNDO0FBREQ7aURBQ08sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQURELEFBQ0MsQUFDQTtBQURBOzBCQUNBLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsU0FBUSxjQUFoQyxBQUE2QyxRQUFPLGFBQXBELEFBQWdFLEFBQ2hFO2NBREEsQUFDSyxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BRHhCLEFBQzhCLE1BQU0sVUFBVSxLQUQ5QyxBQUNtRDs7b0JBRG5EO3NCQUZELEFBRUMsQUFHQTtBQUhBOzBCQUdDLGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQU0sVUFBUCxBQUFnQjtvQkFBaEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw4RUFBTyxNQUFQLEFBQVksWUFBVyxNQUF2QixBQUE0QixZQUFXLGFBQXZDLEFBQW1EO3FFQUFuRCxBQUNLLHNFQUFjLEtBQUEsQUFBSyxNQUR4QixBQUM4QiwyRUFBb0IsS0FEbEQsQUFDdUQ7a0JBRHZEO29CQUFBO0FBQUEsVUFQSCxBQUtDLEFBT0EseUNBQUMsY0FBRCxzQkFBQSxBQUFNLFNBQU0sUUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSxVQUFQLEFBQWdCO29CQUFoQjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLDRFQUFPLE1BQVAsQUFBWSxlQUFjLE1BQTFCLEFBQStCLFlBQVcsYUFBMUMsQUFBc0Q7c0VBQXRELEFBQ0ssdUVBQWMsS0FBQSxBQUFLLE1BRHhCLEFBQzhCLCtFQUF1QixLQURyRCxBQUMwRDtrQkFEMUQ7b0JBQUE7QUFBQSxVQWRILEFBWUMsQUFPQSwwQ0FBQyxjQUFELHNCQUFBLEFBQU0sU0FBTSxRQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHdDQUFNLFVBQVAsQUFBZ0I7b0JBQWhCO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsMkVBQU8sTUFBUCxBQUFZLGdCQUFlLE1BQTNCLEFBQWdDLFlBQVcsYUFBM0MsQUFBdUQ7c0VBQXZELEFBQ0ssdUVBQWMsS0FBQSxBQUFLLE1BRHhCLEFBQzhCLGdGQUF3QixLQUR0RCxBQUMyRDtrQkFEM0Q7b0JBQUE7QUFBQSxVQXJCSCxBQW1CQyxBQU9BLDBDQUFDLGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQU0sVUFBUCxBQUFnQjtvQkFBaEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw0RUFBTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixZQUFXLGFBQXJDLEFBQWlEO3NFQUFqRCxBQUNLLHVFQUFjLEtBQUEsQUFBSyxNQUR4QixBQUM4Qix5RUFBaUIsS0FEL0MsQUFDb0Q7a0JBRHBEO29CQUFBO0FBQUEsVUE1QkgsQUEwQkMsQUFPQSwwQ0FBQyxjQUFELHNCQUFBLEFBQU0sU0FBTSxRQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHdDQUFNLFVBQVAsQUFBZ0I7b0JBQWhCO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsZ0ZBQU8sTUFBUCxBQUFZLGFBQVksTUFBeEIsQUFBNkIsWUFBVyxhQUF4QyxBQUFvRDtzRUFBcEQsQUFDSyx1RUFBYyxLQUFBLEFBQUssTUFEeEIsQUFDOEIsNkVBQXFCLEtBRG5ELEFBQ3dEO2tCQUR4RDtvQkFBQTtBQUFBLFVBbkNILEFBaUNDLEFBT0EsMENBQUEsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxjQUFyQixBQUFnQztvQkFBaEM7c0JBQUE7QUFBQTtTQTVDWCxBQUVRLEFBRUUsQUF3Q0MsQUFVWjs7Ozs7Ozs7Ozs7O3VCQXJIMEIsaUJBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7a0RBRUMsRUFBQyxVQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0QlksQSxBQTRJdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovaGFja2F0aG9uL2V0aGVyZXVtX3NtYXJ0TWFya2V0L2NsaWVudCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\hackathon\\ethereum_smartMarket\\client\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\hackathon\\ethereum_smartMarket\\client\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40ZTM2YTg0ODA2MGQ5ZjgyZTQwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2EwNWI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHtCdXR0b24sRm9ybSxJbnB1dCxMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBjb250cmFjdEluc3RhbmNlIGZyb20gJy4uL3V0aWwvc21hcnRNYXJrZXQuanNvbidcclxuaW1wb3J0IGluc3RhbmFjZSBmcm9tICcuLi91dGlsL2dldENvbnRyYWN0J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi91dGlsL2dldFdlYjMnO1xyXG5cclxuY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBjYXRlZ29yeTonJyxcclxuICAgICAgaXBmc0ltZ0hhc2g6JycsXHJcbiAgICAgIGlwZnNEZXNjSGFzaDonJyxcclxuICAgICAgcHJpY2U6JycsXHJcbiAgICAgIGNvbmRpdGlvbjonJ1xyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuLy9nZXRJbml0aWFsUHJvcHMgYXN5bmMgbWV0aG9kIGZldGNoZXMgdGhlIGFjY291bnRzIGFuZCBhbGxwYXN0ZXZlbnRzIGZyb20gYmxvY2sgMCB0byBsYXRlc3QgYmxvY2suXHJcbi8vYWxsTG9ncyByZXR1cm5zIGFsbCB0aGUgZXZlbnRzIGZyb20gYmxvY2sgMCB0byBsYXRlc3QgYmxvY2suXHJcbi8vbmV3TG9ncyByZXR1cm5zIGFsbCB0aGUgZXZlbnRzIGZyb20gYmxvY2sgMCB0byBsYXRlc3QgYmxvY2sgZm9yIGEgc3BlY2lmaWMgZmlsdGVyIHN1Y2ggYXMgYWRkcmVzc1xyXG4vLyBOb3RlIG9mIGNvdXRpb24gOiBGb3IgYmV0dGVyIHBlcmZvcm1hbmNlIGNvbnNpZGVyIG1vdmluZyB0aGlzIGh1Z2UgbG9ncyB0byBvZmYgY2hhaW4gb3IgdG8gYW55IEpTT04gZGF0YSBzdG9yYWdlLlxyXG5zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHJcbiAgICByZXR1cm4ge2FjY291bnRzfTtcclxufVxyXG5cclxuY29tcG9uZW50RGlkTW91bnQgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvL2NvbnN0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7Ly8gVXNlIHdlYjMgdG8gZ2V0IHRoZSB1c2VyJ3MgYWNjb3VudHMuXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcclxuICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IGNvbnRyYWN0SW5zdGFuY2UubmV0d29ya3NbbmV0d29ya0lkXTtcclxuICAgIGNvbnN0IHNtYXJ0TWFya2V0SW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RJbnN0YW5jZS5hYmksIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLCApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgY29tcG9uZW50RGlkTW91bnQnLHNtYXJ0TWFya2V0SW5zdGFuY2UpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmhhbmRsZUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdpbiBuYW1lb25DaGFuZ2UnICsgdGhpcy5zdGF0ZS5uYW1lKTtcclxuICBjb25zb2xlLmxvZygnaW4gY2F0ZWdvcnlPbkNoYW5nZScrIHRoaXMuc3RhdGUuY2F0ZWdvcnkpO1xyXG59O1xyXG5cclxuaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zb2xlLmxvZygnaW4gb25zdWJtaXQnKTtcclxuICB0cnkge1xyXG5cclxuICAgIGxldCB0eCA9IGF3YWl0IGluc3RhbmFjZS5tZXRob2RzLmFkZFByb2R1Y3RUb1N0b3JlKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXBmc0ltZ0hhc2gsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXBmc0Rlc2NIYXNoLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByaWNlLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbmRpdGlvbikuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb206ICcweDM0Njc5OTJmOWYwNTAyNjg5MDIzODZiYTUwMDBiNzdDNzYxRkU3QjknXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0eCBkYXRhJywgdHgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRyYWN0SW5zdGFuY2UgaW4gc3VibWl0Jyxjb250cmFjdEluc3RhbmNlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGhhbmRsZVN1Ym1pdCBtZXRob2Q6JysgZS5tZXNzYWdlKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy9CZWxvdyBpcyB0aGUgcGFnZSByZW5kZXIgbWV0aG9kLiBSZW5kZXIgcGFnZSBpcyBkaXZpZGVkIGludG8gNCBzZWdtZW50LlxyXG4vL0ZpcnN0IHNlZ21lbnQgOiBMb2dpbiB3aXRoIHVwb3J0IGlkZW50aXR5LldpbGwgYWxsb3cgdXNlciB0byBicm93c2UgdGhlIHNuYXAgYW5kIHN1Ym1pdC5cclxuLy9TZWNvbmQgc2VnbWVudCA6IEFzIHNvb24gYXMgdGhlIHNuYXAgaXMgdXBsb2FkZWQgLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBoZXJlIHdpdGggdGhlIGRhdGUgYW5kIHRpbWUgb2YgdXBsb2FkLlxyXG4vL1RoaXJkIHNlZ21lbnQgOiBEaXNwbGF5cyBhbGwgdGhlIHNuYXBzIHRoYXQgYXJlIHVwbG9hZGVkIGZyb21CbG9jayAwIHRvIGxhdGVzdCBibG9jay4gV2l0aCB0aGUgaXBmc2hhc2ggLCBkYXRlIGFuZCB0aW1lIGFuZCB0aGUgcGVyc29uIHdobyBoYXMgdXBsb2FkZWQuXHJcbi8vRm91cnRoIHNlZ21lbnQgOiBEaXNwbGF5cyBhbGwgdGhlIHNuYXBzIGZvciBhbiBpbmRpdmlkdWFsIGFkZHJlc3MuIFRoaXJkIGFuZCBmb3VydGggc2VnbWVudCB3aWxsIGJlIGFuIG9uTG9hZCgpXHJcbnJlbmRlcigpe1xyXG5jb25zb2xlLmxvZygnYWNjb3VudHMnLGNvbnRyYWN0SW5zdGFuY2UpO1xyXG5jb25zb2xlLmxvZygnbmV3IGlucycsaW5zdGFuYWNlKTtcclxuXHJcbiAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWdpdGFsLWlkZW50aXR5Jz5cclxuICAgICAgICAgICAgPHA+QWRkIFByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4xL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgICA8SW5wdXQgbmFtZT0nbmFtZScgaWNvbj0ndHJ1Y2snIGljb25Qb3NpdGlvbj0nbGVmdCcgcGxhY2Vob2xkZXI9J25hbWUgb2YgdGhlIHByb2R1Y3QnXHJcbiAgICAgICAgICAgICB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICAgICA8TGFiZWwgcG9pbnRpbmc9J3JpZ2h0Jz5DYXRlZ29yeTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdjYXRlZ29yeScgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdDYXRlZ29yeSdcclxuICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgICAgIDxMYWJlbCBwb2ludGluZz0ncmlnaHQnPkltYWdlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J2lwZnNJbWdIYXNoJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J0ltYWdlJ1xyXG4gICAgICAgICAgICAgICB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5pcGZzSW1nSGFzaH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGlubGluZT5cclxuICAgICAgICAgICAgICAgPExhYmVsIHBvaW50aW5nPSdyaWdodCc+RGVzYzwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdpcGZzRGVzY0hhc2gnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRGVzYydcclxuICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUuaXBmc0Rlc2NIYXNofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICAgICA8TGFiZWwgcG9pbnRpbmc9J3JpZ2h0Jz5QcmljZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdwcmljZWAnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0ncHJpY2UnXHJcbiAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICAgICA8TGFiZWwgcG9pbnRpbmc9J3JpZ2h0Jz5Db25kaXRpb248L0xhYmVsPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0nY29uZGl0aW9uJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J0NvbmRpdGlvbidcclxuICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUuY29uZGl0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nYmx1ZScgZmx1aWQtc2l6ZT0nbGFyZ2UnID5zdWJtaXQ8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgIDwvRm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICApO1xyXG5cclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQVZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTtBQWJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBeEJBO0FBQ0E7QUF1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXhDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUFBO0FBS0E7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQUxBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQW5CQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWpEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUF5REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBREE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFVQTs7Ozs7Ozs7Ozs7O0FBckhBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9