import Link from "next/link";

export default function Footer() {
  const siteMapLinks = [
    "Home", "Products", "Brand", "Categories", "About Us", "Our Services", "Blog", "Contact Us"
  ];

  return (
    <footer className="bg-[#0b2b42] text-white pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Office Address */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Office Address</h3>
          <h4 className="font-semibold mb-3">Al Qaswa Marine</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Opp. Madina Baug<br />
            DSP Office road Navapara<br />
            Bhavnagar - 364001<br />
            Gujarat - India
          </p>
        </div>

        {/* Warehouse */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Warehouse</h3>
          <h4 className="font-semibold mb-3">Al Qaswa Marine</h4>
          
          <div className="mb-4">
            <h5 className="font-semibold text-sm mb-1">Warehouse 1</h5>
            <p className="text-gray-300 text-sm leading-relaxed">
              Plot no 5656<br />
              trapaj alang road<br />
              Bhavnagar - 364001<br />
              Gujarat - India
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-sm mb-1">Warehouse 2</h5>
            <p className="text-gray-300 text-sm leading-relaxed">
              VIP Plot No 341<br />
              Bhavnagar - 364001<br />
              Gujarat - India
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p>+91 9825407373</p>
            <p>+91 9909762424</p>
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
