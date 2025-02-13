
import { motion } from 'framer-motion';

const reasons = [
  "Сенің күлкің менің әлемімді жарықтандырады",
  "Сен мені сөзсіз түсінесің",
  "Сенімен әр күн ерекше",
  "Сенің қасында бақытты сезінем",
  "Сен менің сүйікті адамымсың",
  "Мен сені сүйем"

];

const LoveReasons = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-playfair text-center mb-8">
        Мен сені неге жақсы көремін?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-700 text-center">{reason}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoveReasons;
