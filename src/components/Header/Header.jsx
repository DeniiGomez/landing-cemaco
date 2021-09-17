import React from 'react'
import './Header.css'

import jugueton from '../../images/jugueton.png'
import juguetonBebe from '../../images/bebe-jugueton.png'
import logoCemaco from '../../images/logo.jpg'

export const Header = () => {
  return (
    <>
      <div className="container brands-header">
        <div className="columns is-multiline is-mobile is-centered my-0">
          <div className="column logo has-text-centered py-0 is-one-third-mobile is-3-tablet is-2-desktop is-1-widescreen has-background-white">
            <figure className="">
              <img src={jugueton} alt="" />
            </figure>
          </div>
          <div className="column logo-cemaco has-text-centered py-0 is-one-third-mobile is-3-tablet is-2-desktop is-1-widescreen cemaco-header">
            <figure>
              <img src={logoCemaco} alt="" />
            </figure>
          </div>
          <div className="column logo has-text-centered py-0 is-one-third-mobile is-3-tablet is-2-desktop is-1-widescreen has-background-white">
            <figure className="">
              <img src={juguetonBebe} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="cemaco-header">
        <div className="container px-3">
          <div className="columns is-multiline is-mobile is-vcentered my-0">
            <div className="column is-one-quarter-tablet my-1 has-text-white has-text-centered">
              <figure>
                <img src={logoCemaco} alt="" />
              </figure>   
            </div>
            <div className="column is-tow-thrids-tablet is-full-mobile order-end my-1">
              <input className="input is-rounded" type="text" placeholder="Buscar"/>
            </div>
            <div className="column is-one-quarter-tablet my-1 has-text-white has-text-centered">items</div>
          </div>
          <div className="columns is-multiline is-mobile my-0">
            <div className="column">
              <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between has-text-white">
                <div className="mr-2">Direcciones</div>
                <div className="is-flex">
                  <p className="">Prociones</p>
                  <p className="ml-2">Bodas</p>
                  <p className="ml-2">Mas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
