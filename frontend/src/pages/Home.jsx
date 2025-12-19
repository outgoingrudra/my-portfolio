import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-blue-400 text-lg md:text-xl font-semibold mb-2">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Rudra Verma
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-2xl md:text-3xl text-gray-200 font-semibold">
              Full Stack Web Developer
            </h3>
            <p className="text-xl text-blue-300">
              Data Science & Machine Learning Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Aspiring Software Engineer passionate about building scalable web applications 
            and leveraging data-driven solutions. I transform complex problems into elegant, 
            efficient code while exploring the intersection of development and artificial intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <HiDownload size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/outgoingrudra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-gray-400 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rudra-verma-33258a2a3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-gray-400 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:vrudra671@gmail.com"
              className="p-3 bg-slate-800 text-gray-400 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
              <img
                src="myimg.jpeg"
                alt="Your Name"
                className="w-full h-full object-cover aspect-square"
              />
              
              {/* If no image, show placeholder */}
              {/* Uncomment below and remove img tag above if you don't have an image yet */}
              {/* <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">YN</span>
              </div> */}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;