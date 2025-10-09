import { motion } from 'framer-motion';
import { FaAward, FaTrophy } from 'react-icons/fa';
import CertificateCard from '../Component/CertificateCard';
import { certificates } from '../assets/assets';

const Certificates = () => {
  
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full border-2 border-yellow-500/30">
              <FaTrophy className="text-yellow-400 text-5xl" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my continuous learning journey and professional development 
            across various domains of technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              {certificates.length}
            </h3>
            <p className="text-gray-400 text-sm">Total Certificates</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {certificates.filter(c => c.issuer.includes('NPTEL')).length}
            </h3>
            <p className="text-gray-400 text-sm">NPTEL (IIT)</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {/* {certificates.filter(c => c.issuer.includes('Infosys')).length} */}
              {certificates.length - certificates.filter(c => c.issuer.includes('NPTEL')).length}
            </h3>
            <p className="text-gray-400 text-sm">Others</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {new Date().getFullYear() - 2023}+
            </h3>
            <p className="text-gray-400 text-sm">Years Learning</p>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="p-3 bg-yellow-500/10 rounded-lg">
            <FaAward className="text-yellow-400 text-3xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">All Certifications</h2>
            <p className="text-gray-400">Chronologically ordered - Most recent first</p>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        {certificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-12 text-center">
            <FaAward className="text-yellow-400 text-6xl mx-auto mb-4 opacity-50" />
            <p className="text-gray-400 text-lg">Certificates coming soon...</p>
          </div>
        )}

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-3">
              Continuous Learning Journey 🚀
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Always eager to learn new technologies and expand my skill set. 
              Each certification represents a milestone in my journey to become a better software engineer.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Certificates;