function Skills({ isDark }) {
    const sectionStyle = `p-5 border-2 rounded-none transition-colors duration-500 ${isDark
            ? 'bg-[#352d40] border-[#756080] shadow-[inset_3px_3px_0_#51415f,3px_3px_0_#211e2b]'
            : 'bg-[#faebd7] border-[#b58863] shadow-[inset_3px_3px_0_#fff0c9,3px_3px_0_#a47551]'
        }`;

    const headingStyle = `text-lg font-bold uppercase tracking-wide border-b-2 border-dashed pb-1 mb-3 transition-colors duration-500 ${isDark
            ? 'text-[#e4d3ef] border-[#756080]'
            : 'text-[#5c2c16] border-[#b58863]'
        }`;

    const listStyle = `list-disc list-inside text-sm space-y-1 transition-colors duration-500 ${isDark ? 'text-[#d8cadd]' : 'text-[#3b2314]'
        }`;

    return (
        <div className="grid grid-cols-1 gap-4 col-span-1 md:col-span-2">
            <section
                className={sectionStyle}
            >
                <h2 className={headingStyle}>
                    Технічні навички
                </h2>

                <ul className={listStyle}>
                    <li>Програмування: Python, базові алгоритми та структури даних.</li>
                    <li>Вебтехнології: HTML5, CSS3, адаптивний вебдизайн.</li>
                    <li>Інструменти розробки: Git, GitHub.</li>
                    <li>Інформаційна безпека: базові принципи захисту інформації, цифрової приватності та контролю доступу.</li>
                </ul>
            </section>

            <section
                className={sectionStyle}
            >
                <h2 className={headingStyle}>
                    Особисті навички
                </h2>

                <ul className={listStyle}>
                    <li>Аналітичне та критичне мислення.</li>
                    <li>Уважність до деталей.</li>
                    <li>Вміння системно розв'язувати завдання.</li>
                    <li>Самоорганізація та відповідальність.</li>
                    <li>Готовність навчатися й освоювати нові технології.</li>
                </ul>
            </section>
        </div>
    );
}

export default Skills;