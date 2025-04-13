import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ProductGallery from '../components/ProductGallery';

const interiorProducts = [
  {
    id: 1,
    image: "../images/InteriorDecoration/ModernLivingSpaces.jpg",
    title: "Modern Living Spaces",
    description: "Contemporary interior designs for modern living"
  },
  {
    id: 2,
    image: "../images/InteriorDecoration/CustomWallFinishes3.jpg",
    title: "Custom Wall Finishes",
    description: "Unique wall treatments and artistic finishes"
  },
  {
    id: 3,
    image: "../images/InteriorDecoration/KitchenRenovations.jpg",
    title: "Kitchen Renovations",
    description: "Complete kitchen transformations with custom finishes"
  },
  {
    id: 4,
    image: "../images/InteriorDecoration/OfficeSpaces.jpg",
    title: "Office Spaces",
    description: "Professional office interior design and decoration"
  },
  {
    id: 5,
    image: "../images/InteriorDecoration/DecorativeElements.jpg",
    title: "Decorative Elements",
    description: "Artistic touches that elevate your space"
  }
];

const InteriorCrafts = () => {
  return (
    <div className="pt-24">
      <ServiceSection
        title="Painting & Interior Decoration"
        description="Transform your spaces with our expert interior decoration and painting services. We blend artistry with functionality to create environments that inspire and comfort."
        features={[
          'Custom Wall Painting',
          'Interior Design Consultation',
          'Decorative Elements',
          'Space Optimization'
        ]}
        image="../images/InteriorDecoration/FirstImage.jpg"
        imageAlt="Interior Decoration Services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
        <ProductGallery products={interiorProducts} />
      </div>
    </div>
  );
};

export default InteriorCrafts;