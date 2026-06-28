import Link from "next/link";

export default function Footer() {
  const siteMapLinks = [
    "Home", "Products", "Brand", "Categories", "About Us", "Our Services", "Blog", "Contact Us"
  ];

  return (
    <footer className="bg-[#0b2b42] text-white pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        
        {/* Office Address */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Office Address</h3>
          <h4 className="font-semibold mb-3">AL-QASWA TRADING</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            SHERI NO. 7, CITY SURVEY NO. 2680,<br />
            PLOT NO. 52, KUMBHARWADA CIRCLE<br />
            TO MADHIYA ROAD, BHAVNAGAR 364001
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p>+91 9825183207</p>
            <p>+91 9624243854</p>
            <p>+91 9925016868</p>
            <p>info@alqaswamarine.com</p>
            <p>spares@alqaswamarine.com</p>
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Site Map</h3>
          <ul className="space-y-3 text-sm">
            {siteMapLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-300 hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © 2026 Al Qaswa Marine.</p>
      </div>
    </footer>
  );
}
