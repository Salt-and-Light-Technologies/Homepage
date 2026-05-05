import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t" style={{borderColor:'rgba(255,255,255,0.06)', background:'#0a0a0a'}}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <img
              src="/CompanyLogoFlatYellowClear.png"
              alt="Salt and Light Technologies"
              className="h-8 w-auto object-contain object-left"
            />
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[220px]">
              A product-minded engineering firm. We design and build scalable software systems.
            </p>
            <a href="mailto:info@saltandlighttechnologies.com"
               className="text-xs text-zinc-500 hover:text-[#facd12] transition-colors duration-150">
              info@saltandlighttechnologies.com
            </a>
            <a href="tel:+13146900719"
               className="text-xs text-zinc-500 hover:text-[#facd12] transition-colors duration-150">
              (314) 690-0719
            </a>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">Navigation</div>
            {[
              { label: 'Products', href: '#products' },
              { label: 'Services', href: '#services' },
              { label: 'Process', href: '#process' },
              { label: 'Case Study', href: '#case-study' },
              { label: 'Start a Project', href: '#contact' },
            ].map(item => (
              <a key={item.label}
                 href={item.href}
                 className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-150 w-fit">
                {item.label}
              </a>
            ))}
          </div>

          {/* Work column */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">Products</div>
            {[
              { label: 'MicLocker', sub: 'Audio gear marketplace' },
              { label: 'ADA', sub: 'National darts association modernization' },
            ].map(item => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-sm text-zinc-400">{item.label}</span>
                <span className="text-xs text-zinc-600">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t"
             style={{borderColor:'rgba(255,255,255,0.05)'}}>
          <p className="text-xs text-zinc-700">
            © {year} Salt and Light Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors duration-150">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
