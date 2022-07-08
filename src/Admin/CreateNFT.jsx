import Nullstack from 'nullstack'
import ImagePlaceholder from '../layout/imagePlaceholder'
import Label from '../layout/label'
import SimpleTitle from '../layout/simpleTitle'
import TextControl from '../layout/textControl'

class CreateNFT extends Nullstack {
  name = ''
  description = ''
  price = ''
  fileUrl = ''

  async uploadImageToIPFS({ settings, ipfsClient, event }) {
    const file = event.target.files[0]
    try {
      const added = await ipfsClient.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      })
      this.fileUrl = `${settings.ipfsUrl}/${added.path}`
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async uploadToIPFS({ settings, ipfsClient }) {
    const { name, description, price, fileUrl } = this
    if (!name || !description || !price || !fileUrl) return
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })
    try {
      const added = await ipfsClient.add(data)
      const url = `${settings.ipfsUrl}/${added.path}`
      return url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async listNFTForSale({
    router,
    _ethers: ethers,
    marketplaceAddress,
    NFTMarketplace,
    Web3Modal,
  }) {
    const url = await this.uploadToIPFS()
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const price = ethers.utils.parseUnits(this.price, 'ether')
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer,
    )
    const listingPrice = await contract.getListingPrice()
    const priceValue = listingPrice.toString()
    const transaction = await contract.createToken(url, price, {
      value: priceValue,
    })
    await transaction.wait()
    router.url = '/admin/my-nfts'
  }

  renderBackup() {
    return (
      <div class="flex justify-center">
        <div class="flex w-1/2 flex-col pb-12">
          <input
            placeholder="Asset Name"
            class="mt-8 rounded border p-4 text-black"
            bind={this.name}
          />
          <textarea
            placeholder="Asset Description"
            class="mt-2 rounded border p-4 text-black"
            bind={this.description}
          />
          <input
            placeholder="Asset Price in ETH"
            class="mt-2 rounded border p-4 text-black"
            bind={this.price}
          />
          <input
            type="file"
            name="Asset"
            class="my-4"
            oninput={this.uploadImageToIPFS}
          />
          {this.fileUrl && (
            <img class="mt-4 rounded" width="350" src={this.fileUrl} />
          )}
          <button
            onclick={this.listNFTForSale}
            class="mt-4 rounded bg-mustard p-4 font-bold text-black shadow-lg"
          >
            Create NFT
          </button>
        </div>
      </div>
    )
  }

  renderImageUpload() {
    return (
      <div class="flex h-fit items-center justify-center border-2 border-dashed border-white p-2">
        {!this.fileUrl && (
          <div
            class="w-full flex justify-center cursor-pointer"
            onclick={() => document.getElementById('sideAFile').click()}
          >
            <ImagePlaceholder />
          </div>
        )}
        {this.fileUrl && (
          <img
            onclick={() => document.getElementById('sideAFile').click()}
            class="cursor-pointer rounded"
            width="150"
            src={this.fileUrl}
          />
        )}
        <input
          hidden
          type="file"
          id="sideAFile"
          name="sideAFile"
          accept="image/*"
          oninput={this.uploadImageToIPFS}
        />
      </div>
    )
  }
  render() {
    return (
      <section class="flex gap-24 pl-10 pt-14">
        {/* SIDE A */}
        <div class="w-96">
          <div>
            <SimpleTitle>Create a new NFT</SimpleTitle>
          </div>
          <div class="mt-10 flex flex-col gap-4">
            <Label>Image, Video, Audio, or 3D Model *</Label>
            <p class="text-xs text-gray-300">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
            <ImageUpload />
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <TextControl bind={this.name} label="Name *" />
            <TextControl bind={this.name} label="External link" />
            <div>
              <TextControl bind={this.name} label="Max Editions" />
              <p class="mt-1 text-xs text-gray-300">
                Number of Editions that will be created
              </p>
            </div>
            <TextControl bind={this.price} label="Price *" />
          </div>
        </div>
        {/* SIDE B */}
        <div class="w-96">
          <div>
            <SimpleTitle>
              <span class="text-rose">Side B</span> - NFT for donation
            </SimpleTitle>
          </div>
          <div class="mt-10">
            <Label>Image, Video, Audio, or 3D Model *</Label>
            <p class="text-xs text-gray-300">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateNFT
