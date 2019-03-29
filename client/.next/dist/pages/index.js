'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _getWeb = require('../util/getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

var _semanticUiReact = require('semantic-ui-react');

var _smartMarket = require('../util/smartMarket.json');

var _smartMarket2 = _interopRequireDefault(_smartMarket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\hackathon\\ethereum_smartMarket\\client\\pages\\index.js?entry';
//import contractInstance1 from '../../ethereum/build/contracts/smartMarket.json';


var Products = function (_Component) {
  (0, _inherits3.default)(Products, _Component);

  function Products(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Products);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Products.__proto__ || (0, _getPrototypeOf2.default)(Products)).call(this, props));

    _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _web, accounts, networkId, deployedNetwork, smartMarketInstance;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getWeb3();

            case 3:
              _web = _context.sent;
              _context.next = 6;
              return _web.eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return _web.eth.net.getId();

            case 9:
              networkId = _context.sent;
              deployedNetwork = _smartMarket2.default.networks[networkId];
              smartMarketInstance = new _web.eth.Contract(_smartMarket2.default.abi, deployedNetwork.address);

              console.log('smartMarketInstance', smartMarketInstance);

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](0);

              console.log(error);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 15]]);
    }));

    _this.state = {
      web3: null,
      accounts: null,
      contract: null,
      buffer: null,
      ipfsHash: null,
      ipfsHash1: null,
      newdate: '',
      userName: ''
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

      return _react2.default.createElement('div', { className: 'digital-identity', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'index class'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _getWeb2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                return _context2.abrupt('return', { accounts: accounts });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Products;
}(_react.Component);

exports.default = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1vbWVudCIsIndlYjMiLCJCdXR0b24iLCJDYXJkIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkljb24iLCJNZW51IiwiU2VnbWVudCIsIlRhYmxlIiwiY29udHJhY3RJbnN0YW5jZTEiLCJQcm9kdWN0cyIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRXZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGVwbG95ZWROZXR3b3JrIiwibmV0d29ya3MiLCJzbWFydE1hcmtldEluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3RhdGUiLCJjb250cmFjdCIsImJ1ZmZlciIsImlwZnNIYXNoIiwiaXBmc0hhc2gxIiwibmV3ZGF0ZSIsInVzZXJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFPLEFBQUssQUFBVSxBQUFRLEFBQUssQUFBSyxBQUFROztBQUV4RCxBQUFPLEFBQXVCOzs7Ozs7O0FBRDlCOzs7SSxBQUdNO29DQUNOOztvQkFBQSxBQUFZLE9BQU07aUJBQUE7O3dDQUFBOzswSUFBQSxBQUNSOztVQURRLEFBNkJsQiw2RkFBb0IsbUJBQUE7c0RBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBO3FCQUFBLEFBR0c7O2lCQUFiO0FBSFUsOEJBQUE7OEJBQUE7cUJBSU8sS0FBQSxBQUFLLElBSlosQUFJTyxBQUFTOztpQkFBMUI7QUFKVSxrQ0FBQTs4QkFBQTtxQkFLUSxLQUFBLEFBQUssSUFBTCxBQUFTLElBTGpCLEFBS1EsQUFBYTs7aUJBQS9CO0FBTFUsbUNBTVY7QUFOVSxnQ0FNUSxzQkFBQSxBQUFrQixTQU4xQixBQU1RLEFBQTJCLEFBQzdDO0FBUFUsb0NBT1ksSUFBSSxLQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsc0JBQXRCLEFBQXdDLEtBQUssZ0JBUHpELEFBT1ksQUFBNkQsQUFDekY7O3NCQUFBLEFBQVEsSUFBUixBQUFZLHVCQVJJLEFBUWhCLEFBQWtDOzs4QkFSbEI7QUFBQTs7aUJBQUE7OEJBQUE7OENBV2hCOztzQkFBQSxBQUFRLElBWFEsQUFXaEIsQUFBWTs7aUJBWEk7aUJBQUE7OEJBQUE7O0FBQUE7K0JBQUE7QUE3QkYsQUFFZDs7VUFBQSxBQUFLO1lBQVEsQUFDTCxBQUNOO2dCQUZXLEFBRUQsQUFDVjtnQkFIVyxBQUdELEFBQ1Y7Y0FKVyxBQUlKLEFBQ1A7Z0JBTFcsQUFLRixBQUNUO2lCQU5XLEFBTUQsQUFDVjtlQVBXLEFBT0gsQUFDUjtnQkFWWSxBQUVkLEFBQWEsQUFRRjtBQVJFLEFBQ1g7O1dBVUg7QUFFSDs7QUFDQTtBQUNBO0FBQ0E7Ozs7O1NBOEJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs2QkFDUSxBQUVOOzs2QkFFUSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhWLEFBRVEsQUFDRSxBQU1YOzs7Ozs7Ozs7Ozs7dUJBM0MwQixpQkFBQSxBQUFLLElBQUwsQSxBQUFTOzttQkFBMUI7QTtrREFHQyxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCWSxBLEFBb0V2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9oYWNrYXRob24vZXRoZXJldW1fc21hcnRNYXJrZXQvY2xpZW50In0=