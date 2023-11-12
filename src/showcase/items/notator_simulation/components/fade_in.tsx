import { motion } from "framer-motion";

interface FadeInProps {
  i?: number;
  children: any;
  useScale?: { from: number };
}
function FadeIn(props: FadeInProps) {
  function getDelay(): number {
    if (props.i) {
      return props.i / 20;
    } else return 0;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(props.useScale && { scale: props.useScale.from }),
      }}
      animate={{
        opacity: 1,
        ...(props.useScale && { scale: 1 }),
      }}
      transition={{ duration: 0.2, delay: getDelay() }}
      style={{ width: "100%", height: "100%" }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeIn;
