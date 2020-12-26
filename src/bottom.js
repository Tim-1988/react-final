import React from 'react';
import './bottom.css'


function Bottom() {
  return (
    
    <div className="bottom-list">
       <div className="delivery"><h2 className="text">Delivery & Payment</h2></div>
       <div className="repair"><h2 className="text">Repair & Guarantee</h2></div>
       <div className="vk"><h2 className="text">VK</h2></div>
       <div className="insta"><h2 className="text">INSTAGRAM</h2></div>
       <div className="fb"><h2 className="text">FACEBOOK</h2></div>
       <div className="location"><h2 className="text">Our Location:</h2></div>
       <div className="map">MAP</div>
    </div>
  );
}

export default Bottom;