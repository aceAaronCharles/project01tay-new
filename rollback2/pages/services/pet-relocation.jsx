import React from 'react'
import Image from 'next/image'
import getPageMetadata from '../../SEO/seo'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import QuoteModal from '../../components/Quote/QuoteModal'
import { BsCheckCircle, BsShield, BsTruck, BsClock, BsHeart } from 'react-icons/bs'
import { FaDog, FaCat, FaPlane } from 'react-icons/fa'
import { GiDogBowl, GiBirdCage } from 'react-icons/gi'

const PetRelocation = () => {
  const features = [
    {
      icon: <BsHeart className="text-[#FF5000] text-3xl" />,
      title: "Pet-First Approach",
      description: "We prioritize your pet's comfort and safety throughout the entire relocation process."
    },
    {
      icon: <BsShield className="text-[#FF5000] text-3xl" />,
      title: "Licensed & Certified",
      description: "Fully licensed pet transport service with veterinary partnerships and health certifications."
    },
    {
      icon: <BsCheckCircle className="text-[#FF5000] text-3xl" />,
      title: "Door-to-Door Service",
      description: "Complete pet relocation from your current home to your new destination anywhere in Kenya or internationally."
    },
    {
      icon: <BsClock className="text-[#FF5000] text-3xl" />,
      title: "24/7 Support",
      description: "Round-the-clock support and updates during your pet's journey for complete peace of mind."
    }
  ]

  const services = [
    {
      title: "Domestic Pet Moving",
      description: "Safe relocation of pets within Kenya to any city or region.",
      price: "From KSh 5,000",
      icon: <FaDog className="text-[#FF5000] text-4xl" />,
      features: ["Health certificate assistance", "Climate-controlled transport", "Real-time updates", "Pet-friendly stops"]
    },
    {
      title: "International Pet Shipping",
      description: "Complete international pet relocation with all documentation and quarantine arrangements.",
      price: "From KSh 150,000",
      icon: <FaPlane className="text-[#FF5000] text-4xl" />,
      features: ["IATA-compliant carriers", "Import/export permits", "Quarantine coordination", "Veterinary clearances"]
    },
    {
      title: "Exotic Pet Transport",
      description: "Specialized transport for birds, reptiles, and other exotic pets.",
      price: "From KSh 8,000",
      icon: <GiBirdCage className="text-[#FF5000] text-4xl" />,
      features: ["Species-specific care", "Temperature control", "Specialized equipment", "Expert handling"]
    },
    {
      title: "Pet Care Packages",
      description: "Additional services including boarding, grooming, and veterinary care.",
      price: "From KSh 2,000",
      icon: <GiDogBowl className="text-[#FF5000] text-4xl" />,
      features: ["Temporary boarding", "Health checkups", "Grooming services", "Pet supplies"]
    }
  ]

  const process = [
    {
      step: "1",
      title: "Pet Assessment & Consultation",
      description: "We assess your pet's health, temperament, and specific needs while discussing your relocation requirements."
    },
    {
      step: "2",
      title: "Documentation & Health Clearances", 
      description: "We help obtain all necessary health certificates, vaccinations, and permits required for your pet's journey."
    },
    {
      step: "3",
      title: "Custom Transport Planning",
      description: "We create a customized transport plan considering your pet's comfort, travel time, and destination requirements."
    },
    {
      step: "4",
      title: "Safe Transport & Delivery",
      description: "Your pet travels in comfort with regular monitoring and is safely delivered to their new home."
    }
  ]

  const petTypes = [
    "Dogs & Puppies", "Cats & Kittens", "Birds (Parrots, Canaries)", "Rabbits & Guinea Pigs", 
    "Reptiles (Snakes, Lizards)", "Fish & Aquatic Pets", "Hamsters & Small Mammals", "Exotic Pets"
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("pet-relocation", {
    location: 'Nairobi',
    service: 'pet-relocation',
    customTitle: 'Professional Pet Relocation Services Nairobi | Safe Pet Transport Kenya',
    customDescription: 'Expert pet relocation services in Kenya. ✓ Licensed pet transport ✓ International shipping ✓ Health certifications ✓ Door-to-door service. Call +254 721 410 517!',
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
        image="pet-relocation-service.png" 
        text="Professional Pet Relocation" 
        alt="Happy pets being safely transported by Taylor Movers Kenya pet relocation specialists"
      />

      {/* Hero Section */}
      <div className="container my-12">
        <div className="row items-center">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold text-[#FF5000] mb-4">
              Safe & Caring Pet Relocation Services
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Moving with your beloved pets? We understand that your furry, feathered, or scaled family members 
              deserve the same care and attention as any family member. Our pet relocation specialists ensure 
              your pets travel safely and comfortably to their new home.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <FaDog className="text-[#FF5000] text-2xl" />
              <FaCat className="text-[#FF5000] text-2xl" />
              <GiBirdCage className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">All pets welcome</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <BsShield className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700">Licensed & insured pet transport</span>
            </div>
            <QuoteModal quotebtn="orange" />
          </div>
          <div className="col-md-6">
            <div className="relative">
              <Image
                src="/assets/services/pet-transport-happy.jpg"
                alt="Professional pet transport service with happy dogs and cats in Nairobi"
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
            Why Choose Our Pet Relocation Services?
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

      {/* Services Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Our Pet Relocation Services
        </h2>
        <div className="row">
          {services.map((service, index) => (
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

      {/* Pet Types Section */}
      <div className="bg-[#F8F9FA] py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Pets We Transport
          </h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {petTypes.map((pet, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                    <BsCheckCircle className="text-[#FF5000] text-2xl mx-auto mb-2" />
                    <p className="font-medium text-gray-700">{pet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
          Our Pet Relocation Process
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

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#FF5000] mb-12">
            Pet Relocation FAQs
          </h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border-b-4 border-[#FF5000]">
                  <h3 className="font-bold text-xl mb-3 text-[#FF5000]">What documents does my pet need for relocation?</h3>
                  <p className="text-gray-700">
                    For domestic moves, pets need current vaccination records and health certificates. International relocations 
                    require additional documentation including import permits, quarantine arrangements, and specific vaccinations 
                    depending on the destination country.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-b-4 border-[#FF5000]">
                  <h3 className="font-bold text-xl mb-3 text-[#FF5000]">How long does pet relocation take?</h3>
                  <p className="text-gray-700">
                    Domestic pet relocation typically takes 1-3 days depending on distance. International relocations can take 
                    2-6 weeks due to documentation processing, health clearances, and quarantine requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-b-4 border-[#FF5000]">
                  <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Is pet relocation safe?</h3>
                  <p className="text-gray-700">
                    Yes! We use IATA-approved carriers, maintain climate control, provide regular monitoring, and have partnerships 
                    with veterinarians. Our team is trained in pet handling and emergency procedures.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-b-4 border-[#FF5000]">
                  <h3 className="font-bold text-xl mb-3 text-[#FF5000]">Can I track my pet during transport?</h3>
                  <p className="text-gray-700">
                    Absolutely! We provide regular updates via phone calls and messages. For long-distance moves, you'll receive 
                    photos and status updates throughout your pet's journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF5000] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Relocate Your Pet?</h2>
          <p className="text-xl mb-8">
            Let our pet relocation experts handle your beloved companion's journey with the care they deserve.
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
            Emergency pet transport available 24/7
          </p>
        </div>
      </div>
    </div>
  )
}

export default PetRelocation