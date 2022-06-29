import Nullstack from 'nullstack'

class CreateNFT extends Nullstack {
  render() {
    return (
      <div class="flex justify-center">
        <div class="w-1/2 flex flex-col pb-12">
          <input
            placeholder="Asset Name"
            class="mt-8 border rounded p-4"
          />
          <textarea
            placeholder="Asset Description"
            class="mt-2 border rounded p-4"
          />
          <input
            placeholder="Asset Price in Eth"
            class="mt-2 border rounded p-4"
          />
          <input
            type="file"
            name="Asset"
            class="my-4"
          />
          {this.fileUrl && (
            <img class="rounded mt-4" width="350" src={this.fileUrl} />
          )}
          <button
            onclick=""
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
