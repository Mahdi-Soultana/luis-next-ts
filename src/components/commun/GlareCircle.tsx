import { motion } from 'framer-motion';
import { CSSProperties } from 'react';
function GlareCircle({
  reverse = false,
  width = 300,
  height = 300,
  className = '',
  style,
}: {
  width?: number;
  height?: number;
  reverse?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}) {
  const positions = [
    ['0%', '-40%', '-40%', '10%', '0%'],
    ['0%', '50%', '-10%', '60%', '0%'],
    ['0%', '10%', '150%', '350%', '0%'],
    ['0%', '-100%', '220%', '-100%', '0%'],
    ['10%', '300%', '-10%', '100%', '10%'],
    ['100%', '-10%', '-400%', '-10%', '100%'],
  ];

  return (
    <motion.svg
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: reverse ? [1, 0.5, 0.9, 0.2, 1] : [0.1, 1, 1, 0.5, 0.1],
        rotate: reverse ? [0, 360] : [0, 720],
        y: reverse ? positions[1] : positions[0],
        x: reverse ? positions[1] : positions[0],
        scale: reverse
          ? ['100%', '60%', '300%', '60%', '150%']
          : ['150%', '260%', '20%', '360%', '150%'],
        transition: {
          duration: reverse ? 250 : 100,
          repeat: Infinity,
          repeatType: 'loop',
        },
      }}
      className={`block z-[1] opacity-0 ${className} `}
      style={{
        width,
        height,
        ...style,
      }}
      viewBox="0 0 1052 1024"
      fill="none"
    >
      <g opacity="0.8">
        <g filter="url(#filter0_f_1_3)">
          <ellipse
            cx="526"
            cy="434.096"
            rx="326"
            ry="305.096"
            fill="url(#paint0_linear_1_3)"
          />
        </g>
        <g filter="url(#filter1_f_1_3)">
          <rect
            x="369.361"
            y="411.028"
            width="313.278"
            height="415.972"
            fill="url(#paint1_linear_1_3)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1_3"
          x="0"
          y="-71"
          width="1052"
          height="1010.19"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_3"
          />
        </filter>
        <filter
          id="filter1_f_1_3"
          x="169.361"
          y="211.028"
          width="713.278"
          height="815.972"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_1_3"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3"
          x1="526"
          y1="129"
          x2="526"
          y2="739.192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C2FF" stop-opacity="0" />
          <stop offset="1" stop-color="#7B29FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_3"
          x1="526"
          y1="411.028"
          x2="526"
          y2="827"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#184BFF" stop-opacity="0" />
          <stop offset="1" stop-color="#174AFF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default GlareCircle;
