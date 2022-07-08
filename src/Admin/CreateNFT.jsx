import Nullstack from 'nullstack'
import ButtonLink from '../layout/buttonLink'
import ImagePlaceholder from '../layout/imagePlaceholder'
import Label from '../layout/label'
import SimpleTitle from '../layout/simpleTitle'
import TextareaControl from '../layout/textareaControl'
import TextControl from '../layout/textControl'

class CreateNFT extends Nullstack {
  name = ''
  description = ''
  price = ''
  fileUrl = ''

  nameSideB = ''
  descriptionSideB = ''
  priceSideB = ''
  fileUrlSideB = ''

  async uploadImageToIPFS({ settings, ipfsClient, event }) {
    const file = event.target.files[0]
    const inputId = event.target.id
    try {
      const added = await ipfsClient.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      })
      const property = inputId.includes('SideA') ? 'fileUrl' : 'fileUrlSideB'
      this[property] = `${settings.ipfsUrl}/${added.path}`
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async uploadToIPFS({ settings, ipfsClient }) {
    const { name, description, price, fileUrl } = this
    if (!name || !description || !price || !fileUrl) {
      alert('Error!')
      return null
    }
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
    if (!url) return
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

  renderImageUpload({ id, field }) {
    return (
      <div class="flex max-h-fit items-center justify-center border-2 border-dashed border-white p-4">
        {!field && (
          <div
            class="flex w-full cursor-pointer justify-center"
            onclick={() => document.getElementById(id).click()}
          >
            <ImagePlaceholder />
          </div>
        )}
        {field && (
          <img
            onclick={() => document.getElementById(id).click()}
            class="cursor-pointer rounded"
            width="150"
            src={field}
          />
        )}
        <input
          hidden
          type="file"
          id={id}
          accept="image/*"
          oninput={this.uploadImageToIPFS}
        />
      </div>
    )
  }

  render() {
    return (
      <section class="flex gap-24 py-14 pl-10">
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
            <ImageUpload id="fileSideA" field={this.fileUrl} />
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <TextControl bind={this.name} label="Name *" />
            <TextControl bind={this.externalLink} label="External Link" />
            <div>
              <TextControl bind={this.maxEdition} label="Max Editions" />
              <p class="mt-1 text-xs text-gray-300">
                Number of Editions that will be created
              </p>
            </div>
            <div>
              <TextareaControl
                bind={this.description}
                label="Description *"
                hint="The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
              />
            </div>
            <TextControl bind={this.price} label="Price *" />
            <ButtonLink clazz="w-32" onclick={this.listNFTForSale}>
              Create NFT
            </ButtonLink>
          </div>
        </div>
        {/* SIDE B */}
        <div class="w-96">
          <div>
            <SimpleTitle>
              <span class="text-rose">Side B</span> - NFT for donation
            </SimpleTitle>
          </div>
          <div class="mt-10 flex flex-col gap-4">
            <Label>Image, Video, Audio, or 3D Model *</Label>
            <p class="text-xs text-gray-300">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
            <ImageUpload id="fileSideB" field={this.fileUrlSideB} />
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <TextControl bind={this.nameSideB} label="Name *" />
            <TextControl bind={this.externalLinkSideB} label="External Link" />
            <div>
              <TextControl bind={this.maxEditionSideB} label="Max Editions" />
              <p class="mt-1 text-xs text-gray-300">
                Number of Editions that will be created
              </p>
            </div>
            <div>
              <TextareaControl
                bind={this.descriptionSideB}
                label="Description *"
                hint="The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
              />
            </div>
            <TextControl bind={this.price} label="Price *" />
          </div>
        </div>
      </section>
    )
  }
}

export default CreateNFT
