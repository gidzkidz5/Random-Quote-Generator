"use client";
import { motion } from "framer-motion";

export default function Button({ onClick, disabled }: { onClick: any, disabled: boolean }) {
  return (
    <div className="flex justify-center">
      <motion.button
        className="flex justify-center items-center p-5 bg-neon w-16 rounded-full absolute -bottom-8 hover:cursor-pointer"
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{scale: 0.8, rotate:-360}}
        aria-label="randomise"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </motion.button>
    </div>
  );
}
