'use client';

import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 12px 24px rgba(95, 0, 241, 0.25)",
      borderColor: "#5F00F1",
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const skillItemVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  const categories = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Go", "YAML", "Markdown"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "Redux", "GraphQL", "Vue.js", "Nuxt.js", "Axios", "Jest"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "JWT", "WebSocket", "MQTT", "Serverless"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "MSSQL", "DynamoDB", "Firebase", "Prisma", "TypeORM"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD", "Terraform", "Serverless", "Lambda", "S3", "CloudFront"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "GitHub", "Bitbucket", "Jira", "Agile", "Scrum", "TDD", "Postman", "Swagger", "Figma"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h5 className="text-lg sm:text-xl text-purple-400 font-medium mb-2">What Skills I Have</h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MY EXPERTISE
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={cardVariants}
              className="bg-gradient-to-br from-[#120b29] to-[#1e0f4d] rounded-xl p-6 border border-[#2a1b5e] shadow-lg"
            >
              <h3 className="text-center text-xl sm:text-2xl mb-6 font-medium text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="flex items-center py-2 px-3 rounded-lg hover:bg-[#2a1b5e]/50 transition-colors"
                  >
                    <BsPatchCheckFill className='text-purple-400 text-lg flex-shrink-0' />
                    <span className='ml-3 text-gray-200 text-sm sm:text-base'>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
