interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 48, className = "" }: LogoProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <image
<<<<<<< HEAD
          href="/Logo.png"
=======
          href="/logo-img.png"
>>>>>>> ec67f1d3edec18ceff062256b6e57cbd9fb32cce
          x="0"
          y="0"
          width="48"
          height="48"
          className="drop-shadow-sm"
        />

      </svg>
    </div>
  );
};

export default Logo;