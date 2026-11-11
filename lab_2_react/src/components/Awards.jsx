import { useState } from 'react';
import { FaPython, FaLinux, FaShieldAlt } from 'react-icons/fa';

function Awards({ isDark }) {
    // Стан вікна сертифіката
    const [isOpen, setIsOpen] = useState(false);

    // Форма шестикутника
    const hexClip = {
        clipPath:
            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
    };

    // Кольори залежно від теми
    const card = isDark
        ? 'bg-[#393047] border-[#756080]'
        : 'bg-[#faebd7] border-[#b58863]';

    const heading = isDark
        ? 'text-[#e9d5ff]'
        : 'text-[#4a2e12]';

    const text = isDark
        ? 'text-[#f3e8ff]'
        : 'text-[#3b2314]';

    const description = isDark
        ? 'text-[#d8c8ec]'
        : 'text-[#5c2c16]';

    const divider = isDark
        ? 'border-[#756080]'
        : 'border-[#a47551]';

    const button = isDark
        ? 'bg-[#40344a] border-[#756080] text-[#f3e8ff] hover:bg-[#51415f]'
        : 'bg-[#f4e2bb] border-[#a47551] text-[#4a2e12] hover:bg-[#e6ceac]';

    const pixelFrame = isDark
        ? "rounded-none shadow-[inset_3px_3px_0_#51415f,inset_-3px_-3px_0_#292434,4px_4px_0_#211e2b]"
        : "rounded-none shadow-[inset_3px_3px_0_#fff0c9,inset_-3px_-3px_0_#dcb372,4px_4px_0_#a47551]";

    const certificateFrame = isDark
        ? "rounded-none shadow-[inset_2px_2px_0_#51415f,3px_3px_0_#211e2b]"
        : "rounded-none shadow-[inset_2px_2px_0_#fff0c9,3px_3px_0_#a47551]";

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* ЛІВА ЧАСТИНА: Сертифікати */}
                <div
                    className={`${card} ${pixelFrame} border-2 p-4 flex flex-col transition-colors duration-500`}
                >
                    <div
                        className={`flex justify-between items-center border-b border-dashed ${divider} pb-2 mb-3`}
                    >
                        <h2
                            className={`text-xs font-bold ${heading} uppercase tracking-wide`}
                        >
                            📜 Колекція сертифікатів
                        </h2>


                        <span
                            className={`text-[8px] font-bold px-2 py-0.5 rounded-full border transition-colors duration-500 ${isDark
                                    ? "bg-[#756080] text-[#f3e8ff] border-[#a78bba]"
                                    : "bg-[#8b5a2b] text-[#f4e2bb] border-[#795438]"
                                }`}
                        >
                            01 ITEM
                        </span>

                    </div>

                    <div className="flex gap-3">
                        {/* Зображення сертифіката */}
                        <div
                            className={`w-1/2 border-2 ${divider} ${certificateFrame} overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
                        >
                            <img
                                src="/certificate.png"
                                alt="Сертифікат з основ кібербезпеки"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        'https://via.placeholder.com/300x200?text=certificate.png';
                                }}
                            />
                        </div>

                        {/* Опис сертифіката */}
                        <div className="w-1/2 flex flex-col justify-center">
                            <h3
                                className={`text-[11px] font-bold ${text} leading-tight mb-1`}
                            >
                                Cybersecurity Basics
                            </h3>

                            <p
                                className={`text-[9px] ${description} mb-2 leading-tight`}
                            >
                                Сертифікат про проходження курсу з основ кібербезпеки.
                            </p>

                            <button
                                onClick={() => setIsOpen(true)}
                                className={`${button} border-2 rounded px-2 py-1 text-[9px] font-bold shadow-sm transition-colors self-start flex items-center gap-1 cursor-pointer`}
                            >
                                <span>👁️</span>
                                Переглянути
                            </button>
                        </div>
                    </div>
                </div>

                {/* ПРАВА ЧАСТИНА: Досягнення */}
                <div
                    className={`${card} ${pixelFrame} border-2 p-4 flex flex-col transition-colors duration-500`}
                >
                    <h2
                        className={`text-xs font-bold ${heading} uppercase tracking-wide border-b border-dashed ${divider} pb-2 mb-3`}
                    >
                        🏆 Основні досягнення
                    </h2>

                    <div className="flex justify-around items-end flex-grow">

                        {/* Python */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative w-14 h-13 hover:scale-110 transition-transform duration-200 cursor-default drop-shadow-md mt-1">

                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#a78bba]' : 'bg-[#5c2c16]'
                                        }`}
                                    style={hexClip}
                                />
                                <div
                                    className={`absolute inset-[2px] transition-colors duration-500 ${isDark ? 'bg-[#51445f]' : 'bg-[#dcb372]'
                                        }`}
                                    style={hexClip}
                                />

                                <div
                                    className={`absolute inset-[4px] ${
                                        isDark ? 'bg-[#292434]' : 'bg-[#3b2314]'
                                    } flex items-center justify-center shadow-inner`}
                                    style={hexClip}
                                >
                                    <FaPython className="text-2xl text-[#38BDF8]" />
                                </div>
                            </div>

                            <span
                                className={`text-[9px] font-bold ${heading} text-center mt-1`}
                            >
                                Python<br />Explorer
                            </span>
                        </div>

                        {/* Linux */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative w-14 h-13 hover:scale-110 transition-transform duration-200 cursor-default drop-shadow-md mt-1">
                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#a78bba]' : 'bg-[#5c2c16]'
                                        }`}
                                    style={hexClip}
                                />
                                <div
                                    className={`absolute inset-[2px] transition-colors duration-500 ${isDark ? 'bg-[#51445f]' : 'bg-[#dcb372]'
                                        }`}
                                    style={hexClip}
                                />

                                <div
                                    className={`absolute inset-[4px] ${
                                        isDark ? 'bg-[#292434]' : 'bg-[#3b2314]'
                                    } flex items-center justify-center shadow-inner`}
                                    style={hexClip}
                                >
                                    <FaLinux className="text-2xl text-white" />
                                </div>
                            </div>

                            <span
                                className={`text-[9px] font-bold ${heading} text-center mt-1`}
                            >
                                Linux<br />Explorer
                            </span>
                        </div>

                        {/* Security */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative w-14 h-13 hover:scale-110 transition-transform duration-200 cursor-default drop-shadow-md mt-1">
                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#a78bba]' : 'bg-[#5c2c16]'
                                        }`}
                                    style={hexClip}
                                />
                                <div
                                    className={`absolute inset-[2px] transition-colors duration-500 ${isDark ? 'bg-[#51445f]' : 'bg-[#dcb372]'
                                        }`}
                                    style={hexClip}
                                />

                                <div
                                    className={`absolute inset-[4px] ${
                                        isDark ? 'bg-[#292434]' : 'bg-[#3b2314]'
                                    } flex items-center justify-center shadow-inner`}
                                    style={hexClip}
                                >
                                    <FaShieldAlt className="text-xl text-[#0EA5E9]" />
                                </div>
                            </div>

                            <span
                                className={`text-[9px] font-bold ${heading} text-center mt-1`}
                            >
                                Security<br />Mindset
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ВЕЛИКЕ ВІКНО СЕРТИФІКАТА */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Закрити сертифікат"
                        >
                            &times;
                        </button>

                        <img
                            src="/certificate.png"
                            alt="Сертифікат повний розмір"
                            className="max-w-full max-h-[90vh] object-contain border-4 border-[#dcb372] rounded-none shadow-[0_0_0_4px_#795438,8px_8px_0_rgba(0,0,0,0.5)] cursor-default bg-white"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Awards;