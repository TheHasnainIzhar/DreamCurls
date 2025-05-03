import * as React from "react"
const TangleSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={143}
    height={143}
    fill="none"
    {...props}
  >
    <rect width={143} height={143} fill="#FFF5F6" rx={35} />
    <path
      stroke="#F8567A"
      strokeLinecap="round"
      strokeWidth={2}
      d="M40.482 35S24.57 55.234 31.956 78.291c6.633 20.704 18.006 29.174 32.22 33.88 20.76 6.872 43.929-6.364 47.389-27.292 3.204-19.372-11.738-41.336-30.33-37.645-12.328 2.448-22.743 14.117-21.796 23.528 0 10.352 10.04 20.86 20.85 18.822 7.976-1.502 15.056-7.04 14.217-15.057-.76-7.257-8.064-15.05-15.164-13.176-3.802 1.004-7.29 3.633-7.582 7.529-.331 4.413 4.155 9.313 8.53 8.47"
    />
    <rect
      width={130.028}
      height={130.028}
      x={5.497}
      y={6.498}
      stroke="#F8567A"
      strokeWidth={0.949}
      rx={39.53}
    />
  </svg>
)
export default TangleSvg;
