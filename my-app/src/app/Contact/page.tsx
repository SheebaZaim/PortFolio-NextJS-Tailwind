import React from 'react'


      const Contact = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
    <h1 className="text-4xl font-semibold mb-4">Contact Me</h1>
    <p className="text-center mb-8">Feel free to reach out using any of the methods below!</p>

    {/* Contact Details Section */}
    <div className="flex flex-col items-center space-y-6">
      




















































      
      {/* Phone Number */}
      <div className="flex items-center space-x-2">
        <img src="/images/phone.png" alt="Phone" className="w-6 h-6" />
        <span className="text-lg">+1234567890</span>
      </div>

      {/* Email Address */}
      <div className="flex items-center space-x-2">
        <img src="/images/email_icon.png" alt="Email" className="w-6 h-6" />
        <span className="text-lg">your-email@example.com</span>
      </div>

      {/* Location */}
      {/* <div className="flex items-center space-x-2">
        <img src="/images/location-icon.png" alt="Location" className="w-6 h-6" />
        <span className="text-lg">Your City, Country</span>
      </div> */}
      
    </div>
  </div>
);



export default Contact
