"use client";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState({
    id: 117,
    advice: `"It is easy to sit up and take notice, what's difficult is getting up
  and taking action."`,
  });
  const [isVisible, setIsVisible] = useState(true);

  const getNewQuote = async () => {
    try {
      setIsVisible(false);
      let response = await fetch("https://api.adviceslip.com/advice");
      let data = await response.json();
      setQuote(data.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setIsVisible(true);
    }
  };

  return (
    <div className="w-full mx-4 bg-card md:mx-auto md:max-w-[600px] md:px-12 md:pt-12 md:pb-[72px] md:max-h-96 px-6 pt-10 pb-16 rounded-2xl relative">
      <motion.p className="font-neon uppercase font-bold card-header text-center mb-6" initial={{ scale: 0 }}
              animate={{ scale: 1 }}>
        Advice #{quote.id}
      </motion.p>
      <div className="min-h-12 mb-6 md:mb-6">
        <AnimatePresence>
          {isVisible && (
            <motion.h2
              className="card-text font-cyan text-center "
              key={quote.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              {quote.advice}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
      <div className="sm:flex justify-center hidden">
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex justify-center sm:hidden">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <Button onClick={getNewQuote} />
    </div>
  );
}
