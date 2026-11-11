function Projects({ isDark }) {
    const sectionStyle = `p-5 border-2 col-span-1 md:col-span-2 rounded-none transition-colors duration-500 ${isDark
            ? 'bg-[#352d40] border-[#756080] shadow-[inset_3px_3px_0_#51415f,3px_3px_0_#211e2b]'
            : 'bg-[#faebd7] border-[#b58863] shadow-[inset_3px_3px_0_#fff0c9,3px_3px_0_#a47551]'
        }`;

    const headingStyle = `text-lg font-bold uppercase tracking-wide border-b-2 border-dashed pb-1 mb-3 transition-colors duration-500 ${isDark
            ? 'text-[#e4d3ef] border-[#756080]'
            : 'text-[#5c2c16] border-[#b58863]'
        }`;

    const textStyle = `space-y-3 text-sm transition-colors duration-500 ${isDark ? 'text-[#d8cadd]' : 'text-[#3b2314]'
        }`;

    const descriptionStyle = `text-xs mt-0.5 transition-colors duration-500 ${isDark ? 'text-[#c9b8d6]' : 'text-[#5c3a21]'
        }`;

    return (
        <section
            id="projects"
            className={sectionStyle}
        >
            <h2 className={headingStyle}>
                Проєкти для портфоліо
            </h2>

            <div className={textStyle}>
                <div>
                    <span className="font-bold">CyberWatch</span>
                    {' '}— концепція платформи моніторингу кіберзагроз

                    <div className={descriptionStyle}>
                        Ідея інформаційної панелі для представлення поширених
                        кіберзагроз, рівнів ризику та рекомендацій із цифрової безпеки.
                    </div>
                </div>

                <div>
                    <span className="font-bold">Privacy Guide</span>
                    {' '}— довідник цифрової приватності

                    <div className={descriptionStyle}>
                        Концепція вебресурсу з рекомендаціями щодо захисту
                        персональних даних, безпеки облікових записів і
                        відповідального використання цифрових сервісів.
                    </div>
                </div>

                <p
                    className={`italic text-xs mt-2 transition-colors duration-500 ${isDark ? 'text-[#b8a0c9]' : 'text-[#795438]'
                        }`}
                >
                    Обидва проєкти заплановані до реалізації.
                </p>
            </div>
        </section>
    );
}

export default Projects;