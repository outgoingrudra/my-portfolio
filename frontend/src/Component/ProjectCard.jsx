import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const isFullStack = project.type === 'fullstack';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Glitter Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 -left-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={`/projects/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        
        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
            isFullStack
              ? 'bg-blue-500/30 border border-blue-400/50 text-blue-300'
              : 'bg-orange-500/30 border border-orange-400/50 text-orange-300'
          }`}>
            {isFullStack ? 'Full Stack' : 'Data Science'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-slate-800 border border-blue-500/30 text-blue-300 rounded-md hover:bg-slate-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3 pt-4">
          {/* GitHub Button - Always Present */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-slate-700 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group/btn"
          >
            <FaGithub className="group-hover/btn:rotate-12 transition-transform" size={18} />
            <span className="font-semibold">Source</span>
          </a>

          {/* Live Demo Button - Only for Full Stack */}
          {isFullStack && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group/btn"
            >
              <FaExternalLinkAlt className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={16} />
              <span className="font-semibold">Live Demo</span>
            </a>
          )}
        </div>

      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
    </motion.div>
  );
};

export default ProjectCard;