import React from 'react'

const Portfolia = () => {
  return (
    <div>
         <section class="portfolio section" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-filter padd-15">
              <button type="button" class="active" data-filter="all">All</button>
              <button type="button" data-filter="web-design">Graphics Design</button>
              <button type="button" data-filter="photography">Web Design</button>
              <button type="button" data-filter="wordpress">Wordpress</button>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-item padd-15" data-category="web-design">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/1.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Web Design</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15" data-category="wordpress">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/2.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Wordpress</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15" data-category="web-design">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/3.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Web Design</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>
           
            <div class="portfolio-item padd-15" data-category="photography">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/4.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Photography</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>
           
            <div class="portfolio-item padd-15" data-category="wordpress">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/5.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Wordpress</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15" data-category="web-design">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="images/portfolio/6.jpg" alt="portfolio"/>
                </div>
                <div class="portfolio-info">
                  <h4>Web Design</h4>
                  <div class="icon"><i class="fa fa-search"></i></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolia