function Experience({ isDark }) {
    return (
        <section
            id="experience"
            className={`p-5 border-2 col-span-1 md:col-span-2 rounded-none transition-colors duration-500 ${isDark
                    ? 'bg-[#352d40] border-[#756080] shadow-[inset_3px_3px_0_#51415f,3px_3px_0_#211e2b]'
                    : 'bg-[#faebd7] border-[#b58863] shadow-[inset_3px_3px_0_#fff0c9,3px_3px_0_#a47551]'
                }`}
        >
            <h2
                className={`text-lg font-bold uppercase tracking-wide border-b-2 border-dashed pb-1 mb-3 transition-colors duration-500 ${isDark
                        ? 'text-[#e4d3ef] border-[#756080]'
                        : 'text-[#5c2c16] border-[#b58863]'
                    }`}
            >
                Досвід роботи
            </h2>

            <div
                className={`font-bold text-sm transition-colors duration-500 ${isDark ? 'text-[#f0e5f5]' : 'text-[#3b2314]'
                    }`}
            >
                Junior Cybersecurity Intern (навчальне стажування)
            </div>

            <div
                className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'text-[#c9b8d6]' : 'text-[#5c3a21]'
                    }`}
            >
                CyberShield IT Solutions
            </div>

            <div
                className={`text-xs italic mb-3 transition-colors duration-500 ${isDark ? 'text-[#b8a0c9]' : 'text-[#795438]'
                    }`}
            >
                Червень 2026 — Серпень 2026
            </div>

            <ul
                className={`list-disc list-inside text-sm space-y-1 transition-colors duration-500 ${isDark ? 'text-[#d8cadd]' : 'text-[#3b2314]'
                    }`}
            >
                <li>Ознайомлення з основними принципами інформаційної безпеки та захисту даних.</li>
                <li>Аналіз типових кіберзагроз і способів їх запобігання.</li>
                <li>Вивчення методів виявлення підозрілої активності в інформаційних системах.</li>
                <li>Підготовка рекомендацій щодо безпечного використання цифрових сервісів.</li>
                <li>Робота з технічною документацією та оформлення результатів аналізу.</li>
            </ul>
        </section>
    );
}

export default Experience;