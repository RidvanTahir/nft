import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import{
  wrapper,
  image,
  artistInfo,
  artistName,
  fullName
} from "./nft.module.css"

export const NFT = ({ nft, slug }) => {
  console.log("nft in nft: " + JSON.stringify(nft));
  const pic = getImage(nft.image.localFile)
  return (
    <Link
    className={wrapper}
    to={slug}>
      <GatsbyImage
      className={image}
      image={pic}
      />
      <div className={artistInfo}>
        <p className={artistName}>
          {nft.name}#{nft.number}
        </p>
      </div>
    </Link>
  )
}

export default NFT;