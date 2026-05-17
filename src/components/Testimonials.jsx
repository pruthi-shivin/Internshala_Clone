import "../styles/testimonial.css";

const Testimonials = () => {

  const reviews = [
    {
      title: "Must-have app for students",
      text:
        "This platform helped me land my first internship and improve my resume significantly.",
      name: "Yogesh Singh",
    },
    {
      title: "I got placed at Amazon",
      text:
        "The internships and filters made finding relevant opportunities extremely easy.",
      name: "Yaswanth Mandapati",
    },
    {
      title: "Very useful for freshers",
      text:
        "A clean UI and updated internships helped me apply quickly and efficiently.",
      name: "Priya Sharma",
    },
  ];

  return (
    <div className="testimonial-section">

      <h2>
        Students love our platform
      </h2>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="testimonial-card"
          >

            <h3>{review.title}</h3>

            <p>{review.text}</p>

            <h4>{review.name}</h4>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Testimonials;