import React from 'react'

export const CardProductOfert = ({ price, name, tag, currency, unit, picture}) => (
  <a href="#!">
    <div className="card is-radiusless is-shadowless product-card">
      <div className="card-image mb-auto">
        <figure className="image">
          <img src={picture} alt="" />
        </figure>
      </div>
      <div className="card-content p-1">
        <div className="content has-text-centered">
          <p className="is-size-4 is-size-5-mobile has-text-weight-semibold mb-0">
            { `${tag} ${currency}${price.split('.')[0]}`}
            <span className="is-size-6 mb-2">
              .{ price.split('.')[1] } {unit && unit}
            </span>
          </p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  </a>
)

export const CardProductSimple = ({ name, picture, url, type = "" }) => (
  <a href={url}>
    <div className="card is-radiusless is-shadowless product-card">
      <div className="card-image mb-auto">
        <figure className="image">
          <img className={type} src={picture} alt="" />
        </figure>
      </div>
      <div className="card-content p-1">
        <div className="content has-text-centered">
          <p>{name}</p>
        </div>
      </div>
    </div>
  </a>
)

export const CardProductCustom = ({ name, price, picture, brand, link, currency, tag }) => (
  <div className="card is-radiusless is-shadowless product-card">
    <div className="card-image mb-auto">
      <figure className="image">
        <img src={picture} alt="" />
      </figure>
    </div>
    <div className="card-content p-1">
      <div className="content">
        <p className="is-size-7 mb-0">{brand}</p>
        <p className="is-size-5 has-text-weight-semibold mb-5">{name}</p>
        <p className="is-size-6 is-size-5-mobile  mb-0">
          <span className="is-size-7">Desde </span>
          { `${currency}${price}`}
        </p>
        <p className="is-size-7 mb-1">{tag}</p>
        <a href="#!" className="button is-rounded is-success is-small">Ver mas</a>
      </div>
    </div>
  </div>
)

