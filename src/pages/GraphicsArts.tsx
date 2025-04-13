import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ProductGallery from '../components/ProductGallery';

const graphicsProducts = [
  {
    id: 1,
    image: "../images/graphicsDesign/hu2.jpg",
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logos, color schemes, and typography"
  },
  {
    id: 2,
    image: "../images/graphicsDesign/marketingMaterials.jpg",
    title: "Marketing Materials",
    description: "Eye-catching designs for brochures, flyers, and social media"
  },
  {
    id: 3,
    image: "../images/graphicsDesign/Tshirt-design.jpg",
    title: "Custom T-Shirt Design",
    description: "Unique and trendy t-shirt designs for your brand or event"
  },
  {
    id: 4,
    image: "../images/graphicsDesign/digitalIllustration.jpg",
    title: "Digital Illustrations",
    description: "Custom illustrations for various digital and print applications"
  },
  {
    id: 5,
    image: "../images/graphicsDesign/PackagingDesigns.jpg",
    title: "Packaging Design",
    description: "Creative packaging solutions that stand out on the shelf"
  }
];

const GraphicsArts = () => {
  return (
    <div className="pt-24">
      <ServiceSection
        title="Professional Graphics Design"
        description="Our graphics design services include branding, logo design, marketing materials, digital art, and custom T-shirt designs. We transform your ideas into visual masterpieces that communicate your message effectively."
        features={[
          'Brand Identity Design',
          'Print & Digital Media',
          'Custom Illustrations',
          'Marketing Collateral'
        ]}
        image="../images/graphicsDesign/FirstImage.jpg"
        imageAlt="Graphics Design Services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work</h2>
        <ProductGallery products={graphicsProducts} />
      </div>
    </div>
  );
};

export default GraphicsArts;