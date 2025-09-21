import React from 'react'
import Image from 'next/image'
import getPageMetadata from '../../SEO/seo'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import QuoteModal from '../../components/Quote/QuoteModal'
import { BsCheckCircle, BsShield, BsBox, BsClock, BsHeart } from 'react-icons/bs'
import { FaBox, FaGlassCheers, FaTshirt, FaCouch, FaWineGlass } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'

const PackingServices = () => {
  const features = [
    {
      icon: <BsBox className="text-[#FF5000] text-3xl" />,
      title: "Professional Packing Materials",
      description: "High-quality boxes, bubble wrap, packing paper, and protective materials for all item types."
    },
    {
      icon: <FaWineGlass className="text-[#FF5000] text-3xl" />,
      title: "Fragile Item Specialists",
      description: "Expert handling of delicate items including artwork, antiques, electronics, and glassware."
    },
    {
      icon: <BsClock className="text-[#FF5000] text-3xl" />,
      title: "Time-Saving Service",
      description: "Our professional packers can pack your entire home in a fraction of the time it would take you."
    },
    {
      icon: <BsShield className="text-[#FF5000] text-3xl" />,
      title: "Damage Protection",
      description: "Professional packing techniques that minimize damage risk during transport and storage."
    }
  ]

  const packingServices = [
    {
      title: "Full Home Packing",
      description: "Complete packing service for your entire household from kitchen to bedroom.",
      price: "From KSh 25,000",
      icon: <FaBox className="text-[#FF5000] text-4xl" />,
      features: ["All rooms included", "Quality packing materials", "Inventory documentation", "Unpacking available"]
    },
    {
      title: "Partial Packing Services",
      description: "Selective packing for specific rooms or fragile items only.",
      price: "From KSh 8,000",
      icon: <FaWineGlass className="text-[#FF5000] text-4xl" />,
      features: ["Choose specific items", "Fragile items priority", "Custom solutions", "Flexible scheduling"]
    },
    {
      title: "Furniture Protection",
      description: "Professional wrapping and protection for furniture and large items.",
      price: "From KSh 5,000",
      icon: <FaCouch className="text-[#FF5000] text-4xl" />,
      features: ["Furniture padding", "Plastic wrapping", "Corner protection", "Scratch prevention"]
    },
    {
      title: "Unpacking Services", 
      description: "Complete unpacking and placement service at your new location.",
      price: "From KSh 15,000",
      icon: <BsCheckCircle className="text-[#FF5000] text-4xl" />,
      features: ["Room-by-room unpacking", "Item placement", "Debris removal", "Organization assistance"]
    }
  ]

  const itemTypes = [
    {
      category: "Kitchen Items",
      items: ["Dishes & Glassware", "Appliances", "Cookware", "China & Crystal"],
      icon: <FaGlassCheers className="text-[#FF5000] text-2xl" />
    },
    {
      category: "Electronics",
      items: ["TVs & Monitors", "Computers", "Sound Systems", "Gaming Consoles"],
      icon: <BsBox className="text-[#FF5000] text-2xl" />
    },
    {
      category: "Clothing & Textiles",
      items: ["Wardrobe Boxes", "Seasonal Clothes", "Bedding", "Curtains & Drapes"],
      icon: <FaTshirt className="text-[#FF5000] text-2xl" />
    },
    {
      category: "Special Items",
      items: ["Artwork", "Mirrors", "Lamps", "Books & Documents"],
      icon: <BsHeart className="text-[#FF5000] text-2xl" />
    }
  ]

  const process = [
    {
      step: "1",
      title: "Pre-Packing Assessment",
      description: "We visit your home to assess items, provide inventory, and determine packing requirements."
    },
    {
      step: "2",
      title: "Material Preparation",
      description: "We bring all necessary packing materials including boxes, padding, and protective wrapping."
    },
    {
      step: "3",
      title: "Professional Packing",
      description: "Our trained packers carefully wrap, cushion, and pack your belongings room by room."
    },
    {
      step: "4",
      title: "Labeling & Documentation",
      description: "Each box is labeled with contents and destination room for easy unpacking."
    }
  ]

  const packingTips = [
    "Start packing non-essential items early",
    "Use proper box sizes - heavy items in small boxes",
    "Wrap fragile items individually",
    "Fill empty spaces to prevent shifting",
    "Label boxes clearly with contents and room",
    "Keep important documents with you"
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("packing-services", {
    location: 'Nairobi',
    service: 'packing-services',
    customTitle: 'Professional Packing Services Nairobi | Expert Packers Kenya',
    customDescription: 'Professional packing services in Nairobi, Kenya. ✓ Expert packers ✓ Quality materials ✓ Fragile item specialists ✓ Full & partial packing. Call +254 721 410 517!',
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
        image="professional-packing-service.png" 
        text="Professional Packing Services" 
        alt="Taylor Movers Kenya professional packers carefully packing household items with quality materials"
      />

      {/* Hero Section */}
      <div className="container my-12">
        <div className="row items-center">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold text-[#FF5000] mb-4">
              Expert Packing Services in Nairobi
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Packing can be the most time-consuming and stressful part of moving. Let Taylor Movers Kenya's 
              professional packers handle it for you! Our experienced team uses high-quality materials and 
              proven techniques to ensure your belongings are safely packed and protected during your move.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <BsBox className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">Over 10,000 homes packed successfully</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <BsShield className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">Damage protection guarantee</span>
            </div>
            <QuoteModal quotebtn="orange" />
          </div>
          <div className="col-md-6">
            <div className="relative">
              <Image
                src="/assets/services/professional-packers-nairobi.jpg"
                alt="Professional packers from Taylor Movers Kenya carefully packing delicate items"
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
            Why Choose Our Packing Services?
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

      {/* Packing Services Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Our Packing Services
        </h2>
        <div className="row">
          {packingServices.map((service, index) => (
            <div key={index} className="col-md-6 mb-8">
              <div className="border border-[#FF5000] rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-[#FF5000] ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-[#FF5000] mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <BsCheckCircle className="text-[#FF5000] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Types Section */}
      <div className="bg-[#F8F9FA] py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Items We Pack
          </h2>
          <div className="row">
            {itemTypes.map((type, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <div className="mb-4">{type.icon}</div>
                  <h3 className="font-bold text-xl text-[#FF5000] mb-4">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Our Packing Process
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

      {/* Packing Tips Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Professional Packing Tips
          </h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packingTips.map((tip, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <BsCheckCircle className="text-[#FF5000] text-xl mr-3 mt-1" />
                    <p className="font-medium text-gray-700">{tip}</p>
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
          Packing Services FAQs
        </h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">How much do packing services cost in Nairobi?</h3>
                <p className="text-gray-700">
                  Packing service costs depend on the size of your home and items to be packed. Full home packing starts from 
                  KSh 25,000, partial packing from KSh 8,000, and furniture protection from KSh 5,000.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Do you provide packing materials?</h3>
                <p className="text-gray-700">
                  Yes! We provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, 
                  and protective blankets. All materials are included in our service pricing.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">How long does packing take?</h3>
                <p className="text-gray-700">
                  Packing time varies by home size. A 1-bedroom apartment typically takes 4-6 hours, 
                  a 3-bedroom house takes 1-2 days, and larger homes may take 2-3 days.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Do you offer unpacking services?</h3>
                <p className="text-gray-700">
                  Absolutely! We offer complete unpacking services at your new location, including item placement 
                  in designated rooms and removal of packing materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF5000] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Packing?</h2>
          <p className="text-xl mb-8">
            Save time and stress with our expert packing services. Get your free quote today!
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
            Last-minute packing services available
          </p>
        </div>
      </div>
    </div>
  )
}

export default PackingServices