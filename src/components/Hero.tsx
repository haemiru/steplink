
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50 pt-16">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6 text-sm md:text-base border border-blue-200">
                        <Sparkles className="w-4 h-4 inline mr-2 text-blue-600" />
                        우리 아이 움직임 가이드
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                        힘을 쓰기 전에,<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">정렬</span>과
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"> 감각</span>을<br className="md:hidden" /> 선물하세요
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        스텝링크 슈트 & 슈즈는 아이를 잡거나 고정하는 도구가 아닙니다.<br className="hidden md:block" />
                        우리 아이 몸에 <strong className="text-gray-900 font-bold">"움직임 설명서"</strong>를 붙여주는 것입니다.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                            제품 보러가기 <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-gray-700 rounded-full font-bold text-lg shadow-md hover:bg-gray-50 transition-colors border border-gray-100"
                        >
                            1:1 상담하기
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating elements placeholder - represent Suit & Shoes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 relative h-64 md:h-96 w-full max-w-4xl mx-auto"
                >
                    {/* Hero Image Background */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <img
                            src="/images/hero_final.png"
                            alt="Happy family walking in nature"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Conceptual Abstract Representation - Overlays */}
                    <div className="absolute left-4 md:left-1/4 top-4 md:top-8 w-32 h-40 bg-white/30 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/50 flex items-center justify-center shadow-lg transform -rotate-6 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                        <span className="text-blue-900 font-bold drop-shadow-sm">Suit<br />Alignment</span>
                    </div>
                    <div className="absolute right-4 md:right-1/4 bottom-4 md:bottom-8 w-32 h-40 bg-white/30 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/50 flex items-center justify-center shadow-lg transform rotate-6 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                        <span className="text-orange-900 font-bold drop-shadow-sm">Shoes<br />Sensation</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
