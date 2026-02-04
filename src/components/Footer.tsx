

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold text-white">STEPLINK</span>
                        <p className="text-sm mt-2 text-gray-400">
                            우리 아이를 위한 올바른 움직임 솔루션
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="font-bold text-white mb-2">피지오 후각 연구소</p>
                        <p>문의: 네이버 블로그 키즈피지오@피지오 후각 연구소</p>
                        <p className="mt-4 text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} StepLink. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
