import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group cursor-pointer"
    >
      {/* SVG LOGO */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-12 h-12 transition-transform duration-200 group-hover:scale-105"
      >
        {/* Background rounded square */}
        <rect width="200" height="200" rx="40" fill="#24B8A7" />

        {/* Store-top shape */}
        <path
          d="M40 60 Q40 40 60 40 H140 Q160 40 160 60 V120 Q160 140 140 140 H60 Q40 140 40 120 Z"
          fill="#2DCBB9"
        />

        {/* Three white canopy panels */}
        <rect x="55" y="40" width="30" height="35" rx="8" fill="#E8F8F4" />
        <rect x="85" y="40" width="30" height="35" rx="8" fill="#E8F8F4" />
        <rect x="115" y="40" width="30" height="35" rx="8" fill="#E8F8F4" />

        {/* Lightning bolt */}
        <path
          d="M105 150 L85 150 L98 115 L70 160 H95 L85 185 L120 140 H105Z"
          fill="#FF9F23"
        />
      </svg>

      {/* COMPANY NAME */}
      <span className="text-2xl font-bold tracking-wide text-gray-900">
        GreenJunction
      </span>
    </Link>
  );
};

export default Logo;
