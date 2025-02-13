
import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  onImageClick: (image: string) => void;
}

const Timeline = ({ events, onImageClick }: TimelineProps) => {
  return (
    <div className="relative max-w-3xl mx-auto py-12">
      <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-romantic-rose/30" />
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="ml-12"
          >
            <div className="timeline-card">
              <div className="font-playfair text-sm text-romantic-rose mb-2">
                {event.date}
              </div>
              <h3 className="text-xl font-playfair mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => onImageClick(event.image!)}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
