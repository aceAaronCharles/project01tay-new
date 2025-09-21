import React from 'react'
import Image from 'next/image'
import getPageMetadata from '../../SEO/seo'
import Head from 'next/head'
import Jumbotron from '../../components/jumbotron'
import QuoteModal from '../../components/Quote/QuoteModal'
import { 
  BsCheckCircle, 
  BsShield, 
  BsHouse, 
  BsClock, 
  BsGear,
  BsTruck,
  BsBoxSeam,
  BsClipboardCheck,
  BsTools,
  BsStar,
  BsWrench,
  BsLightbulb,
  BsCameraVideo
} from 'react-icons/bs'
import { 
  FaBox, 
  FaHandshake, 
  FaTools, 
  FaTachometerAlt,
  FaClipboardList,
  FaBoxOpen,
  FaRoute,
  FaUsers,
  FaDesktop,
  FaFileAlt,
  FaFire,
  FaVideo,
  FaBug,
  FaPalette,
  FaUserTie,
  FaSprayCan
} from 'react-icons/fa'
import { MdElectricalServices, MdPlumbing, MdCleaningServices, MdDesignServices, MdBuild, MdHandyman } from 'react-icons/md'
import { RiShieldCheckFill, RiCustomerService2Fill, RiStorageFill } from 'react-icons/ri'
import { GiElectric, GiWaterDrop, GiBroom } from 'react-icons/gi'
import { FaTruck } from 'react-icons/fa'

const SpecializedServices = () => {
  const packingServices = [
    {
      icon: <FaBox className="text-[#FF5000] text-4xl" />,
      title: "Full-Service Packing",
      description: "We pack everything in your home or office",
      features: ["All rooms included", "Quality materials", "Inventory documentation", "Professional team"]
    },
    {
      icon: <FaBoxOpen className="text-[#FF5000] text-4xl" />,
      title: "Partial Packing",
      description: "You pack some, we handle the rest",
      features: ["Choose specific items", "Fragile items priority", "Custom solutions", "Flexible scheduling"]
    },
    {
      icon: <BsBoxSeam className="text-[#FF5000] text-4xl" />,
      title: "Custom Crating",
      description: "For fragile, valuable, or awkwardly shaped items",
      features: ["Mirrors & sculptures", "Fine art & electronics", "International compliance", "In-house carpentry"]
    }
  ]

  const cratingServices = [
    {
      type: "Local Moves",
      description: "Sturdy, custom wooden crates for navigating Kenya's roads safely",
      items: ["Mirrors", "Sculptures", "Fine art", "Electronics and oversized items"],
      icon: <BsHouse className="text-[#FF5000] text-3xl" />
    },
    {
      type: "International Moves", 
      description: "ISPM 15-compliant crating meeting international shipping standards",
      items: ["Sea freight ready", "Air cargo compliant", "Long-distance security", "Customs approved"],
      icon: <FaTruck className="text-[#FF5000] text-3xl" />
    }
  ]

  const electricalServices = [
    "Disconnecting/Reconnecting appliances",
    "Mounting/dismounting TVs, lights, and fixtures", 
    "Electrical safety inspections",
    "Power outlet installations"
  ]

  const plumbingServices = [
    "Connecting washing machines and dishwashers",
    "Sink installations and connections",
    "Leak-free and secure installations",
    "Water line connections"
  ]

  const cleaningServices = [
    {
      icon: <MdCleaningServices className="text-[#FF5000] text-4xl" />,
      title: "End-of-lease Deep Cleaning",
      description: "Comprehensive cleaning for property handovers"
    },
    {
      icon: <GiBroom className="text-[#FF5000] text-4xl" />,
      title: "Pre-move Cleanups",
      description: "Prepare your current home for departure"
    },
    {
      icon: <BsStar className="text-[#FF5000] text-4xl" />,
      title: "New-home Preparation",
      description: "Get your new home move-in ready"
    }
  ]

  const partnerServices = [
    {
      icon: <FaSprayCan className="text-[#FF5000] text-4xl" />,
      title: "Fumigation Services",
      description: "Protect your family or team from pests. We connect you with licensed fumigation experts for residential and commercial pest control solutions."
    },
    {
      icon: <MdDesignServices className="text-[#FF5000] text-4xl" />,
      title: "Interior Design Consulting", 
      description: "Transform your new space with help from our interior design partners. From furniture layout to color palettes and sourcing, they help create a home or office that suits your style and function."
    },
    {
      icon: <FaUsers className="text-[#FF5000] text-4xl" />,
      title: "Temporary Work Agencies",
      description: "Need short-term staffing after a business relocation? Our partners provide qualified personnel for logistics, admin, and operations during transitional periods."
    },
    {
      icon: <FaVideo className="text-[#FF5000] text-4xl" />,
      title: "CCTV Installation Services",
      description: "Secure your new premises on day one. Through trusted security firms, we offer professional CCTV installations for homes and offices."
    }
  ]

  const demolitionServices = [
    "Cubicle and workstation disassembly",
    "Removal of shelving and non-structural partitions",
    "Floor clearance for renovations", 
    "Commercial regulation compliance",
    "Safety protocol adherence",
    "Debris removal and disposal"
  ]

  const serviceCategories = [
    {
      title: "Packing Services",
      subtitle: "Professional & Customizable",
      description: "Your belongings deserve expert care. Our trained movers use top-grade packing materials and proven techniques.",
      icon: <FaBox className="text-[#FF5000] text-4xl" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Custom Crating",
      subtitle: "Built for Protection", 
      description: "In-house carpentry team builds sturdy, custom wooden crates for safe transport.",
      icon: <BsTools className="text-[#FF5000] text-4xl" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Technical Services",
      subtitle: "Minor Electrical & Plumbing",
      description: "Trusted electricians and plumbers to ease your move-in process.",
      icon: <MdHandyman className="text-[#FF5000] text-4xl" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Partner Program",
      subtitle: "Extended Services Network",
      description: "Curated network of reliable service providers for complete relocation support.",
      icon: <FaHandshake className="text-[#FF5000] text-4xl" />,
      color: "from-purple-500 to-purple-600"
    }
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("specialized-services", {
    location: 'Nairobi',
    service: 'specialized-services',
    customTitle: 'Specialized Moving Services Nairobi | Packing, Crating, Setup | Taylor Movers',
    customDescription: 'Complete specialized moving services in Nairobi. ✓ Professional packing ✓ Custom crating ✓ Electrical & plumbing ✓ Cleaning ✓ Partner network. Call +254 721 410 517!',
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
        image="specialized-services-nairobi.png" 
        text="Beyond Moving – Complete Support from Packing to Setup" 
        alt="Taylor Movers Kenya specialized moving services and complete relocation support"
      />

      {/* Hero Section */}
      <div className="container my-16">
        <div className="row items-center">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold text-[#FF5000] mb-4">
              Beyond Moving – Complete Support from Packing to Setup
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Taylor Movers Kenya, we go beyond basic moving. As one of the most trusted moving companies 
              in Nairobi, we provide specialized services to ensure that every aspect of your relocation—whether 
              residential, office, or international—is handled with precision, care, and convenience. From expert 
              packing and custom crating to post-move utilities and workspace transformation, we handle the 
              details so you can settle in faster.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <BsCheckCircle className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Complete relocation support services</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <BsShield className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Trusted partner network</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <BsTools className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Professional craftsmanship & setup</span>
            </div>
            <QuoteModal quotebtn="orange" />
          </div>
          <div className="col-md-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5000] to-[#FF8A50] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/assets/services/specialized-services-team.jpg"
                  alt="Taylor Movers Kenya specialized services team providing complete relocation support"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FF5000] mb-4">
              Comprehensive Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a complete, stress-free relocation experience
            </p>
          </div>
          <div className="row">
            {serviceCategories.map((category, index) => (
              <div key={index} className="col-lg-6 mb-8">
                <div className={`bg-gradient-to-r ${category.color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full mr-6">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-2">{category.title}</h3>
                      <p className="text-white/90 font-medium">{category.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packing Services */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
            Packing Services – Professional & Customizable
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfect for local moves, international relocations, and office moves in Kenya
          </p>
        </div>
        <div className="row">
          {packingServices.map((service, index) => (
            <div key={index} className="col-lg-4 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full border-l-4 border-[#FF5000]">
                <div className="text-center mb-6">{service.icon}</div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <BsCheckCircle className="text-[#FF5000] text-sm flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Crating */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
              Custom Crating – Built for Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-house carpentry team builds sturdy, custom wooden crates for safe transport
            </p>
          </div>
          <div className="row">
            {cratingServices.map((service, index) => (
              <div key={index} className="col-lg-6 mb-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#FF5000]/10 p-4 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-2xl text-gray-800">{service.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <BsCheckCircle className="text-[#FF5000] text-sm flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minor Electrical & Plumbing */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
            Minor Electrical & Plumbing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Available for home and office moves across Nairobi and across Kenya
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full">
              <div className="flex items-center mb-6">
                <MdElectricalServices className="text-[#FF5000] text-4xl mr-4" />
                <h3 className="font-bold text-2xl text-gray-800">Electrical Services</h3>
              </div>
              <div className="space-y-3">
                {electricalServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <GiElectric className="text-[#FF5000] text-lg flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl h-full">
              <div className="flex items-center mb-6">
                <MdPlumbing className="text-[#FF5000] text-4xl mr-4" />
                <h3 className="font-bold text-2xl text-gray-800">Plumbing Services</h3>
              </div>
              <div className="space-y-3">
                {plumbingServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <GiWaterDrop className="text-[#FF5000] text-lg flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cleaning Services */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
              Move-In/Out Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy peace of mind with a spotless start or a clean departure
            </p>
          </div>
          <div className="row">
            {cleaningServices.map((service, index) => (
              <div key={index} className="col-lg-4 mb-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center h-full">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Demolitions */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
            Office Demolitions & Space Prep
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handled by experienced demolition partners who understand commercial regulations and safety
          </p>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <BsTools className="text-[#FF5000] text-4xl mr-4" />
            <h3 className="font-bold text-2xl text-gray-800">Commercial Demolition Services</h3>
          </div>
          <div className="row">
            {demolitionServices.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-3">
                <div className="flex items-center space-x-3">
                  <BsCheckCircle className="text-[#FF5000] text-lg flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Program */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Beyond Relocation – Our Partner Program
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A curated network of reliable service providers who support you before, during, and after the move
            </p>
          </div>
          <div className="row">
            {partnerServices.map((service, index) => (
              <div key={index} className="col-lg-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container py-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for Complete Relocation Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From professional packing to custom crating, technical setup to partner services, 
            we handle every detail of your move so you can focus on settling into your new space.
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

export default SpecializedServices