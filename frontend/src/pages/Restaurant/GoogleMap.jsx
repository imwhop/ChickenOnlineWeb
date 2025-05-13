import React from 'react';


function GoogleMap() {
  return (
    <div className="map-container" style={{ marginTop: '40px' }}>
      <iframe  //dùng để nhún các trang web ngoài vào
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.304774888512!2d106.69003397407593!3d10.78638618936619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed9eab7ff4%3A0xd3a47d29ee13d999!2zMTEzIFBoYW4gxJDDoG5nIEx1LCDhuqNpIEjDoG5oLCBRdeG7kWMgMywgUXXhuq1uIDEsIEjDoCBO4buZaSwgVMOibiBI4buTbmc!5e0!3m2!1svi!2s!4v1622535052494!5m2!1svi!2s"
        width="100%"
        height="500" 
        loading="lazy" //Trì hoãn tải iframe cho đến khi người dùng cuộn đến gần nó.

          
      ></iframe>
    </div>
  );
}

export default GoogleMap;
