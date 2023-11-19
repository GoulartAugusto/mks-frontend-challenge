import React from 'react'
import Image from 'next/image'
import Icon from '../assets/Vector.png'

export function CartIcon() {
  return (
    <div>
        <Image src={Icon} alt='Shopping cart' width={19} height={18} />
    </div>
  )
}
