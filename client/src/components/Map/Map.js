import React from 'react'

const Map = () => {
  return (
    <>
      <div className="find-location blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
              </div>
            </div>
          </div>
      </div>

      <div className="embed-responsive embed-responsive-21by9">
          <iframe title="This part is a map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.4600590485992!2d105.81869817968158!3d21.009693933017203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac829a312e41%3A0x513b9fd4484a9fbe!2zMTEwIFAuIFRow6FpIFRo4buLbmgsIFRydW5nIExp4buHdCwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1681035498544!5m2!1sen!2s" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
    )
}

export default Map