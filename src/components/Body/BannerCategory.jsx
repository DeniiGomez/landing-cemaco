import React from 'react'

export const BannerCategory = ({ picture, title, link }) => (
  <div className="is-flex">
    {/*Banner Category*/}
    <div className="banner-category">
      <figure className="image ">
        <img src={picture} alt="" />
      </figure>
      <div className="description">
        <div className="columns is-mobile m-0 is-vcentered">
          <div className="column">
            <p className="is-size-3 is-size-4-mobile has-text-weight-semibold">
              {title}
            </p>
            <a href={link} className="is-size-5 has-text-dark">Ver mas</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
