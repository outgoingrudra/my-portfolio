import { motion } from 'framer-motion';
import { FaAward, FaCalendar, FaUniversity } from 'react-icons/fa';

const CertificateCard = ({ certificate, index }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/30"
    >
      {/* Glitter Background Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-300" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </div>

      {/* Certificate Image */}
<a 
  href={certificate.image} 
  target="_blank" 
  rel="noopener noreferrer"
  className="block"
>
  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      src={certificate.image}
      alt={certificate.title}
      className="w-full h-full object-cover cursor-pointer"
    />

    {/* Gold Ribbon Effect */}
    <div className="absolute top-4 -left-12 rotate-45 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-12 py-1 shadow-lg">
      <FaAward className="text-white text-sm mx-auto" />
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
  </div>
</a>


      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
          {certificate.title}
        </h3>

        {/* Issuer */}
        <div className="flex items-center gap-2 text-blue-400">
          <FaUniversity size={16} />
          <span className="font-semibold">{certificate.issuer}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400">
          <FaCalendar size={14} />
          <span className="text-sm">{certificate.date}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {certificate.description}
        </p>

        {/* Decorative Line */}
        <div className="pt-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent"
          />
        </div>

        {/* Achievement Badge */}
        <div className="flex items-center gap-2 pt-2">
          <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold">
            ✓ Certified
          </div>
        </div>

      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Award Icon Float Effect */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 p-2 bg-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaAward className="text-yellow-400" size={20} />
      </motion.div>

    </motion.div>
  );
};

export default CertificateCard;