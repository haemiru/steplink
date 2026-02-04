
import { ThumbsUp, ThumbsDown, Clock, Heart } from 'lucide-react';

export const Guide = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Usage Guide</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        올바른 사용 가이드
                    </h2>
                    <p className="text-gray-600 mt-4">
                        스텝링크는 교정 기구가 아닌 '학습 도구'입니다. 아이의 페이스에 맞춰주세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Good Usage */}
                    <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                        <div className="flex items-center gap-3 mb-6">
                            <ThumbsUp className="text-green-600 w-8 h-8" />
                            <h3 className="text-xl font-bold text-green-800">이렇게 사용하면 좋아요 👍</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">아이가 스스로 움직이게 기다려주세요.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">바로 고쳐주기보다, 아이 몸이 느끼게 두세요.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">작은 변화도 바로 칭찬해주세요. ("오늘 발이 더 잘 나왔네!")</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bad Usage */}
                    <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <ThumbsDown className="text-red-500 w-8 h-8" />
                            <h3 className="text-xl font-bold text-red-800">이런 건 피해주세요 👎</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">억지로 당기지 마세요.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">아이가 울거나 싫어하는데 계속 착용하지 마세요.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5"></span>
                                <span className="text-gray-700">보호자 힘으로 자세를 억지로 만들지 마세요.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* How to wear / Time */}
                <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6" /> 착용 시간 & 방법
                        </h3>
                        <p className="opacity-90 leading-relaxed mb-6 text-lg">
                            하루 <strong className="text-yellow-300">10~20분</strong>, 짧고 굵게 집중하는 것이 좋습니다.<br />
                            처음엔 5분부터 시작해서 아이 표정을 살펴주세요.
                        </p>
                        <div className="flex items-center gap-2 bg-blue-700/50 p-4 rounded-xl backdrop-blur-sm">
                            <Heart className="w-5 h-5 text-pink-300" />
                            <span className="font-medium">"잘 서 있나?" 보다 <strong className="text-white">"몸이 편해 보이나?"</strong>가 중요합니다.</span>
                        </div>
                    </div>
                    <div className="shrink-0 bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                        <span className="block text-4xl font-bold mb-2">1~2회</span>
                        <span className="text-blue-100">하루 권장 횟수</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
