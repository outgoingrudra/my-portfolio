import { motion } from 'framer-motion';
import { FaCode, FaChartBar } from 'react-icons/fa';
import ProjectCard from '../Component/ProjectCard';
import { fullStackProjects, dataScienceProjects } from '../assets/assets';

const Projects = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work spanning full-stack development and data science, 
            showcasing my passion for building innovative solutions.
          </p>
        </motion.div>

        {/* Full Stack Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <FaCode className="text-blue-400 text-3xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Full Stack Development</h2>
              <p className="text-gray-400">Complete web applications from frontend to backend</p>
            </div>
          </div>

          {/* Projects Grid */}
          {fullStackProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullStackProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-12 text-center">
              <p className="text-gray-400 text-lg">Full Stack projects coming soon...</p>
            </div>
          )}
        </motion.section>

        {/* Data Science Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <FaChartBar className="text-orange-400 text-3xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Data Science & Analytics</h2>
              <p className="text-gray-400">Data-driven insights and machine learning solutions</p>
            </div>
          </div>

          {/* Projects Grid */}
          {dataScienceProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataScienceProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-12 text-center">
              <p className="text-gray-400 text-lg">Data Science projects coming soon...</p>
            </div>
          )}
        </motion.section>

        {/* Stats Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {fullStackProjects.length + dataScienceProjects.length}
            </h3>
            <p className="text-gray-400">Total Projects</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {fullStackProjects.length}
            </h3>
            <p className="text-gray-400">Full Stack</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              {dataScienceProjects.length}
            </h3>
            <p className="text-gray-400">Data Science</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {fullStackProjects.filter(p => p.live).length}
            </h3>
            <p className="text-gray-400">Live Demos</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;