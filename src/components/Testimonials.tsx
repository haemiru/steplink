import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        content: `"엄마~나 또 걸을래!" 평소 재활을 힘들어하고 재미없어하는 아이가 먼저 걷겠다는 얘기를 해서 너무 기쁘고 깜짝 놀랐습니다.`,
        author: "보행 훈련 중인 아이 부모님"
    },
    {
        id: 2,
        content: `"난생 처음 이마트에 가서 서서 물건을 고르고 카트를 밀었어요. 제 인생에 새로운 경험이였어요. 아이랑 함께 해 볼 수 있는게 너무 많아져서 좋아요."`,
        author: "새로운 일상을 경험한 가족"
    },
    {
        id: 3,
        content: `"같이 신나는 음악을 틀어 놓고 율동을 하는게 가능하다는게 신기해요. 아이도 처음엔 어색해하더니 지금은 자기가 음악을 고르고 동작도 빨라지고 부드러워지고 있어요."`,
        author: "즐거운 재활을 경험한 부모님"
    },
    {
        id: 4,
        content: `"익숙해지기까지 시간이 조금 필요하지만 아이 혼자서는 하기 어려웠던 동작들을 함께 하니 저도 운동 되고 아이도 즐겁게 해줘서 운동 하는게 한결 수월해졌어요."`,
        author: "함께 운동하는 부모님"
    },
    {
        id: 5,
        content: `"집에서 스트레칭, 근력, 밸런스, 감각 자극등등 시켜주기 시간도 부족하고 어려웠는데 슈트 운동으로 한꺼번 해주는게 가능해서 몸도 맘도 편해졌어요."`,
        author: "효율적인 홈트를 경험한 분"
    }
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default to desktop

    // Update items per page based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure index is valid when itemsPerPage changes
    useEffect(() => {
        const maxIndex = Math.max(0, reviews.length - itemsPerPage);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerPage, currentIndex]);


    const nextSlide = () => {
        if (currentIndex < reviews.length - itemsPerPage) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-20 bg-blue-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Real Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        사용자 후기
                    </h2>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-0">
                    {/* Items */}
                    <div className="overflow-hidden -mx-3"> {/* Negative margin to offset item padding */}
                        <motion.div
                            className="flex"
                            initial={false}
                            animate={{ x: `${-currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] px-3" // Padding instead of gap
                                >
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full relative">
                                        <Quote className="w-10 h-10 text-blue-100 absolute top-6 left-6 -z-0" />
                                        <div className="relative z-10 flex-1">
                                            <p className="text-gray-700 leading-relaxed mb-6 pt-4">
                                                {review.content}
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-auto pt-4 border-t border-gray-50">
                                            <p className="text-sm font-bold text-gray-900">{review.author}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full border transition-all ${currentIndex === 0
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= reviews.length - itemsPerPage}
                            className={`p-3 rounded-full border transition-all ${currentIndex >= reviews.length - itemsPerPage
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
