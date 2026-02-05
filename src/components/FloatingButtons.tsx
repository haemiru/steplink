import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

export const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            {/* Kakao Consultation */}
            <motion.a
                href="#" // TODO: Add KakaoTalk link here
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 bg-[#FEE500] text-black rounded-full shadow-lg hover:shadow-xl transition-shadow font-bold text-sm md:text-base cursor-pointer"
            >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" fill="black" strokeWidth={0} />
                <span className="hidden md:inline">카카오톡 상담</span>
            </motion.a>

            {/* Naver Reservation */}
            <motion.a
                href="#" // TODO: Add Naver Reservation link here
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 bg-[#03C75A] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow font-bold text-sm md:text-base cursor-pointer"
            >
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                <span className="hidden md:inline">네이버 예약</span>
            </motion.a>
        </div>
    );
};
