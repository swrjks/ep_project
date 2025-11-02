
import React from 'react';
import { InstallationIcon, MaintenanceIcon, FilterIcon, RepairIcon } from './icons';

const services = [
  {
    icon: <InstallationIcon className="h-10 w-10 text-blue-500" />,
    name: 'Professional Installation',
    description: 'Our certified technicians ensure a seamless and correct installation of your new water purifier.',
  },
  {
    icon: <MaintenanceIcon className="h-10 w-10 text-blue-500" />,
    name: 'Regular Maintenance & AMC',
    description: 'We offer Annual Maintenance Contracts (AMC) to keep your purifier in top condition, ensuring longevity.',
  },
  {
    icon: <FilterIcon className="h-10 w-10 text-blue-500" />,
    name: 'Filter Replacement & Cleaning',
    description: 'Timely filter replacement and cleaning services to guarantee the purest drinking water for your family.',
  },
  {
    icon: <RepairIcon className="h-10 w-10 text-blue-500" />,
    name: 'Expert Repair Services',
    description: 'Facing issues? Our expert team is ready to diagnose and fix any problem with your water purifier quickly.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; name: string; description: string }> = ({ icon, name, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-blue-100 rounded-full p-4 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Comprehensive care for your water purifier to ensure its performance and longevity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
