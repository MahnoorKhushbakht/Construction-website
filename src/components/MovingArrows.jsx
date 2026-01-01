import { motion } from "framer-motion";

const Arrow = ({ direction = "right", delay = 0 }) => {
  const isRight = direction === "right";

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white font-extrabold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      animate={{
        x: isRight ? [0, 10, 0] : [0, -10, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {isRight ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
      )}
    </motion.svg>
  );
};

export default function MovingArrows({children}) {
  return (
    <div className="flex items-center gap-3">
      
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <Arrow key={i} direction="right" delay={i * 0.2} />
        ))}
      </div>

       {children}

      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <Arrow key={i} direction="left" delay={i * 0.2} />
        ))}
      </div>

    </div>
  );
}
