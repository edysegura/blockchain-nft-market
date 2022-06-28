describe("NFTMarketplace", () => {
  it("should create and execute NFT marketplace sales", async () => {
    /* deploy the marketplace */
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();

    let listingPrice = await nftMarketplace.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    /* create two tokens */
    await nftMarketplace.createToken(
      "https://www.mytokenlocation.com",
      auctionPrice,
      { value: listingPrice }
    );
    await nftMarketplace.createToken(
      "https://www.mytokenlocation2.com",
      auctionPrice,
      { value: listingPrice }
    );

    const [_, buyerAddress] = await ethers.getSigners();

    /* execute sale of token to another user */
    await nftMarketplace
      .connect(buyerAddress)
      .createMarketSale(1, { value: auctionPrice });

    /* resell a token */
    await nftMarketplace
      .connect(buyerAddress)
      .resellToken(1, auctionPrice, { value: listingPrice });

    /* query for and return the unsold items */
    const marketItems = await nftMarketplace.fetchMarketItems();
    const items = await Promise.all(
      marketItems.map(async (marketItem) => {
        const tokenUri = await nftMarketplace.tokenURI(marketItem.tokenId);
        let item = {
          price: marketItem.price.toString(),
          tokenId: marketItem.tokenId.toString(),
          seller: marketItem.seller,
          owner: marketItem.owner,
          tokenUri,
        };
        return marketItem;
      })
    );
    console.log("items: ", items);
  });
});
