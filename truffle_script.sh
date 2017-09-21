#!/bin/sh
rm -rf build/contracts
rm -rf src/contracts
truffle compile
truffle migrate
rm -rf src/contracts
mkdir src/contracts
cp build/contracts/* src/contracts
