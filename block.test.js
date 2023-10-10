const Block = require("./block");
const { GENESIS_DATA } = require("./config");
describe("Block", () => {
  const timeStamp = "a-date";
  const lastHash = "foo-lastHash";
  const hash = "foo-hash";
  const data = ["block", "data"];
  const block = new Block({ timeStamp, lastHash, hash, data });

  it("has a timestamp  lastHash, hash, and data property", () => {
    expect(block.timeStamp).toEqual(timeStamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
describe("Genesis", () => {
  const genesisBlock = Block.genesis();

  it("returns the block instance", () => {
    expect(genesisBlock instanceof Block).toBe(true);
  });
  it("returns the gensis data", () => {
    expect(genesisBlock).toEqual(GENESIS_DATA);
  });
});
