
const Footer = () => {
    return (
      <div className="max-w-[1920px] mx-auto py-16 px-4 text-gray-300 bg-[#060606]">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sección izquierda */}
          <div>
            <h1 className="w-full text-3xl font-bold text-[#3b3b91]">Mi Tienda</h1>
            <p className="py-4 max-w-[600px] text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
  
          {/* Sección derecha (listas) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div>
              <h6 className="font-medium text-gray-400">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Support</h6>
              <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Company</h6>
              <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Career</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Legal</h6>
              <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;