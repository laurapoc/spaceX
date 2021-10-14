import React from 'react'
import { RocketDto } from '../../types/rocketDto'

type Props = {
    rocket: RocketDto,
}

const RocketList = ({rocket}: Props) => {
    return (
        <div>
            <h1>{rocket.rocket_name}</h1>
        </div>
    )
}

export default RocketList
