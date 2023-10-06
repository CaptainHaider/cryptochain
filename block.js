class Block {
  constructor({ timeStamp, lastHash, hash, data }) {
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  timeStamp: "01/01/01",
  lastHash: "foo-lastHash",
  hash: "foo-hash",
  data: "data",
});
console.log({ block1 });
