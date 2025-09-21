import React from 'react'
import Image from 'next/image'
import getPageMetadata from '../../SEO/seo'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import QuoteModal from '../../components/Quote/QuoteModal'
import { BsCheckCircle, BsShield, BsTools, BsClock, BsHouse } from 'react-icons/bs'
import { FaCouch, FaBed, FaChair, FaTable } from 'react-icons/fa'
import { GiWoodPile, GiScrewdriver } from 'react-icons/gi'

const FurnitureAssembly = () => {
  const features = [
    {
      icon: <BsTools className="text-[#FF5000] text-3xl" />,
      title: "Professional Tools",
      description: "Complete set of professional tools for all furniture types and assembly requirements."
    },
    {
      icon: <BsClock className="text-[#FF5000] text-3xl" />,
      title: "Expert Assembly Team",
      description: "Experienced furniture assemblers who can handle complex pieces quickly and correctly."
    },
    {
      icon: <BsShield className="text-[#FF5000] text-3xl" />,
      title: "Assembly Guarantee",
      description: "100% satisfaction guarantee on all furniture assembly work with warranty coverage."
    },
    {
      icon: <BsHouse className="text-[#FF5000] text-3xl" />,
      title: "On-Site Service",
      description: "We come to your location with all necessary tools and equipment for assembly."
    }
  ]

  const furnitureTypes = [
    {
      title: "Bedroom Furniture",
      description: "Beds, wardrobes, dressers, nightstands, and all bedroom furniture assembly.",
      price: "From KSh 3,000",
      icon: <FaBed className="text-[#FF5000] text-4xl" />,
      items: ["Beds & Bed Frames", "Wardrobes", "Dressers", "Nightstands", "Chest of Drawers"]
    },
    {
      title: "Living Room Furniture",
      description: "Sofas, coffee tables, TV stands, and entertainment center assembly.",
      price: "From KSh 2,500",
      icon: <FaCouch className="text-[#FF5000] text-4xl" />,
      items: ["Sofas & Sectionals", "Coffee Tables", "TV Stands", "Bookcases", "Entertainment Centers"]
    },
    {
      title: "Dining Room Sets",
      description: "Dining tables, chairs, buffets, and complete dining room furniture.",
      price: "From KSh 4,000",
      icon: <FaTable className="text-[#FF5000] text-4xl" />,
      items: ["Dining Tables", "Dining Chairs", "Buffets & Sideboards", "China Cabinets", "Bar Sets"]
    },
    {
      title: "Office Furniture",
      description: "Desks, office chairs, filing cabinets, and workspace furniture assembly.",
      price: "From KSh 2,000",
      icon: <FaChair className="text-[#FF5000] text-4xl" />,
      items: ["Office Desks", "Office Chairs", "Filing Cabinets", "Bookcases", "Conference Tables"]
    }
  ]

  const brands = [
    "IKEA", "Ashley", "Wayfair", "Amazon Furniture", "Local Manufacturers", 
    "Custom Furniture", "Imported Furniture", "All Major Brands"
  ]

  const process = [
    {
      step: "1",
      title: "Schedule Assessment",
      description: "Contact us with furniture details and we'll schedule a convenient time for assembly."
    },
    {
      step: "2",
      title: "Professional Arrival",
      description: "Our assembly team arrives with all necessary tools and equipment for the job."
    },
    {
      step: "3",
      title: "Expert Assembly",
      description: "We carefully assemble your furniture following manufacturer instructions and best practices."
    },
    {
      step: "4",
      title: "Quality Check & Cleanup",
      description: "Final quality inspection, positioning of furniture, and cleanup of assembly materials."
    }
  ]

  const benefits = [
    "Save time and avoid frustration",
    "Professional results with warranty",
    "Proper tools for every furniture type", 
    "Safe and secure assembly",
    "Furniture positioning and setup",
    "Cleanup of packaging materials"
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("furniture-assembly", {
    location: 'Nairobi',
    service: 'furniture-assembly',
    customTitle: 'Professional Furniture Assembly Services Nairobi | Expert Assembly Kenya',
    customDescription: 'Expert furniture assembly services in Nairobi, Kenya. ✓ IKEA specialists ✓ Office furniture ✓ Home assembly ✓ Tool included. Call +254 721 410 517!',
    includeService: true,
    includeLocalBusiness: false
  })

  return (
    <div className="w-full">
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.openGraph.title} />
        <meta property="og:description" content={seoData.openGraph.description} />
        <meta property="og:type" content={seoData.openGraph.type} />
      </Head>

      <Jumbotron 
        image="furniture-assembly-service.png" 
        text="Professional Furniture Assembly" 
        alt="Taylor Movers Kenya professional assembling furniture with proper tools and expertise"
      />

      {/* Hero Section */}
      <div className="container my-12">
        <div className="row items-center">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold text-[#FF5000] mb-4">
              Expert Furniture Assembly Services
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Struggling with furniture assembly instructions? Let Taylor Movers Kenya's professional 
              assembly team handle it for you! We specialize in assembling all types of furniture from 
              IKEA to custom pieces, ensuring everything is built correctly and safely.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <BsTools className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">Over 5,000 pieces assembled</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <BsShield className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">100% satisfaction guarantee</span>
            </div>
            <QuoteModal quotebtn="orange" />
          </div>
          <div className="col-md-6">
            <div className="relative">
              <Image
                src="/assets/services/furniture-assembly-professionals.jpg"
                alt="Professional furniture assemblers from Taylor Movers Kenya working on bedroom furniture"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Why Choose Our Furniture Assembly Service?
          </h2>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Furniture Types Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Furniture Assembly Services
        </h2>
        <div className="row">
          {furnitureTypes.map((furniture, index) => (
            <div key={index} className="col-md-6 mb-8">
              <div className="border border-[#FF5000] rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  {furniture.icon}
                  <h3 className="text-xl font-bold text-[#FF5000] ml-3">{furniture.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{furniture.description}</p>
                <div className="text-2xl font-bold text-[#FF5000] mb-4">{furniture.price}</div>
                <ul className="space-y-1">
                  {furniture.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <BsCheckCircle className="text-[#FF5000] mr-2 text-sm" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-[#F8F9FA] py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Furniture Brands We Assemble
          </h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                    <GiScrewdriver className="text-[#FF5000] text-2xl mx-auto mb-2" />
                    <p className="font-medium text-gray-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your furniture brand? Contact us - we work with all manufacturers!
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Our Assembly Process
        </h2>
        <div className="row">
          {process.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF5000] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Benefits of Professional Assembly
          </h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <BsCheckCircle className="text-[#FF5000] text-xl mr-3 mt-1" />
                    <p className="font-medium text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Furniture Assembly FAQs
        </h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">How much does furniture assembly cost in Nairobi?</h3>
                <p className="text-gray-700">
                  Furniture assembly costs vary by complexity and size. Simple pieces start from KSh 2,000, 
                  bedroom sets from KSh 3,000, and complex pieces like wardrobes from KSh 4,000.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Do you bring your own tools?</h3>
                <p className="text-gray-700">
                  Yes! Our assembly team comes fully equipped with all professional tools needed for 
                  furniture assembly including electric drills, screwdrivers, and specialized hardware.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">How long does furniture assembly take?</h3>
                <p className="text-gray-700">
                  Assembly time depends on the furniture complexity. Simple items take 30-60 minutes, 
                  while complex pieces like wardrobes or dining sets can take 2-4 hours.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Do you offer assembly warranty?</h3>
                <p className="text-gray-700">
                  Yes! We provide a 30-day warranty on all assembly work. If any issues arise due to 
                  our assembly, we'll return to fix it at no additional charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF5000] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Assembly?</h2>
          <p className="text-xl mb-8">
            Skip the frustration and let our experts handle your furniture assembly needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteModal quotebtn="white" />
            <a 
              href="tel:+254721410517" 
              className="bg-white text-[#FF5000] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
            >
              Call +254 721 410 517
            </a>
          </div>
          <p className="mt-4 text-sm">
            Same-day assembly service available
          </p>
        </div>
      </div>
    </div>
  )
}

export default FurnitureAssembly