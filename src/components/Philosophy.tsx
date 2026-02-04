import { motion } from 'framer-motion';
import { Brain, Ban, Activity, Footprints } from 'lucide-react';

export const Philosophy = () => {
    // Content Data
    const problems = [
        { icon: <Ban className="w-6 h-6 text-red-500" />, text: "힘을 주면 몸이 더 굳어져요" },
        { icon: <Activity className="w-6 h-6 text-orange-500" />, text: "서 있으면 몸이 계속 흔들려요" },
        { icon: <Footprints className="w-6 h-6 text-blue-500" />, text: "발이 땅에 붙지 않는 느낌이에요" },
        { icon: <Brain className="w-6 h-6 text-purple-500" />, text: "걷다가 자꾸 멈추게 돼요" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Core Principle</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        힘이 없어서 못 움직이는 게 아닙니다.<br />
                        <span className="text-blue-600">어떻게</span> 써야 할지 모르는 것입니다.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        우리 아이는 근력이 부족한 경우보다, 힘을 언제 어디에 써야 하는지 몰라서 몸이 뻣뻣해지고 움직임이 끊기는 경우가 더 많습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-3xl p-8 md:p-12"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                            흔히 보이는 어려움들
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {problems.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-bold text-xl">1</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">몸의 중심 가이드</h4>
                                    <p className="text-gray-600">"여기서 중심을 잡아야 해"라고 몸에게 알려줍니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <span className="text-orange-600 font-bold text-xl">2</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">발의 감각 가이드</h4>
                                    <p className="text-gray-600">"이렇게 발을 디뎌야 해"라고 감각으로 전달합니다.</p>
                                </div>
                            </div>
                            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg mt-8">
                                <p className="font-semibold text-lg text-center">
                                    말로 설명하지 않아도,<br />아이 몸이 스스로 느끼게 도와줍니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
