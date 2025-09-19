import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Jumbotron from '../../components/jumbotron'
import QuoteModal from '../../components/Quote/QuoteModal'
import getPageMetadata from '../../SEO/seo'
import { 
  BsHouse, 
  BsBuilding, 
  BsGlobe, 
  BsBoxSeam, 
  BsTruck, 
  BsShieldCheck,
  BsCheckCircle,
  BsArrowRight,
  BsStar,
  BsPeople
} from 'react-icons/bs'
import { 
  FaWarehouse, 
  FaTools, 
  FaHandshake,
  FaDollarSign,
  FaGlobeAmericas
} from 'react-icons/fa'
import { MdSecurity, MdSupport, MdSpeed } from 'react-icons/md'
import SuccessStory from '../../components/TrustBadges'

const ServicesIndex = () => {
  // Define our core services with modern data structure
  const coreServices = [
    {
      id: 'residential',
      title: 'Residential Moving',
      subtitle: 'Home Relocations Made Easy',
      description: 'Professional residential moving services for local and long-distance relocations across Kenya.',
      icon: <BsHouse className="text-4xl" />,
      link: '/services/residential-moving',
      features: ['Local & Long-distance', 'Professional Packing', 'Insurance Coverage', '24/7 Support'],
      gradient: 'from-blue-500 to-blue-600',
      stats: '40,000+ Moves'
    },
    {
      id: 'office',
      title: 'Office Relocation',
      subtitle: 'Business Moves Without Downtime',
      description: 'Seamless office relocations with minimal business disruption and professional handling.',
      icon: <BsBuilding className="text-4xl" />,
      link: '/services/office-relocation',
      features: ['Minimal Downtime', 'IT Equipment Care', 'Weekend Moves', 'Secure Handling'],
      gradient: 'from-green-500 to-green-600',
      stats: 'Enterprise Trusted'
    },
    {
      id: 'international',
      title: 'International Moving',
      subtitle: 'Global Relocations Made Simple',
      description: 'Expert international moving services to Europe, Middle East, North America, Asia & Africa.',
      icon: <BsGlobe className="text-4xl" />,
      link: '/services/international-moving',
      features: ['Air & Sea Freight', 'Customs Clearance', 'Global Network', 'Door-to-Door'],
      gradient: 'from-purple-500 to-purple-600',
      stats: '5 Continents'
    }
  ]

  const additionalServices = [
    {
      id: 'storage',
      title: 'Storage Services',
      subtitle: 'Secure & Convenient Storage',
      description: 'Professional storage solutions with 24/7 security near JKIA.',
      icon: <FaWarehouse className="text-3xl text-[#FF5000]" />,
      link: '/services/storage-services',
      features: ['Climate Controlled', '24/7 Security', 'Near JKIA', 'Flexible Access']
    },
    {
      id: 'specialized',
      title: 'Specialized Services',
      subtitle: 'Complete Moving Support',
      description: 'Packing, custom crating, setup services, and partner network.',
      icon: <FaTools className="text-3xl text-[#FF5000]" />,
      link: '/services/specialized-services',
      features: ['Professional Packing', 'Custom Crating', 'Setup Services', 'Partner Network']
    },
    {
      id: 'consolidated',
      title: 'Consolidated Moves',
      subtitle: 'Cost-Effective Solutions',
      description: 'Share transport space and save up to 40% on moving costs.',
      icon: <FaDollarSign className="text-3xl text-[#FF5000]" />,
      link: '/services/consolidated-moves',
      features: ['Up to 40% Savings', 'Shared Transport', 'Professional Handling', 'Flexible Scheduling']
    }
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("services", {
    location: 'Nairobi',
    customTitle: 'Professional Moving Services Nairobi Kenya | Taylor Movers 2025',
    customDescription: 'Complete moving services in Nairobi & Kenya. ✓ Residential ✓ Office ✓ International ✓ Storage ✓ Specialized services. 40,000+ successful moves. Call +254 721 410 517!',
    includeLocalBusiness: true,
    includeService: false
  })

  return (
    <div className='w-full'>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.openGraph.title} />
        <meta property="og:description" content={seoData.openGraph.description} />
        <meta property="og:type" content={seoData.openGraph.type} />
      </Head>

      <Jumbotron 
        image="taylor-movers-services-hero.png" 
        text="Professional Moving Services" 
        alt="Taylor Movers Kenya comprehensive moving and relocation services"
      />

      {/* Hero Section */}
      <div className="container my-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF5000] mb-6">
            Complete Moving Solutions for Kenya
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            From residential moves to international relocations, Taylor Movers Kenya provides 
            comprehensive, professional moving services tailored to your specific needs. 
            With over 40,000 successful moves, we're Kenya's most trusted moving company.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+254721410517" 
              className="px-8 py-4 bg-[#FF5000] text-white font-bold rounded-full hover:bg-[#e04400] transition-colors text-lg"
            >
              Call +254 721 410 517
            </a>
            <QuoteModal quotebtn="white-outline" />
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <SuccessStory 
        variant='default'
        className='mb-16'
      />

      {/* Core Services - Hero Cards */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FF5000] mb-4">
              Our Core Moving Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable, and comprehensive moving solutions for every need
            </p>
          </div>
          <div className="row">
            {coreServices.map((service, index) => (
              <div key={service.id} className="col-lg-4 mb-8">
                <Link href={service.link}>
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer group`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-white/20 p-4 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-1">{service.title}</h3>
                        <p className="text-white/90 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <BsCheckCircle className="text-white/80 text-sm flex-shrink-0" />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 font-semibold">{service.stats}</span>
                      <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                        <span className="mr-2 font-semibold">Learn More</span>
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FF5000] mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your relocation with our specialized services and support
          </p>
        </div>
        <div className="row">
          {additionalServices.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-8">
              <Link href={service.link}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer group border border-gray-100">
                  <div className="text-center mb-6">{service.icon}</div>
                  <h3 className="font-bold text-2xl mb-2 text-center text-gray-800 group-hover:text-[#FF5000] transition-colors">{service.title}</h3>
                  <p className="text-[#FF5000] font-medium text-center mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <BsCheckCircle className="text-[#FF5000] text-sm flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center text-[#FF5000] font-semibold group-hover:underline">
                      <span className="mr-2">Explore Service</span>
                      <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-[#FF5000] to-[#FF8A50] py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why 40,000+ Clients Trust Taylor Movers
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Three decades of excellence in moving and relocation services
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-8">
              <div className="text-center text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdSecurity className="text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Trusted & Reliable</h3>
                <p className="text-white/90">Licensed, insured, and committed to safe handling of your belongings</p>
              </div>
            </div>
            <div className="col-lg-4 mb-8">
              <div className="text-center text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdSpeed className="text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Fast & Efficient</h3>
                <p className="text-white/90">Optimized processes and expert teams ensure timely, stress-free moves</p>
              </div>
            </div>
            <div className="col-lg-4 mb-8">
              <div className="text-center text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdSupport className="text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Complete Support</h3>
                <p className="text-white/90">End-to-end service from planning to setup in your new location</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container py-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Move with Kenya's #1 Moving Company?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your free quote today and experience the difference of working with 
            Kenya's most trusted moving professionals.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+254721410517" 
              className="px-8 py-4 bg-[#FF5000] text-white font-bold rounded-full hover:bg-[#e04400] transition-colors text-lg"
            >
              Call +254 721 410 517
            </a>
            <QuoteModal quotebtn="white-outline" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesIndex

export async function getServerSideProps() {
  // We don't need server-side data anymore as we're using static content
  return {
    props: {}
  }
}
