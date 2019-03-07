pragma solidity ^0.5.0;

contract smartMarket {

  enum ProductAvailability { Open, Sold, Unsold }
  enum ProductCondition {New, Used}
  uint public productIndex;
  mapping(uint => address) productIdInStore;
  mapping (address => mapping(uint => Product)) stores;

  struct Product{
  uint id;
  string name;
  string category;
  string imageLink;
  string descLink;
  uint auctionStartTime;
  uint auctionEndTime;
  uint startPrice;
  address highestBidder;
  uint highestBid;
  uint secondHighestBid;
  uint totalBids;
  ProductAvailability availability;
  ProductCondition condition;
  mapping (address => mapping (bytes32 => Bid)) bids;
  }

  struct Bid {
  uint productId;
  uint value;
  address bidder;
  bool revealed;

}

  constructor() public {
    productIndex = 0;
  }

  function addProductToStore(string memory _name, string memory _category, string memory _imageLink, string memory _descLink, uint _auctionStartTime,
  uint _auctionEndTime, uint _startPrice, uint _productCondition) public {

  require (_auctionStartTime < _auctionEndTime);
  productIndex += 1;
  Product memory product = Product(productIndex, _name, _category, _imageLink, _descLink, _auctionStartTime, _auctionEndTime, _startPrice, productIdInStore[0], 0, 0, 0, ProductAvailability.Open, ProductCondition(_productCondition));
  productIdInStore[productIndex] = msg.sender;
  stores[msg.sender][productIndex] = product;

}
function getProduct(uint _productId) view public returns (uint idRet, string memory nameRet, string memory categoryRet, string memory imgRet, string memory descRet, uint startTimeRet, uint endTimeRet, uint startPriceRet, ProductAvailability ProductAvailabilityRet, ProductCondition ProductConditionRet) {

  Product memory product = stores[productIdInStore[_productId]][_productId];

  idRet = product.id;
  nameRet = product.name;
  categoryRet = product.category;
  imgRet = product.imageLink;
  descRet = product.descLink;
  startTimeRet = product.auctionStartTime;
  endTimeRet = product.auctionEndTime;
  startPriceRet = product.startPrice;
  ProductAvailabilityRet = product.availability;
  ProductConditionRet = product.condition;
  return (idRet, nameRet, categoryRet, imgRet, descRet, startTimeRet,endTimeRet, startPriceRet, ProductAvailabilityRet, ProductConditionRet);

}

function bid(uint _productId, bytes32 _bid) payable public returns (bool) {

  Product storage product = stores[productIdInStore[_productId]][_productId];
  require (now >= product.auctionStartTime);
  require (now <= product.auctionEndTime);
  require (msg.value > product.startPrice);
  require (product.bids[msg.sender][_bid].value == 0);
  product.bids[msg.sender][_bid] = Bid(_productId, msg.value, msg.sender, false);

  product.totalBids += 1;

  return true;

}

function totalBids(uint _productId) view public returns (uint _totalBidsRet) {

  Product memory product = stores[productIdInStore[_productId]][_productId];

  _totalBidsRet = product.totalBids;

  return _totalBidsRet;

}

}
