import { Loader2 } from 'lucide-react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                </div>
                <p className="text-gray-600 font-medium">Loading...</p>
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "200ms" }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "400ms" }} />
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;