import { Link } from "react-router-dom";

export default function CTAButton({ to, href, children, variant = "primary", size = "md", className = "" }) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const variants = {
    primary: "bg-emerald-700 hover:bg-emerald-800 text-white focus:ring-emerald-500 shadow-sm hover:shadow-md",
    secondary: "bg-white hover:bg-gray-50 text-emerald-800 border border-gray-200 focus:ring-emerald-500 shadow-sm",
    outline: "border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white focus:ring-emerald-500",
    gold: "bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400 shadow-sm hover:shadow-md",
    white: "bg-white text-emerald-900 hover:bg-emerald-50 shadow-sm",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-emerald-900",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button className={classes}>{children}</button>;
}
