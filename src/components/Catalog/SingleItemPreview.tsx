import React from 'react';
import Image from "next/image";

interface Props {
    strokeImageUrl: string,
    coordinates: any,
    imageWidth: number,
    imageHeight: number,
    width: number,
    height: number
    handleSelection: (data: any) => void

}

const SingleItemPreview: React.FC<Props> = ({
                                                strokeImageUrl,
                                                coordinates,
                                                imageWidth,
                                                imageHeight,
                                                handleSelection,
                                                width,
                                                height
                                            }) => {

    // console.log({width, height, imageWidth, imageHeight, coordinates})
    return (
        <div style={{position: "relative", maxWidth: width, height, userSelect: "none"}} >
            {strokeImageUrl && <>
                <div style={{
                    maxWidth: width,
                    height,
                    width,
                    background: `url(${strokeImageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}/>
                {coordinates.map((crop: any, index: number) => {
                    const scaleX = width / imageWidth;
                    const scaleY = height / imageHeight;
                    return (
                        <div className="selection-div" key={`interactive-div-${index}`} style={{
                            width: crop.width * scaleX,
                            height: crop.height * scaleY,
                            transform: `translate(${crop.x * scaleX}px, ${crop.y * scaleY}px)`
                        }} onClick={() => handleSelection({
                            crop: {...crop, imageWidth, imageHeight},

                            index,
                            imageWidth,
                            imageHeight,
                            itemId: crop.id,
                            itemName: crop.name
                        })}>
                        </div>
                    )
                })}
            </>}
        </div>
    );
}

export default SingleItemPreview;