import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { personalInfo, skills, education, experience, interests } from '../assets/assets';

const About = () => {
  
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-lg">
            Get to know me better
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h2>
              <p className="text-blue-400 text-xl mb-2">{personalInfo.title}</p>
              <p className="text-cyan-400 mb-4">{personalInfo.subtitle}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                  {personalInfo.currentStatus}
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                  {personalInfo.availability}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <a
                href={personalInfo.resumeLink}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <HiDownload size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={itemVariant} className="flex items-center gap-3 mb-6">
            <FaCode className="text-blue-400 text-3xl" />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend */}
            <motion.div
              variants={itemVariant}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend Development</h3>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariant}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">Backend Development</h3>
              <div className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              variants={itemVariant}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Database</h3>
              <div className="space-y-3">
                {skills.database.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Data Science */}
            <motion.div
              variants={itemVariant}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Data Science & ML</h3>
              <div className="space-y-3">
                {skills.dataScience.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-orange-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tools */}
          <motion.div
            variants={itemVariant}
            className="mt-6 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education & Experience Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-blue-400 text-3xl" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.duration} • {edu.location}</p>
                  {edu.grade && (
                    <p className="text-green-400 font-semibold mb-2">Grade: {edu.grade}</p>
                  )}
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-blue-400 text-3xl" />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                  <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaHeart className="text-red-400 text-3xl" />
            <h2 className="text-3xl font-bold text-white">Interests & Hobbies</h2>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;