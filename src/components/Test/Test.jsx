import Image from 'next/image'

import MySvg from './smiling-face-with-heart-eyes.svg?url'

export const Test = () => {
  return (
    <>
      <div>{'Test components with SVG'}</div>
      <Image src={MySvg} width={40} height={40} alt={'smile'} />
    </>
  )
}
