import React from 'react'
import LabelFlag from './ui/label.ui'
import SubTitle from './ui/subtitle.ui'
import FavoriteMenu from './Favorite'

const FavProduct = () => {
    return (
        < div className="flex flex-col items-center justify-center mt-20 gap-4" >
            <LabelFlag>menu</LabelFlag>
            <SubTitle>
                our favorite menu
            </SubTitle>

            <FavoriteMenu />
        </div >
    )
}

export default FavProduct