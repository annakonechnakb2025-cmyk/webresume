import { useEffect, useState } from "react";

function ContactForm({ isDark }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    const theme = isDark
        ? "bg-[#292434] border-[#756080] text-[#c9b8d6]"
        : "bg-[#f4e2bb] border-[#8B5A2B] text-[#5c3a21]";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="feedback-title"
                className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto border-4 rounded-xl p-5 sm:p-6 shadow-2xl ${theme}`}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Закрити"
                    className="absolute top-2 right-3 text-2xl font-bold"
                >
                    ×
                </button>

                <h2
                    id="feedback-title"
                    className="text-xl font-bold mb-2 pr-6"
                >
                    Зворотний зв'язок
                </h2>

                <p className="mb-4">
                    Буду рада отримати ваше повідомлення!
                </p>

                <form
                    action="https://formspree.io/f/mnppqejp"
                    method="POST"
                    className="flex flex-col gap-3"
                >
                    <div>
                        <label htmlFor="feedback-name" className="block font-bold mb-1">
                            Ім'я
                        </label>
                        <input
                            id="feedback-name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            required
                            className="w-full rounded-md border-2 border-current bg-transparent p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="feedback-email" className="block font-bold mb-1">
                            Email
                        </label>
                        <input
                            id="feedback-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="w-full rounded-md border-2 border-current bg-transparent p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="feedback-phone" className="block font-bold mb-1">
                            Номер телефону
                        </label>
                        <input
                            id="feedback-phone"
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            className="w-full rounded-md border-2 border-current bg-transparent p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="feedback-message" className="block font-bold mb-1">
                            Повідомлення
                        </label>
                        <textarea
                            id="feedback-message"
                            name="message"
                            rows="4"
                            required
                            className="w-full rounded-md border-2 border-current bg-transparent p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-md border-2 border-current px-4 py-2 font-bold transition-transform hover:scale-[1.02]"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;