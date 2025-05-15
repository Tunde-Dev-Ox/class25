import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign up & add property",
    description:
      "Create an account with Google and tell us about your property. It only takes a few minutes.",
  },
  {
    number: "2",
    title: "Book a cleaner",
    description:
      "Choose a cleaner from our vetted list and book them for your desired date and time.",
  },
  {
    number: "3",
    title: "Relax & enjoy",
    description:
      "Your cleaner arrives, does the job, and updates you when it’s done. Guests walk into spotless perfection.",
  },
];

const Steps = () => {
  return (
    <div className="steps-wrapper">
      {steps.map((step, index) => (
        <motion.div
          className="step"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <div className="step-number">{step.number}</div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </motion.div>
      ))}

      {/* SVG Arrows */}
      <svg className="curve-arrow arrow-1" viewBox="0 0 100 50">
        <path
          d="M 10 40 C 50 -10, 50 -10, 90 40"
          stroke="black"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>
      <svg className="curve-arrow arrow-2" viewBox="0 0 100 50">
        <path
          d="M 10 40 C 50 -10, 50 -10, 90 40"
          stroke="black"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>
      <svg width="0" height="0">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="0"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#000" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default Steps;
