import Image from "next/image"

function Dock() {
  return (
    <div className="w-[95%] p-2 mx-auto bg-purple-200/50 backdrop-blur-md rounded-2xl">
      <div className="flex justify-around w-100 gap-x-2">
        <Image src="/macos/finder.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/photos.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/mail.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/whatsapp.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/vscode.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/photoshop.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/music.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/spotify.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/folder.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/settings.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/finder.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/photos.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/mail.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/vscode.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/music.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/folder.png" alt="" layout="fixed" width={45} height={45} />
        <Image src="/macos/settings.png" alt="" layout="fixed" width={45} height={45} />
      </div>
    </div>
  )
}

export default Dock