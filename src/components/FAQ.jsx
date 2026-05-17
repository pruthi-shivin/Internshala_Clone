import { useState } from "react";

import "../styles/faq.css";

const faqData = [
  {
    question:
      "How do I apply for internships?",
    answer:
      "You can apply directly through the internship card using the View Details button.",
  },
  {
    question:
      "Are these internships verified?",
    answer:
      "Yes, all internships displayed are verified listings.",
  },
  {
    question:
      "Can I apply for remote internships?",
    answer:
      "Yes, use the Work From Home filter to find remote internships.",
  },
  {
    question:
      "How frequently are internships updated?",
    answer:
      "New internships are added daily.",
  },
];

const FAQ = () => {

  const [active, setActive] = useState(null);

  return (
    <div className="faq-section">

      <h2>
        Frequently Asked Questions
      </h2>

      {faqData.map((faq, index) => (

        <div
          key={index}
          className="faq-item"
        >

          <div
            className="faq-question"
            onClick={() =>
              setActive(
                active === index
                  ? null
                  : index
              )
            }
          >

            <h4>{faq.question}</h4>

            <span>
              {active === index ? "-" : "+"}
            </span>

          </div>

          {active === index && (
            <p className="faq-answer">
              {faq.answer}
            </p>
          )}

        </div>

      ))}

    </div>
  );
};

export default FAQ;