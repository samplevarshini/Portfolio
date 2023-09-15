import React from 'react'

const Contact = () => {
  return (
    <div>
 <section class="contact section" id="contact">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-map-marker"></i></div>
              <h4>Address</h4>
              <p>Your Address</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-phone"></i></div>
              <h4>Call Us On</h4>
              <p>Your Number</p>
            </div>
            
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-envelope"></i></div>
              <h4>Email</h4>
              <p>youremail@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <form 
              class="contact-form padd-15">
              <div class="row">
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name*"/>
                  </div>
                </div>
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email*"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject*"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Your Message*"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 padd-15">
                  <button type="submit" class="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact