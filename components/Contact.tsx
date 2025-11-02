import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const mapsQuery = "Vivekananda School, Hoskote, Bengaluru";
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const mapsRedirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;


  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-gray-300 mt-4">Have questions? We'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information & Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 max-w-lg">
              <iframe
                title="Sri Sai Ganesh Marketing Location"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href={mapsRedirectUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start space-x-4 cursor-pointer">
              <LocationMarkerIcon className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 group-hover:text-blue-400 transition-colors group-hover:underline">
                No-1, 1st Floor, Near Vivekananda School, <br />
                Kannurhalli Main Road, M V Extension, <br />
                Hoskote, Bangalore Rural - 562114
              </p>
            </a>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-blue-400" />
              <p className="text-gray-300">+91 99166 09050</p>
            </div>
            <div className="flex items-center space-x-4">
              <MailIcon className="h-6 w-6 text-blue-400" />
              <p className="text-gray-300">contact@ssgmarketing.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
             <h3 className="text-2xl font-semibold text-blue-400">Send us a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-center text-gray-400 mt-16 border-t border-gray-700 pt-8">
            <p>&copy; {new Date().getFullYear()} Sri Sai Ganesh Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;