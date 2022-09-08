import { AnimationOnScroll } from 'react-animation-on-scroll';

const ScrollAnimation = ({ children, ...props }) => {
  return <AnimationOnScroll {...props}>{children}</AnimationOnScroll>;
};

export default ScrollAnimation;
