import React from "react";

const Menu = () => {
    return (
        <>
        <div class="menu all">
        <h2 class="our-menu">Our Menu</h2>
        <div class="row row-cols-1 row-cols-md-4">
          <div class="col mb-3">
            <div class="card">
              <div className="sale">Sale</div>
              <img src="./images/menu1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Margherita Pizza</h5>
                <p class="card-text"><del>$40.00</del><span className='new-price'>$24.00</span></p>
                <a href="#" class="btn btn-dark w-100 buy-btn">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
              <img src="./images/menu2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mushroom Pizza</h5>
                <p class="card-text">$25.00</p>
                <a href="#" class="btn btn-dark w-100 buy-btn">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
            <div className="sale">New</div>
              <img src="./images/menu3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hawaiian Pizza</h5>
                <p class="card-text">$30.00</p>
                <a href="#" class="btn btn-dark w-100 buy-btn">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
            <div className="sale">Sale</div>
              <img src="./images/menu4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pesto Pizza</h5>
                <p class="card-text"><del>$50.00</del><span className='new-price'>$30.00</span></p>
                <a href="#" class="btn btn-dark w-100 buy-btn">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default Menu;