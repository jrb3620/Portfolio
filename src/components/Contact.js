import React from "react";

export default function Contact({ onFormSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => {
                onFormSubmit(); // Trigger the thank-you page
                form.reset();
            })
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="w-full flex flex-col bg-gray-800 p-8 rounded-lg"
                    onSubmit={handleSubmit}
                >

                    {/* Hidden input to pass form name */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field to prevent spam */}
                    <p hidden>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    {/* Form fields */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm text-gray-400">
                            Your Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-900 rounded border border-gray-700 text-gray-100 py-2 px-4"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm text-gray-400">
                            Your Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-900 rounded border border-gray-700 text-gray-100 py-2 px-4"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm text-gray-400">
                            Your Role:
                        </label>
                        <select
                            id="role"
                            name="role[]"
                            multiple
                            className="w-full bg-gray-900 rounded border border-gray-700 text-gray-100 py-2 px-4"
                        >
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm text-gray-400">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-900 rounded border border-gray-700 text-gray-100 py-2 px-4 h-32"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
