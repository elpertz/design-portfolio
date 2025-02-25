import React from 'react'

interface PertzProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const Pertz = ({ className, ...props }: PertzProps) => (
  <svg
    width="41"
    height="16"
    viewBox="0 0 41 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="text"
    aria-label="Pertz"
    {...props}
  >
    <g filter="url(#filter0_d_169_22376)">
      <path
        d="M2 15.2666L3.22283 4.89308C7.08804 3.37381 8.93879 5.74171 8.2253 8.82099C7.38036 12.4676 2.73924 11.6739 3.06315 9.96971C3.52769 7.52565 7.10351 6.55119 9.89279 7.51C13.0514 8.59577 15.3668 8.36578 16.1181 6.61268C17.0903 4.34424 12.9428 2.67143 11.5603 6.95417C9.74457 12.5787 18.1932 13.8094 19.4531 4.89308H23.0552C20.6018 13.7724 27.7044 13.096 29.75 3.92846C30.4469 0.805414 29.5863 0.984434 28.3125 5.24156C25.9856 13.0183 33.6611 13.2003 34.6458 4.89308L38.3883 4.86292C38.0178 7.21111 37.2026 9.96971 37.2026 9.96971H39.5C39.0924 15.2666 35.0163 15.2666 33.3118 12.883M25.2708 4.92325H32.7189"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || 0}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_169_22376"
        x="0.108398"
        y="0.290039"
        width="67.6826"
        height="29.8672"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.5" dy="1" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_169_22376"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_169_22376"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

/**
 * PertzWithDesign component
 * Combines the Pertz SVG logo with "design" text and "BK" suffix
 */
interface PertzWithDesignProps {
  className?: string
}

export const PertzWithDesign = ({ className }: PertzWithDesignProps) => (
  <div className={`flex items-center ${className}`}>
    <Pertz
      className="stroke-foreground translate-y-0.2 translate-x-1"
      strokeWidth={2.5}
    />
    <div className="ml-1 flex items-center">
      <span className="font-light tracking-tight">.design</span>
    </div>
  </div>
)
