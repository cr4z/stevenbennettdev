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
      initial={{ opacity: 0, scale: 0.8, height: props.fullHeight ? "100%" : "initial" }}
      animate={{ opacity: 1, scale: 1, height: props.fullHeight ? "100%" : "initial" }}
      transition={{ duration: 0.2, delay: getDelay() }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeIn;
