import dynamic from 'next/dynamic';

const WrappedSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});