import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CoverDesk, CuidadoMonstruo, CuidadoMonstruoMobile, Logo, Facebook, Instagram, Location, ManchaAmarilla, MounstruoDesk, LogoGoplek, Dulce1, Dulce2, Dulce3, Dulce4, Dulce5, CoverMobile, MounstruoMobile } from 'ui'
import { ScrollParallax } from 'react-just-parallax'

export default function Cover(){
    return(
        <section className='' id='cover'>
            <div className='imagen-desk'>
                <Image src={CoverDesk} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' quality={100} />
            </div>
            <div className='imagen-mobile'>
                <Image src={CoverMobile} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' quality={100} />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='dulce-1'>
                        <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                            <Image src={Dulce1} layout="fill" alt='Dulces a granel' quality={100} />
                        </ScrollParallax>
                    </div>
                    <div className='logo'>
                        <a href="https://gulsig.com/">
                            <Image src={Logo} quality={100} alt='Gulsig a granel tienda y proveedor de dulces a granel' />
                        </a>
                    </div>
                    <div className='dulce-2'>
                        <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                            <Image src={Dulce4} layout="fill" alt='Dulces a granel' quality={100} />
                        </ScrollParallax>
                    </div>
                    <div className='text-logo-desk'>
                        <Image src={CuidadoMonstruo} layout="fill" quality={100} />
                    </div>
                    <div className='text-logo-mobile'>
                        <Image src={CuidadoMonstruoMobile} layout="fill" quality={100} />
                    </div>
                    <div className='text'>
                        <h1>Bienvenid@ a Gulsig, una <span>experiencia creada</span> para deleitar tu paladar con la más deliciosa variedad de <span>dulces a granel.</span></h1>
                    </div>
                    <div className='dulce-3'>
                        <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                            <Image src={Dulce2} layout="fill" alt='Dulces a granel' quality={100} />
                        </ScrollParallax>
                    </div>
                    <div className='links'>
                        <a className='facebook' href='https://www.facebook.com/gulsigagranel'>
                            <Image src={Facebook} layout="fill" quality={100} alt="Logo Facebook" />
                        </a>
                        <a className='instagram' href='https://www.instagram.com/gulsig.agranel/'>
                            <Image src={Instagram} layout="fill" quality={100} alt="Logo Instagram" />
                        </a>
                        <a className='ubicacion' href={`https://www.google.com.mx/maps/place/Val'Quirico/@19.1907152,-98.2913433,18.25z/data=!4m5!3m4!1s0x85cfc54b3b9e5361:0xb2cb7e01812fff0a!8m2!3d19.1909589!4d-98.2909205`}>
                            <Image src={Location} layout="fill" quality={100} alt="Pin" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='mancha'>
                <Image src={ManchaAmarilla} layout="fill" quality={100} alt="Mancha de dulce gulsig" />
            </div>
            <div className='dulce-4'>
                <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                    <Image src={Dulce5} layout="fill" alt='Dulces a granel' quality={100} />
                </ScrollParallax>
            </div>
            <div className='derechos'>
                <h6>2022 ©  Gulsig · Todos los derechos Reservados</h6>
                <div className='goplek'>
                    <Image src={LogoGoplek} layout="fill" quality={100} alt="Logo Goplek" />
                </div>
            </div>
            <div className='dulce-5'>
                <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                    <Image src={Dulce3} layout="fill" alt='Dulces a granel' quality={100}/>
                </ScrollParallax>
            </div>
            <div className='monstruo-desk'>
                <Image src={MounstruoDesk} layout="fill" quality={100} />
            </div>
            <div className='monstruo-mobile'>
                <Image src={MounstruoMobile} layout="fill" quality={100} />
            </div>
        </section>
    )
}