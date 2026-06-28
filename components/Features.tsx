import { Truck, HeadphonesIcon, Package, Globe, CheckCircle, Clock } from "lucide-react";

export default function Features() {
  const topFeatures = [
    {
      icon: <Truck size={40} className="text-blue-500 mb-4 mx-auto" />,
      title: "Fast & Reliable Shipping",
      desc: "Get your order delivered quickly and safely.",
    },
    {
      icon: <HeadphonesIcon size={40} className="text-blue-500 mb-4 mx-auto" />,
      title: "24/7 Customer Support",
      desc: "We're here anytime you need help.",
    },
    {
      icon: <Package size={40} className="text-blue-500 mb-4 mx-auto" />,
      title: "Wide Product Range",
      desc: "Explore thousands of products in one place.",
    },
  ];

  const bottomFeatures = [
    {
      icon: <Globe size={32} className="text-blue-500 mb-4" />,
      title: "Export Worldwide",
      desc: "Global export leaders in advanced marine machinery, shaping the future of maritime technology worldwide.",
    },
    {
      icon: <CheckCircle size={32} className="text-blue-500 mb-4" />,
      title: "Original Products",
      desc: "As a part of achieving customer delight and ethical practice we always deliver genuine products.",
    },
    {
      icon: <Clock size={32} className="text-blue-500 mb-4" />,
      title: "Fast Delivery",
      desc: "Our strategic locations and large inventory ensure quick dispatch to minimize your downtime.",
    },
    {
      icon: <Package size={32} className="text-blue-500 mb-4" />,
      title: "Secure Packaging",
      desc: "All components are packed with industry-standard materials to ensure safe transit globally.",
    },
  ];

  return (
    <section className="bg-[#f0f4f8] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-24 relative z-20">
          {topFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center">
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-bold text-[#0b3c6b]">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              Al Qaswa Marine has been a trusted name in the marine and industrial engine spare parts industry since 1994, delivering reliable solutions backed by over 30 years of experience.
              We specialize in supplying genuine, used, and reconditioned marine engines, spare parts, turbochargers, pumps, compressors, purifiers, and generators for leading brands such as MAN Energy Solutions, Bergen Engines, EMD (Electro-Motive Diesel), Wärtsilä, and Caterpillar Inc.
              With a strong ready-stock inventory, strict quality inspection processes, competitive pricing, and fast global shipping, we ensure our clients receive top-quality parts with minimal downtime.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                {feature.icon}
                <h3 className="text-xl font-bold text-[#0b3c6b] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
