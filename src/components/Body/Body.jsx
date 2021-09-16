import React from 'react'
import { CardProductOfert } from './CardProduct'
import { BannerCategory } from './BannerCategory'
import { CardProductSimple } from './CardProduct'
import { CardProductCustom } from './CardProduct'

import './Body.css'

const Title = ({ title, link }) => (
  <div className="title-content has-text-centered mb-4">
    <p className="is-size-3 has-text-weight-semibold">{title}</p>
    { link && <a href={link} className="is-size-5 has-text-dark">Ver todos</a>
    }
  </div>
)

export const Body = () => {

  const products = [
    {
      tag: 'Oferta',
      name: 'Moto-tool',
      price: '349.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/300x300.png',
    },
    {
      tag: 'Oferta',
      name: 'Estanteria',
      price: '129.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/300x300.png',
    },
    {
      tag: 'Oferta desde',
      name: 'Caja de herramientas',
      price: '38.49',
      currency: 'Q',
      picture: 'https://via.placeholder.com/300x300.png',
      unit: 'c/u',
    },
    {
      tag: 'Oferta',
      name: 'Pizarra acrilica',
      price: '99.99',
      picture: 'https://via.placeholder.com/300x300.png',
      currency: 'Q'
    },
  ]

  const products2 = [
    {
      tag: 'Envio gratis',
      brand: 'Black and Decker',
      name: 'Licuadora vaso plastico',
      price: '349.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/500x400.png',
      link: '#!'
    },
    {
      tag: 'Envio gratis',
      brand: 'Black and Decker',
      name: 'Licuadora vaso plastico',
      price: '349.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/500x400.png',
      link: '#!'
    },
    {
      tag: 'Envio gratis',
      brand: 'Black and Decker',
      name: 'Licuadora vaso plastico',
      price: '349.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/500x400.png',
      link: '#!'
    },
    {
      tag: 'Envio gratis',
      brand: 'Black and Decker',
      name: 'Licuadora vaso plastico',
      price: '349.99',
      currency: 'Q',
      picture: 'https://via.placeholder.com/500x400.png',
      link: '#!'
    },
  ]

  const banners = [
    {
      title: "Plomeria",
      picture: 'https://via.placeholder.com/1000x400.png',
      link: "#!",
    },
    {
      title: "Pinturas",
      picture: 'https://via.placeholder.com/1000x400.png',
      link: "#!",
    },
  ]

  return (
    <div className="has-background-white">
      <div className="alert-message notification is-warning is-radiusless has-text-centered">
        <button className="delete"></button>
        Envio gratis en tu primer compra, <a href="!#">entérate aquí</a>
      </div>
      <div className="container main px-3 py-5">
        {/*Banner*/}
        <div className="is-flex mb-5">
          <div className="banner">
            <figure className="image ">
              <img src="https://via.placeholder.com/1500x500.png" alt="" />
            </figure>
            <div className="description">
              <div className="columns is-mobile m-0 is-vcentered">
                <div className="column is-8-desktop is-12-mobile">
                  <p className="has-text-white is-size-2 px-3 has-text-weight-semibold">La mejor calidad para tus proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Products*/}
        <div className="columns is-mobile is-multiline mb-5">
          {
            products.map((item, index) => (
              <div key={index} className="column is-3-widescreen is-3-desktop is-6-tablet is-6-mobile mb-2">
                <CardProductOfert {...item}/>
              </div>
            ))
          }
        </div>
        {/*Banner 2*/}
        <div className="columns is-mobile is-multiline">
          {
            banners.map((item, index) => (
              <div key={index} className="column is-6-tablet is-12-mobile">
                <BannerCategory {...item}/>
              </div>
            ))
          }
        </div>
        {/*Department*/}
        <div className="is-flex is-align-content-center is-flex-direction-column mb-5">
          <Title title="Navega por departamento" link="#!"/>
          <div className="columns is-mobile is-multiline">
            {
              products.map((item, index) => (
                <div key={index} className="column is-2-desktop is-4-mobile">
                  <CardProductSimple name={item.name} picture={item.picture} url="#!"/>
                </div>
              ))
            }
          </div>
        </div>
        {/*Banner 3*/}
        <div className="columns is-mobile is-multiline">
          <div className="column">
            <BannerCategory picture="https://via.placeholder.com/1500x400.png" title="Autos" link="#!"/>
          </div>
        </div>
        {/*Department*/}
        <div className="is-flex is-align-content-center is-flex-direction-column mb-5">
          <Title title="Organizacion ferreteria" link="#!"/>
          <div className="columns is-mobile is-multiline">
            {
              products2.map((item, index) => (
                <div key={index} className="column is-3-desktop is-6-mobile">
                  <CardProductCustom {...item}/>
                </div>
              ))
            }
          </div>
        </div>
        {/*Brands*/}
        <div className="is-flex is-align-content-center is-flex-direction-column mb-5">
          <Title title="Las mejores marcas"/>
        </div>
        {/*Herramientas*/}
        <div className="is-flex is-align-content-center is-flex-direction-column mb-5">
          <Title title="Organizacion ferreteria" link="#!"/>
          <div className="columns is-mobile is-multiline">
            {
              products.map((item, index) => (
                <div key={index} className="column is-2-desktop is-4-mobile">
                  <CardProductSimple name={item.name} picture={item.picture} url="#!" type="is-rounded"/>
                </div>
              ))
            }
          </div>
        </div>
        {/*Banner 4*/}
        <div className="columns is-mobile is-multiline mb-2">
          <div className="column">
            <BannerCategory picture="https://via.placeholder.com/1500x400.png" title="Materiales de construccion y acabados" link="#!"/>
          </div>
        </div>
      </div>
    </div>
  )
}
