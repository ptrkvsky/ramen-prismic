import React from "react"
import SliceRichText from "../slices/SliceRichText"
import SliceImageDroite from "../slices/SliceImageDroite"
import SliceImageGauche from "../slices/SliceImageGauche"
import SliceImage from "../slices/SliceImage"

const RecetteSlices = ({ slices }) => {
  if (slices !== undefined) {
    return slices.map((slice, index) => {
      const res = (() => {
        switch (slice.slice_type) {
          case "section_image_2":
            return <SliceImageDroite slice={slice} />
          case "text":
            return <SliceImageGauche slice={slice} />
          case "rich_text":
            return <SliceRichText slice={slice} />
          case "image":
            return <SliceImage slice={slice} />
          default:
            return false
        }
      })()
      return res
    })
  } else {
    console.log("no slices")
  }
}

export default RecetteSlices
