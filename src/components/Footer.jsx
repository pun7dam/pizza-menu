import React from 'react'

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer className='my-5 w-full text-center max-w-4xl font-medium'>
    {
      isOpen ? (
        <div className="bg-green-400 px-4 py-4 rounded-lg">
          <p className=''>We're open until {closeHour}:00. Come visit us or order online.</p>
        </div>
      ) : (
        <p className="bg-red-400 px-4 py-4 rounded-lg">We're closed. Come back between {openHour}:00 and {closeHour}:00.</p>
      )
    }
  </footer >;
}

export default Footer
