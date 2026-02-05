
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import ImageSequencePlayer from './ImageSequencePlayer';

export const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState<'suit' | 'shoes'>('suit');

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Solution</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        스텝링크 슈트 & 슈즈
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        아이의 몸이 스스로 느끼도록 방향 정보를 주는 가이드 라인입니다.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-full shadow-md inline-flex">
                        <button
                            onClick={() => setActiveTab('suit')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'suit'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            스텝링크 슈트 (Suit)
                        </button>
                        <button
                            onClick={() => setActiveTab('shoes')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'shoes'
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            스텝링크 슈즈 (Shoes)
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'suit' ? (
                        <motion.div
                            key="suit"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row"
                        >
                            <div className="flex-1 p-8 md:p-12 bg-blue-50 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">🟦 스텝링크 슈트</h3>
                                <p className="text-lg text-gray-700 font-medium mb-8">
                                    몸통과 골반을 감싸서 중심을 잡습니다.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-blue-700" /></div>
                                        <span className="text-gray-600">몸의 중심을 느끼게 합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-blue-700" /></div>
                                        <span className="text-gray-600">자세가 무너지기 전에 미리 알려줍니다.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-blue-700" /></div>
                                        <span className="text-gray-600">"몸이 한 덩어리로 움직이는 느낌"을 만듭니다.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[400px] bg-blue-100 flex items-center justify-center p-4">
                                <ImageSequencePlayer
                                    folderPath="/sequence"
                                    fileNamePrefix="ezgif-frame-"
                                    extension="jpg"
                                    frameCount={200}
                                    fps={5.25}
                                    padLength={3}
                                    width={540}
                                    height={960}
                                    className="w-full h-auto shadow-2xl rounded-xl"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="shoes"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row"
                        >
                            <div className="md:w-1/2 p-12 bg-green-50 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">🟩 스텝링크 슈즈</h3>
                                <p className="text-lg text-gray-700 font-medium mb-8">
                                    발과 발목에 안정감 있는 감각을 전달합니다.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-green-700" /></div>
                                        <span className="text-gray-600">발 디디는 느낌을 또렷하게 해줍니다.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-green-700" /></div>
                                        <span className="text-gray-600">체중 이동을 쉽게 도와줍니다.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-200 p-1 rounded-full mt-1"><Check className="w-4 h-4 text-green-700" /></div>
                                        <span className="text-gray-600">"언제 발을 딛고, 밀어야 하는지" 알려줍니다.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 min-h-[300px] bg-green-100 flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for Shoes Image */}
                                <span className="text-green-600 font-bold text-2xl">Shoes Image Placeholder</span>
                                <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
