import React from "react";

export default function ThankYou() {
    return (
        <section id="thank-you" className="h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">Thank You!</h1>
                <p className="text-lg text-gray-400 mb-8">
                    Your message has been received. We will get back to you shortly.
                </p>
                <a
                    href="#about"
                    className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600">
                    Go Back Home
                </a>
            </div>
        </section>
    );
}
