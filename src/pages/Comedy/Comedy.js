import React, { Component } from "react";
import { ExternalBtn } from "../../components/LinkUtil";
import "./Comedy.css";
import { Link } from "react-router-dom";

class Comedy extends Component {
  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-img-lol ms-hero-bg-dark">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              LGBTLOL
            </h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Friday Septemper 13, @ 8:00 PM ( Doors 7:00 PM) Hall
            </h2>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Charleston Music Hall (37 John Street )
            </h2>
            <ExternalBtn
              to="https://www.ticketfly.com/purchase/event/1870417?utm_medium=bks"
              icon="ticket"
              title="Tickets"
              color="warning"
            />
            <h4 className="color-white">
              <span className="color-warning">$15</span> |{" "}
              <span className="color-warning">$10</span> with discount code{" "}
              <span className="color-warning"> chspride </span>
            </h4>
            <p className="color-white">
              This event is <strong>Free</strong> for{" "}
              <Link to="/friends-of-pride">Friends of Pride</Link>. Email{" "}
              <a href="mailto:friends@charlestonpride.org">
                friends@charlestonpride.org
              </a>{" "}
              to reserve.
            </p>
          </div>
        </div>
      </div>
    );
  }

  Comedian(props) {
    return (
      <div className="card">
        <figure className="ms-thumbnail ms-thumbnail-horizontal">
          <img
            src={
              "https://d2f908d3j7stzr.cloudfront.net/chspride/comedy/" +
              props.src +
              ".jpg"
            }
            alt={props.name}
            className="img-fluid"
          />
          <figcaption className="ms-thumbnail-caption text-center">
            <div className="ms-thumbnail-caption-content">
              <h4 className="ms-thumbnail-caption-title mb-2">{props.name}</h4>
            </div>
          </figcaption>
        </figure>
        <div className="card-body text-center">
          <div
            className={
              "btn-circle  btn-circle-raised btn-card-float right wow zoomInDown index-2 btn-circle-" +
              props.color
            }
          >
            <i className="fa fa-star" />
          </div>
          <h3 className="uppercase">
            <span className={"color-" + props.color}>
              {props.title ? props.title + ": " : ""}
            </span>
            {props.name}
          </h3>
          <div className="bio">{props.children}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="lgbtlol">
        <this.Header />
        <div className="container">
          <div className="card">
            <h3 className="text-center">
              Come celebrate humanity and show your Pride at a night of comedy
              featuring some of your favorite stand-up comics, who also just
              happen to be members of the LGBTQ community.{" "}
            </h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <this.Comedian
                  name="Ky Krebs"
                  title="Headliner"
                  src="ky_krebs"
                  color="primary"
                >
                  <strong>Ky Krebs</strong> is an Austin, TX-based stand-up
                  comedian whose queer perspective and sharp wit delve into an
                  absurd reality that manages to be both dark and playful. His
                  self-produced, self-titled album debuted at #2 on the iTunes
                  Comedy Charts. He also recently recorded his second special,
                  “Oops, All Gay Jokes” in June 2019. He is the cohost of one of
                  Austin&#39;s most popular podcasts, Extra Salty, that dives
                  deep into resentment and why people hold onto it or how they
                  manage to let resentment go. Ky has been described as &quot;a
                  Birbiglia-esque storyteller and a masterful one&quot; by
                  Dallas&#39;s TheaterJones publication. Austin&#39;s ComedyWham
                  has also said, &quot;Krebs’s story is raw, inspiring, and he
                  has plenty of experience to share about comedy, writing, and
                  life in general. In a career, as in life, where finding your
                  own voice is critical, he’s well on his way.&quot;
                </this.Comedian>
              </div>
              <div className="col-12 col-md-6">
                <this.Comedian
                  name="Jenn Synder"
                  title="Hosted By"
                  src="jenn_synder"
                  color="warning"
                >
                  At 5’2″, <strong>Jenn Snyder</strong> packs a whole lot of
                  funny in her one-two punch style of comedy. Topics ranging
                  from her days growing up as a lesbian in a “good ol’ boy” town
                  to dealing with the public on a daily basis, this comedian
                  will pull you in with her stories and leave you wanting more
                  with her quick wit and hilarious observations. Born and raised
                  in Columbia, South Carolina, her ultimate goal is to unite all
                  people through laughter. Jenn was last year’s LGBTLOL
                  headliner, and if you were there, you know she brought the
                  house down – so we couldn’t resist giving Charleston at least
                  a{" "}
                  <strong>
                    <em>little</em>
                  </strong>{" "}
                  more Jenn.
                </this.Comedian>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <this.Comedian
                  name="Shawna Jarrett"
                  title="Featuring"
                  src="shawna_jarrett"
                  color="success"
                >
                  Local favorite <strong>Shawna Jarrett</strong> makes her home
                  here in Charleston, while touring the southeast to make
                  audiences laugh from Florida up through the mid-Atlantic. Here
                  at home, she is the head comic on the Charleston Comedy Bus
                  and the host of The Get Up! comedy night (as well as a We Are
                  Family alumnus!). This is her 4 th year performing at LGBTLOL,
                  and her first year serving on the board of Charleston Pride.
                  Her material includes such topics as businesses housed in
                  former Pizza Huts, her home state of Florida, and (related)
                  the time she saw her cousin on COPS. In her free time, she
                  accidentally starts internet feuds with famous bigots.
                  <br />
                  &quot;Half as relevant as me as me&quot; - Television&#39;s
                  Nick Di Paolo, through a mouthful of Doritos
                </this.Comedian>
              </div>
              <div className="col-12 col-md-6">
                <this.Comedian
                  name="Julie Osborne"
                  src="julie_osborne"
                  color="danger"
                >
                  Atlanta GA’s <strong>Julie Osborne</strong> was born in Cocoa
                  FL and comes from a very diverse background. She started
                  performing stand-up comedy in 2011 after spending many years
                  using her wit and humor to “deal” with prison inmates as a
                  correctional officer, and in managing crazy people in
                  corporate America. Since 2012, she’s been hosting and
                  producing comedy shows for the LGBT community all over
                  Atlanta.
                </this.Comedian>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <this.Comedian name="Ava Smartt" src="ava_smartt" color="info">
                  <strong>Ava Smartt</strong> is a native Texan and trans woman
                  whose incisive comedy tinkers with subjects on the border of
                  right and wrong. Ava uses her small town charm to guide the
                  audience into a liminal space where they feel comfortable to
                  temporarily tip-toe over the blurred lines of what is and
                  isn&#39;t acceptable to laugh at.
                </this.Comedian>
              </div>
              <div className="col-12 col-md-6">
                <this.Comedian
                  name="Shaine Laine"
                  src="shaine_laine"
                  color="caution"
                >
                  <strong>Shaine Laine</strong> is an up-and-coming comic from
                  Charlotte NC, where he takes his experiences and ignites the
                  stage. From dad jokes to dark humor to tales of his
                  transition, Shaine has a story to tell, and he’ll do it with
                  equal amounts of love and satire.
                </this.Comedian>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comedy;
