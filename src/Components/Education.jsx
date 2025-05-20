
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Social Science",
      institution: "National University, Gazipur",
      period: "Still running (2nd Year)",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Purbadhala Govt.College, Netrokona",
      period: "2020 – 2022",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#39FF14]">🎓 Education</h2>

      <div className="max-w-6xl mx-auto md:flex gap-8 md:space-y-0 space-y-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="md:flex-1 p-6 relative border-[#39FF14] border rounded-md transition-transform duration-400 transform hover:scale-110 hover:bg-[#062d5e]"
          >
            <h3 className="flex items-center gap-4 text-xl font-semibold pb-2">
              <span><FaGraduationCap /></span>
              <p>{edu.title}</p>
            </h3>
            <h4 className="pl-9">{edu.institution}</h4>
            <p className="pl-9">{edu.period}</p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
