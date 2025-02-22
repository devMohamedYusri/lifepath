import { X } from 'lucide-react';
import Button from '../design/Button.jsx'
const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-6 text-center">
                <div className="relative">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                        <X className="w-12 h-12 text-blue-600 animate-spin-slow" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">404</h1>
                    <p className="text-gray-600">This page doesn&apos;t exist</p>
                </div>

                <Button>
                    Go Home
                </Button>
            </div>

            <style>{`
        @keyframes spin-slow {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
            }
            .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
            }
        `}</style>
        </div>
    );
};

export default NotFoundPage;