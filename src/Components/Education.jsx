import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "B.Sc. in Computer Science & Engineering",
      institution: "University of Example",
      period: "2019 – 2023",
      details: [
        "CGPA: 3.8 / 4.0",
        "Major in Software Engineering",
        "Thesis: AI-Powered Career Recommendation System",
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "XYZ College, Dhaka",
      period: "2017 – 2019",
      details: [
        "GPA: 5.00 / 5.00",
        "Group: Science",
        "Board: Dhaka Board",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-16">🎓 Education</h2>

      <div className="max-w-6xl mx-auto flex gap-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="flex-1 border border-gray-300 rounded-lg p-6 relative"
          >
            <div className="absolute left-6 top-6 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
              <GraduationCap className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold mt-12">{edu.title}</h3>
            <p className="mt-1 text-indigo-600 font-medium">{edu.institution}</p>
            <p className="text-sm">{edu.period}</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
              {edu.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
