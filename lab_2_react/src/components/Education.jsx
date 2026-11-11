function Education({ isDark }) {
    return (
        <section
            className={`p-5 border-2 rounded-none transition-colors duration-500 ${isDark
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
                Освіта
            </h2>

            <div
                className={`font-semibold text-sm mb-1 transition-colors duration-500 ${isDark ? 'text-[#f0e5f5]' : 'text-[#3b2314]'
                    }`}
            >
                Національний університет «Львівська політехніка»
            </div>

            <div
                className={`text-sm transition-colors duration-500 ${isDark ? 'text-[#c9b8d6]' : 'text-[#5c3a21]'
                    }`}
            >
                Спеціальність: «Кібербезпека»
            </div>
        </section>
    );
}

export default Education;