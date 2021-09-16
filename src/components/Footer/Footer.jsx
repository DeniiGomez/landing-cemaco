import React, { useRef } from 'react'
import { Section } from './Section'
import empresa from '../../images/empresa-certificada.png'
import './Footer.css'

export const Footer = () => {

  const sectionsFooter = [
    {
      title: "Servicios",
      list: [
        "Instalaciones",
        "Tiendas",
        "Privilegio",
        "Servicio a empresas",
        "Bodas"
      ]
    }, 
    {
      title: "Venta en linea",
      list: [
        "Retira en tienda",
        "Metodos de pago",
        "Preguntas frecuentas",
        "Privacidad y seguridad",
        "Terminos y condiciones"
      ]
    },
    {
      title: "Nuestros Valores",
      list: [
        "Sostenibilidad",
        "Garantia total",
        "Certificacion Sistema B",
      ]
    },
    {
      title: "Grupo CEMACO",
      list: [
        "Unete a nuestro equipo",
        "Sobre nosotros",
        "Deseas ser proveedor",
        "Blog",
        "Jugueton",
        "Bebe Jugueton",
      ]
    },
    {
      title: "Mantente conectado",
      list: [
        "Compra por whatsapp",
        "+(502) 7777 7777",
        "correo@correo.com",
        "Chat en linea"
      ]
    }
  ]

  const dropdownRef = useRef(null)

  const handleToggle = e => {
    const parent = e.target.parentElement.parentElement.querySelector('.content')
    const flag = parent.classList.contains('open')
    console.log(parent)
    const content = dropdownRef.current.querySelectorAll('.content')
    for(let i of content) {
      i.classList.remove('open')
    }
    //parent.classList.toggle('open') 
    if(!flag) {
      parent.classList.toggle('open') 
      //parent.classList.remove('open')
    }

    console.log(parent)
  }

  return (
    <>
    <div className="has-background-light">
    <div className="container px-3 py-5">
      <div className="columns is-mobile is-multiline is-vcentered my-0">
        <div className="column is-6-tablet is-12-mobile border">
          <div className="wrapper mr-auto is-flex is-6-tablet is-12-mobile is-flex-wrap-wrap is-align-content-center is-align-items-center">
            <div className="mx-auto">
              <div className="brand mr-3 mx-auto">
                <figure className="image is-128x128">
                  <img src={empresa} alt="" />
                </figure>
              </div>
            </div>
            <div className="column is-12-mobile has-text-centered-mobile">
                <p className="title is-5 mb-2">Somos una Empresa B</p>
                <p className="mb-2">Estamos orgullosos de ser reconocidos por los más altos estándares de sostenibilidad social y ambiental.</p>
                <a className="is-button" href="#!">Conocer mas</a>
            </div>

          </div>
        </div>
        <div className="column is-6-tablet is-12-mobile is-centered has-text-centered-mobile mt-2">
          <div className="wrapper ml-auto">
            <p className="title is-3 mb-3">Suscríbete</p>
            <p className="mb-2">Recibe ofertas, noticias y promociones</p>
            <input className="input is-rounded" type="text" placeholder="Ingresa tu email"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="cemaco-header">
    <div ref={dropdownRef} className="container cemaco-header px-3">
      <div className="columns is-mobile is-multiline my-0">
        {
          sectionsFooter.map((el, index) => (
            <Section key={index} title={el.title} list={el.list} handleToggle={handleToggle}/>
          ))
        }
      </div>
    </div>
    </div>
    <div className="has-background-white">
    <div className="container px-3">
      <div className="columns is-mobile my-0">
        <div className="column is-2-tablet is-half-mobile has-text-centered-mobile is-size-7">Politica y privacidad</div>
        <div className="column is-2-talbet is-half-mobile has-text-centered-mobile is-size-7">Terminos y condiciones</div>
      </div>
    </div>

    </div>
    </>
  )
}
