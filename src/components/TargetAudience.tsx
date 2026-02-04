
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience = () => {
    const checklist = [
        "서 있을 때 자꾸 비틀거려요",
        "걷는 속도가 느리고 자주 멈춰요",
        "발이 잘 안 나가거나 끌려요",
        "한쪽으로 기울어 서거나 걸어요",
        "힘은 있는 것 같은데 움직임이 어색해요",
        "혼자 서거나 걷지 못해요",
        "스스로 움직이려는 시도가 적어요",
        "경직으로 움직임을 만들기 어려워요"
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm">Checklist</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                        어떤 아이에게 도움이 되나요?
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        뇌성마비 아동, 몸이 뻣뻣하거나 움직임 타이밍이 느린 아이에게 특히 도움이 됩니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {checklist.map((text, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                        >
                            <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                            <span className="text-gray-800 font-medium text-lg leading-snug">{text}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center p-8 bg-blue-50 rounded-3xl">
                    <p className="text-lg text-blue-800 font-semibold">
                        "이 중 하나라도 해당된다면, 스텝링크가 도움을 줄 수 있습니다."
                    </p>
                </div>
            </div>
        </section>
    );
};
