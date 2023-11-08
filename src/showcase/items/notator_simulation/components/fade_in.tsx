import { motion } from "framer-motion";

interface IFadeIn {
  i?: number;
  children: any;
  fullHeight?: boolean;
}
function FadeIn(props: IFadeIn) {
  function getDelay(): number {
    if (props.i) {
      return props.i / 20;
    } else return 0;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.2, delay: getDelay() }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeIn;
