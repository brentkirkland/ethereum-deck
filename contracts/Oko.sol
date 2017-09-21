pragma solidity ^0.4.6;

import "./BytesHelper.sol";

contract Oko {

  using BytesHelper for *;

  event Blue(address indexed owner, bytes32 companyIDBytes, string companyID, string subHeader, string paragraph);
  event Yellow(address indexed owner, string topic, string paragraph, bytes32 indexed companyIDBytes, uint currentNum);
  event Pink(address indexed owner, string message, uint messageCount, uint indexed ref_block, bytes32 indexed companyIDBytes);

  mapping(bytes32 => uint) public topicCount;
  mapping(bytes32 => uint) public messageCount;
  mapping(bytes32 => address) public owners;

  function createCompany (string companyID, string subheader, string paragraph) {

    // You can't recreate multiple company IDs
    bytes32 companyIDBytes = companyID.toBytes32(0);
    if (owners[companyIDBytes] == 0) {
      owners[companyIDBytes] = msg.sender;
      Blue(msg.sender, companyIDBytes, companyID, subheader, paragraph);
    }
  }

  function createTopic (string topic, string paragraph, bytes32 companyIDBytes) {
    if (owners[companyIDBytes] != 0) {
          Yellow(msg.sender, topic, paragraph, companyIDBytes, topicCount[companyIDBytes]++);
    }
  }

  function createMessage (string message, uint refNum, bytes32 companyIDBytes) {
    Pink(msg.sender, message, messageCount[companyIDBytes]++, refNum, companyIDBytes);
  }

  /*message {
    txt1 - company name - 32 bytes. no issue - a word
    txt2 - sub text. about - 64 bytes - two words
    txt3 - sub text. people? - 128 bytes - four words
    array of addresses - ? eventually?
    owner
    message {
      txt1 - question - 64 bytes - two words.
      txt2 - details - 128 bytes - four words.
      ref block
      owner
      message {
        txt1 - reploy - two words. <- if you don't make this guy cheap. then you limit alot of problem. you want to encourage response. This step is really the key layer. four words? i'm not sure.
        ref block
        owner
      }
    }
  }*/
}
