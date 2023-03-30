import React from 'react'

type TechLogoProps = {
  logo: string
  label: string
}

export const TechLogo: React.FC<TechLogoProps> = (props) => {
  const { logo, label } = props;

  return (
    <img src={logo} alt={label} className='h-32 hover:scale-105 transition-transform' />
  )
}