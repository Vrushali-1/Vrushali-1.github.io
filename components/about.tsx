"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a full-stack engineer who loves to make technology that not only packs a punch but is also a joy to use. I like creating software that makes a difference in people's lives, with a special spot in my heart for full-stack development. 
      My aim is to create tech that's not just about cool features but also about making user's day a bit brighter and easier.
      When I am not coding, I enjoy cooking, playing badminton, and going on hikes. I also love learning new things. Currently, I am learning about cryptocurrency. 
      </p>
    </motion.section>
  );
}
