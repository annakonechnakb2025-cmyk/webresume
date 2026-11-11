function Contacts({ isDark }) {
    return (
        <section
            id="contacts"
            className={`border-2 p-5 col-span-1 md:col-span-2 rounded-none transition-colors duration-500 ${isDark
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
                Контакти
            </h2>

            <div
                className={`text-sm mb-1 transition-colors duration-500 ${isDark ? 'text-[#d8cadd]' : 'text-[#3b2314]'
                    }`}
            >
                Email: anna.konechna.kb.2025@lpnu.ua
            </div>

            <div
                className={`text-sm transition-colors duration-500 ${isDark ? 'text-[#d8cadd]' : 'text-[#3b2314]'
                    }`}
            >
                GitHub:{' '}
                <a
                    href="https://github.com/annakonechnakb2025-cmyk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold hover:underline focus:outline-dashed transition-colors duration-300 ${isDark
                            ? 'text-[#d6a8ff] hover:text-[#f0b6d9]'
                            : 'text-purple-700 hover:text-pink-600'
                        }`}
                >
                    Мій профіль GitHub
                </a>
            </div>
        </section>
    );
}

export default Contacts;