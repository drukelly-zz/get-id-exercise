import React from 'react'
import styled from 'styled-components'
import tc from 'tachyons-components'

const PhotoContainer = tc('div')`
pt3
`
const Photo = styled('div')`
background-color: lightblue;
background-position: 50% 50%; 
background-repeat: no-repeat;
background-size: cover;
border-radius: 64px;
height: 64px;
margin: auto;
width: 64px;
`

const CardDisplay = props => {
  return (
    <div className='bg-white-30 link mh2 mv2-m mv1 near-black pa2 tc w-90 w-25-l'>
      <PhotoContainer>
        <Photo style={{ backgroundImage: `url(${props.image})` }} />
      </PhotoContainer>
      <h3 className='fw2'>#{props.jersey_number} <b>{props.name}</b></h3>
    </div>
  )
}

export default CardDisplay