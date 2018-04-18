import React from 'react';
import './Donate.css'
const Donate = (props) => {
    return (


<div>
      <div className="ms-hero-page-override ms-hero-img-city ms-hero-bg-info">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Donate</h1>
            <h2 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Help Make Charleston Pride a Reality</h2>
            <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">A lot of time, effort, and money goes into organizing and putting on Charleston Pride. Charleston Pride Festival is funded strictly through sponsors and funds raised at events. Due to this fact, we have to raise money throughout the year in order for Charleston Pride Festival to be successful.  If you cannot make it to one of our fundraisers, you can now donate directly through the Charleston Pride Festival site!</p>
          </div>
        </div>
      </div>
    <div className="container card-hero">
        <div className="card">
            <div className="card-body">
                <iframe id="etapIframe" title="donate" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/donate.html"></iframe>
                <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
            </div>
        </div>
    </div>
</div>
)};

export default Donate;