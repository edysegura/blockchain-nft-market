import Nullstack from 'nullstack'

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

  async testForm() {
    const { name, description, price, fileUrl } = this
    console.log({ name, description, price, fileUrl })
  }

  render() {
    return (
      <div class="flex justify-center">
        <div class="w-1/2 flex flex-col pb-12">
          <input
            placeholder="Asset Name"
            class="mt-8 border rounded p-4"
            bind={this.name}
          />
          <textarea
            placeholder="Asset Description"
            class="mt-2 border rounded p-4"
            bind={this.description}
          />
          <input
            placeholder="Asset Price in ETH"
            class="mt-2 border rounded p-4"
            bind={this.price}
          />
          <input
            type="file"
            name="Asset"
            class="my-4"
            oninput={this.uploadImageToIPFS}
          />
          {this.fileUrl && (
            <img class="rounded mt-4" width="350" src={this.fileUrl} />
          )}
          <button
            onclick={this.testForm}
            class="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
          >
            Create NFT
          </button>
        </div>
      </div>
    )
  }
}

export default CreateNFT
