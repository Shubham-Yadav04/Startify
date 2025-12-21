import React from 'react'

function Footer() {
  return (
  
<footer className="w-full h-fit flex bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">Startify</h3>
                <p className="text-slate-400">Empowering startups with modern solutions and innovative tools.</p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                    <li><a href="#" className="hover:text-white transition">Home</a></li>
                    <li><a href="#" className="hover:text-white transition">About</a></li>
                    <li><a href="#" className="hover:text-white transition">Services</a></li>
                    <li><a href="#" className="hover:text-white transition">Blog</a></li>
                </ul>
            </div>

            {/* Contact Section */}
            <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <div className="space-y-2 text-slate-400">
                    <p>📧 <a href="mailto:hello@startify.com" className="hover:text-white transition">raylieghsy2030@gmail.com</a></p>
                    <p>📱 <a href="tel:+1234567890" className="hover:text-white transition">+91 9900002030</a></p>
                    <p>📍 San Francisco, CA</p>
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
                <p>&copy; 2024 Startify. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">Privacy</a>
                    <a href="#" className="hover:text-white transition">Terms</a>
                    <a href="#" className="hover:text-white transition">Sitemap</a>
                </div>
            </div>
        </div>
    </div>
</footer>

)
}
export default Footer