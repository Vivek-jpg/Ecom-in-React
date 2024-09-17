import React from "react";
import { NavLink } from "react-router-dom";
const CardComponent = () => {
    return (
        <div className="header-hero">
        <div className="container-hero">
            <div>   <div className='heading-text'>
                    <div className="h3-hero-section-text">Explore Brand New </div> <p className="h3-hero-section-text-cta">Fashion Clothes</p>
                    </div>
                    <div className="hero-btn-section" >
                    <NavLink to ="/Product">GET STARTED</NavLink>
                    <a class="bg-blue-100  text-white font-bold py-2 px-4 rounded" href="/my-cart/wishlist/wishlist.html">BUY NOW</a>
                    </div> 
                    </div>  
                    <div className="hero-img"><img src="https://img.freepik.com/free-photo/friendly-smiling-brunette-woman-ready-help-assist-holding-hands-together-looking-pleasant-standing-t-shirt-against-white-background_176420-45398.jpg?t=st=1648060035~exp=1648060635~hmac=bc222cc9ccee2dc37bb3c18f053ec07f7c305f67bc07a20c526722da3ac9932cw=900" className="hero-img-head"
                  alt="img"></img>
                </div>
               </div>
              </div>   
    )
};
export { CardComponent };