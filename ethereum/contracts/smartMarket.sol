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

function revealBid(uint _productId, string memory _amount, string memory _secret) public{

  Product storage product = stores[productIdInStore[_productId]][_productId];
  bytes32 sealedBid = sha256(_amount, _secret);
  Bid memory bidInfo = product.bids[msg.sender][sealedBid];

  require (now > product.auctionEndTime);
  require (bidInfo.bidder > 0);
  require (bidInfo.revealed == false);

  uint refund;
  uint amount = stringToUint(_amount);

  if(bidInfo.value < amount) {
  // They didn't send enough amount, they lost
  refund = bidInfo.value;
 } else {
  // If first to reveal set as highest bidder
  if (address(product.highestBidder) == 0) {
   product.highestBidder = msg.sender;
   product.highestBid = amount;
   product.secondHighestBid = product.startPrice;
   refund = bidInfo.value - amount;
  } else {
   if (amount > product.highestBid) {
    product.secondHighestBid = product.highestBid;
    product.highestBidder.transfer(product.highestBid);
    product.highestBidder = msg.sender;
    product.highestBid = amount;
    refund = bidInfo.value - amount;
   } else if (amount > product.secondHighestBid) {
    product.secondHighestBid = amount;
    refund = amount;
   } else {
    refund = amount;
   }
  }
 }
  product.bids[msg.sender][sealedBid].revealed = true;

  if (refund > 0) {
    msg.sender.transfer(refund);
   }


}

function stringToUint(string memory s) pure private returns (uint) {

  bytes memory b = bytes(s);
  uint result = 0;
  for (uint i = 0; i < b.length; i++) {
    if (b[i] >= 48 && b[i] <= 57) {
      result = result * 10 + (uint(b[i]) - 48);
    }
  }

  return result;

}

function totalBids(uint _productId) view public returns (uint _totalBidsRet) {

  Product memory product = stores[productIdInStore[_productId]][_productId];

  _totalBidsRet = product.totalBids;

  return _totalBidsRet;

}

}
