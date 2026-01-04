import React from 'react'

function Footer() {
  return (
  <footer
  className="
    w-full h-fit py-14
    bg-gradient-to-r
    from-slate-50 via-white to-slate-50
    text-slate-700

    dark:from-[#0b0b0b] dark:via-[#0f0f0f] dark:to-[#0b0b0b]
    dark:text-neutral-300
  "
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      {/* About */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Startify
        </h3>
        <p className="text-slate-500 dark:text-neutral-400">
          Empowering startups with modern solutions and innovative tools.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Quick Links
        </h4>
        <ul className="space-y-2 text-slate-500 dark:text-neutral-400">
          {["Home", "About", "Services", "Blog"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Contact Us
        </h4>
        <div className="space-y-2 text-slate-500 dark:text-neutral-400">
          <p>
            📧{" "}
            <a
              href="mailto:hello@startify.com"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              raylieghsy2030@gmail.com
            </a>
          </p>
          <p>
            📱{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              +91 9900002030
            </a>
          </p>
          <p>📍 San Francisco, CA</p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div
      className="
        border-t border-slate-200 pt-8
        dark:border-white/10
      "
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-neutral-400">
        <p>&copy; 2024 Startify. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {["Privacy", "Terms", "Sitemap"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>

)
}
export default Footer