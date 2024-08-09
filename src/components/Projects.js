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

                    {/* Rest of your form fields go here */}

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
