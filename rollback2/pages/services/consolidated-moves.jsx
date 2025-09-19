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
  BsPeople,
  BsCurrencyDollar,
  BsCalendar3
} from 'react-icons/bs'
import { 
  FaTruck, 
  FaHandshake, 
  FaUsers, 
  FaTachometerAlt,
  FaClipboardList,
  FaBoxOpen,
  FaRoute,
  FaDollarSign,
  FaDesktop,
  FaFileAlt,
  FaClock,
  FaWarehouse,
  FaBuilding
} from 'react-icons/fa'
import { MdSecurity, MdSupport, MdSpeed, MdInventory, MdGroupWork, MdMonetizationOn } from 'react-icons/md'
import { RiShieldCheckFill, RiCustomerService2Fill, RiTruckFill } from 'react-icons/ri'

const ConsolidatedMoves = () => {
  const whyChooseConsolidated = [
    {
      icon: <MdMonetizationOn className="text-[#FF5000] text-4xl" />,
      title: "Cost-Effective",
      description: "Share transport space with other clients to reduce moving expenses while still receiving professional service."
    },
    {
      icon: <RiShieldCheckFill className="text-[#FF5000] text-4xl" />,
      title: "Safe & Secure", 
      description: "All items are carefully packed, labeled, and tracked, ensuring nothing is lost or damaged during transit."
    },
    {
      icon: <MdGroupWork className="text-[#FF5000] text-4xl" />,
      title: "Flexible & Convenient",
      description: "Scheduled departures and delivery windows allow clients to plan their moves efficiently."
    },
    {
      icon: <RiCustomerService2Fill className="text-[#FF5000] text-4xl" />,
      title: "Professional Handling",
      description: "Experienced movers ensure that even fragile or high-value items are properly packed, loaded, and transported."
    },
    {
      icon: <MdInventory className="text-[#FF5000] text-4xl" />,
      title: "Reliable Tracking",
      description: "Inventory management and tracking systems provide transparency from pickup to delivery."
    }
  ]

  const preMoveSteps = [
    {
      step: "1",
      title: "Client Consultation",
      description: "Discuss shipment size, destination, timelines, and special requirements.",
      icon: <FaClipboardList className="text-[#FF5000] text-2xl" />
    },
    {
      step: "2", 
      title: "Volume Assessment & Quotation",
      description: "Determine space allocation and provide a transparent, itemized quote.",
      icon: <BsBoxSeam className="text-[#FF5000] text-2xl" />
    },
    {
      step: "3",
      title: "Packing Recommendations",
      description: "Choose between DIY packing with guidance or professional packing services.",
      icon: <FaBoxOpen className="text-[#FF5000] text-2xl" />
    },
    {
      step: "4",
      title: "Scheduling & Coordination",
      description: "Confirm move dates, pickup details, and delivery timelines.",
      icon: <BsCalendar3 className="text-[#FF5000] text-2xl" />
    }
  ]

  const moveExecutionSteps = [
    {
      step: "1",
      title: "Packing & Labeling",
      description: "All items are packed, labeled, and inventoried for easy tracking.",
      icon: <BsBoxSeam className="text-[#FF5000] text-2xl" />
    },
    {
      step: "2",
      title: "Loading & Transport", 
      description: "Shipments are carefully loaded into shared vehicles or containers, optimizing space while ensuring safety.",
      icon: <BsTruck className="text-[#FF5000] text-2xl" />
    },
    {
      step: "3",
      title: "Delivery & Unloading",
      description: "Items are delivered to the designated address, placed in assigned rooms, and unpacked if requested.",
      icon: <BsCheckCircle className="text-[#FF5000] text-2xl" />
    },
    {
      step: "4",
      title: "Post-Move Support",
      description: "Follow-up ensures that all items have arrived safely and any additional assistance is provided.",
      icon: <BsStar className="text-[#FF5000] text-2xl" />
    }
  ]

  const consolidatedBenefits = [
    "Reduce moving costs without compromising safety or service quality",
    "Access professional moving expertise even for smaller shipments",
    "Flexible options for both residential and corporate clients",
    "Shared transport reduces environmental impact",
    "Professional packing and handling",
    "Real-time tracking and inventory management"
  ]

  const idealClients = [
    {
      type: "Individuals",
      description: "Perfect for people with smaller shipments who want professional service at reduced costs",
      icon: <BsPeople className="text-[#FF5000] text-3xl" />,
      examples: ["Studio apartments", "Small 1-bedroom homes", "Personal belongings", "Student moves"]
    },
    {
      type: "Small Businesses", 
      description: "Cost-effective solution for small office moves and equipment transport",
      icon: <FaBuilding className="text-[#FF5000] text-3xl" />,
      examples: ["Small office equipment", "Store inventory", "Business documents", "Retail displays"]
    },
    {
      type: "Corporate Clients",
      description: "Efficient solution for partial office moves and department relocations",
      icon: <FaDesktop className="text-[#FF5000] text-3xl" />,
      examples: ["Department relocations", "Equipment transfers", "Archive storage", "Branch setups"]
    }
  ]

  const serviceFeatures = [
    "Professional packing services",
    "Secure inventory tracking", 
    "Flexible scheduling options",
    "Shared transport savings",
    "Expert handling of fragiles",
    "Door-to-door service",
    "Insurance coverage options",
    "Real-time delivery updates",
    "Professional unpacking",
    "Post-move follow-up"
  ]

  const costSavings = [
    {
      title: "Up to 40% Savings",
      description: "Compared to dedicated truck moves",
      icon: <FaDollarSign className="text-[#FF5000] text-4xl" />
    },
    {
      title: "No Minimum Volume",
      description: "Perfect for small to medium shipments",
      icon: <BsBoxSeam className="text-[#FF5000] text-4xl" />
    },
    {
      title: "Transparent Pricing",
      description: "Pay only for the space you use",
      icon: <BsClipboardCheck className="text-[#FF5000] text-4xl" />
    }
  ]

  // Get SEO metadata
  const seoData = getPageMetadata("consolidated-moves", {
    location: 'Nairobi',
    service: 'consolidated-moves',
    customTitle: 'Consolidated Moving Services Nairobi | Cost-Effective Shared Transport Kenya',
    customDescription: 'Affordable consolidated moving services in Nairobi. ✓ Share transport costs ✓ Professional handling ✓ Flexible scheduling ✓ Up to 40% savings. Call +254 721 410 517!',
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
        image="consolidated-moves-nairobi.png" 
        text="Reliable Consolidated Moving Services" 
        alt="Taylor Movers Kenya consolidated moving services with shared transport solutions"
      />

      {/* Hero Section */}
      <div className="container my-16">
        <div className="row items-center">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold text-[#FF5000] mb-4">
              Taylor Movers Kenya – Reliable Consolidated Moving Services
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Taylor Movers Kenya offers professional consolidated moving services in Nairobi and across Kenya, 
              designed for clients who want cost-effective, efficient relocations. Consolidated moves allow multiple 
              clients' shipments to share transport space, reducing costs while maintaining the same level of safety, 
              care, and reliability you expect from a full-service move. This solution is ideal for individuals, 
              small businesses, or corporate clients looking to move household goods, office equipment, or commercial 
              items without paying for an entire truck.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <BsCurrencyDollar className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Save up to 40% on moving costs</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <BsShield className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Professional handling & tracking</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <BsClock className="text-[#FF5000] text-2xl" />
              <span className="text-gray-700 font-medium">Flexible scheduling options</span>
            </div>
            <QuoteModal quotebtn="orange" />
          </div>
          <div className="col-md-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5000] to-[#FF8A50] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/assets/services/consolidated-moves-truck.jpg"
                  alt="Taylor Movers Kenya consolidated moving truck with shared transport space"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Savings Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Significant Cost Savings
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share transport costs without compromising on service quality
            </p>
          </div>
          <div className="row">
            {costSavings.map((saving, index) => (
              <div key={index} className="col-lg-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">{saving.icon}</div>
                  <h3 className="font-bold text-2xl mb-4">{saving.title}</h3>
                  <p className="text-white/90">{saving.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Consolidated Moves */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FF5000] mb-4">
              Why Choose Taylor Movers Consolidated Moves?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional moving services with significant cost savings through shared transport
            </p>
          </div>
          <div className="row">
            {whyChooseConsolidated.map((reason, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="text-center mb-6">{reason.icon}</div>
                  <h3 className="font-bold text-xl mb-4 text-center text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ideal Clients */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
            Perfect for These Client Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consolidated moves are ideal for various client types looking for cost-effective solutions
          </p>
        </div>
        <div className="row">
          {idealClients.map((client, index) => (
            <div key={index} className="col-lg-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center mb-6">{client.icon}</div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800">{client.type}</h3>
                <p className="text-gray-600 mb-6 text-center">{client.description}</p>
                <div className="space-y-2">
                  {client.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <BsCheckCircle className="text-[#FF5000] text-sm flex-shrink-0" />
                      <span className="text-sm text-gray-600">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
              Complete Consolidated Moving Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the benefits of professional moving at a fraction of the cost
            </p>
          </div>
          <div className="row">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-[#FF5000]/5 transition-colors shadow-sm">
                  <BsCheckCircle className="text-[#FF5000] text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consolidated Move Process */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Consolidated Move Process
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A streamlined approach to cost-effective, professional moving
            </p>
          </div>

          {/* Pre-Move Planning */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              1. Pre-Move Planning
            </h3>
            <div className="row">
              {preMoveSteps.map((step, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        {step.icon}
                      </div>
                      <div className="bg-white text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-3">{step.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Move Execution */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              2. Move Execution
            </h3>
            <div className="row">
              {moveExecutionSteps.map((step, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        {step.icon}
                      </div>
                      <div className="bg-white text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-3">{step.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Summary */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5000] mb-4">
            Benefits of Consolidated Moves
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience professional moving services while saving significantly on costs
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FF5000] to-[#FF8A50] rounded-3xl p-12 text-white">
          <div className="row">
            {consolidatedBenefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="flex items-center space-x-3">
                  <BsCheckCircle className="text-white text-xl flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
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
            Ready to Save on Your Move?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get professional moving services at a fraction of the cost with our consolidated moving solutions. 
            Perfect for small to medium shipments that don't require a full truck.
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

export default ConsolidatedMoves