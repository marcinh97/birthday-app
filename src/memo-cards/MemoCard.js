import React from "react"
import './styles.css'

export const MemoCard =
    ({
        imageSrc,
        imgSize,
        onClickCard
    }) => (
    <div className='memo-card'>
        <img src={imageSrc} className={'memo-image'}

        />
    </div>
)
