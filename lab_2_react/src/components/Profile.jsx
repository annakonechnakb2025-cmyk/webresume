import { useState } from "react";

function Profile({ isDark, onToggleTheme }) {
    const [appleCount, setAppleCount] = useState(0);

    const applePositions = [
        { top: "15%", left: "30%" },
        { top: "30%", left: "60%" },
        { top: "42%", left: "23%" },
        { top: "45%", left: "49%" },
        { top: "23%", left: "47%" },
        { top: "33%", left: "35%" },
        { top: "19%", left: "67%" },
        { top: "27%", left: "18%" },
        { top: "39%", left: "72%" },
    ];

    const panel = isDark
        ? "bg-[#302a3d] border-[#756080] text-[#f3e8ff]"
        : "bg-[#f4e2bb] border-[#a47551] text-[#3b2314]";

    const card = isDark
        ? "bg-[#393047] border-[#756080] text-[#f3e8ff]"
        : "bg-[#faebd7] border-[#b58863] text-[#3b2314]";

    const inner = isDark
        ? "bg-[#40344a] border-[#756080] text-[#f3e8ff]"
        : "bg-[#f4e2bb] border-[#a47551] text-[#3b2314]";

    const heading = isDark ? "text-[#e9d5ff]" : "text-[#5c2c16]";
    const muted = isDark ? "text-[#d8c8ec]" : "text-[#795438]";
    const divider = isDark ? "border-[#756080]" : "border-[#dcb372]";

    const photoFrame = isDark
        ? "shadow-[inset_4px_4px_0_#9b86ad,inset_-4px_-4px_0_#211e2b,4px_4px_0_#171520]"
        : "shadow-[inset_4px_4px_0_#fbe8bd,inset_-4px_-4px_0_#8b5a2b,4px_4px_0_#6b4226]";

    const nameFrame = isDark
        ? "shadow-[inset_2px_2px_0_#756080,inset_-2px_-2px_0_#211e2b]"
        : "shadow-[inset_2px_2px_0_#fff3d5,inset_-2px_-2px_0_#b58863]";

    const detailsFrame = isDark
        ? "shadow-[inset_4px_4px_0_#756080,inset_-4px_-4px_0_#211e2b,4px_4px_0_#171520]"
        : "shadow-[inset_4px_4px_0_#fff0c9,inset_-4px_-4px_0_#a47551,4px_4px_0_#6b4226]";

    const innerFrame = isDark
        ? "shadow-[inset_2px_2px_0_#756080,inset_-2px_-2px_0_#211e2b]"
        : "shadow-[inset_2px_2px_0_#fff3d5,inset_-2px_-2px_0_#b58863]";

    return (
        <div
            className={`flex flex-col gap-3 h-full rounded-lg p-1 transition-colors duration-500 ${isDark
                    ? "bg-[#211e2b] text-[#f3e8ff]"
                    : "bg-transparent text-[#3b2314]"
                }`}
        >
            {/* ФОТО */}
            <div
                className={`border-4 border-solid rounded-none p-3 flex flex-col items-center transition-colors duration-500 ${panel} ${photoFrame}`}
            >
                <div
                    className={`w-48 h-48 border-4 rounded overflow-hidden shadow-inner flex items-center justify-center ${isDark
                            ? "border-[#756080] bg-[#211e2b]"
                            : "border-[#795438] bg-[#3b2314]"
                        }`}
                >
                    <img
                        src={isDark ? "/photo-dark.png" : "/photo-light.png"}
                        alt="Фото"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "https://placehold.co/192x192";
                        }}
                    />
                </div>

                <div
                    className={`mt-3 w-full border-2 rounded-none text-center py-1.5 transition-colors duration-500 ${card} ${nameFrame}`}
                >
                    <span
                        className={`font-bold text-sm ${isDark ? "text-[#f3e8ff]" : "text-[#4a2e12]"
                            }`}
                    >
                        Конечна Анна
                    </span>
                </div>
            </div>

            {/* ОСНОВНІ ХАРАКТЕРИСТИКИ */}
            <div
                className={`border-4 border-solid rounded-none p-3 flex flex-col flex-grow gap-3 transition-colors duration-500 ${card} ${detailsFrame}`}
            >
                {/* Профіль */}
                <div className={`flex items-center justify-between border-b pb-2 ${divider}`}>
                    <span className="text-[11px] font-bold">Профіль:</span>

                    <div className="flex gap-1.5">
                        <div
                            className={`w-7 h-7 border rounded flex items-center justify-center text-[15px] text-green-600 font-bold opacity-70 ${isDark
                                ? "bg-[#40344a] border-[#756080]"
                                : "bg-[#f4e2bb] border-[#a47551]"
                                }`}
                        >
                            ♂
                        </div>

                        <div
                            className={`w-7 h-7 border-2 border-red-500 rounded flex items-center justify-center text-[17px] text-red-500 font-bold shadow-sm ${isDark ? "bg-[#40344a]" : "bg-[#f4e2bb]"}`}
                        >
                            ♀
                        </div>
                    </div>
                </div>

                {/* Рівень */}
                <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span>⚡ Рівень кваліфікації</span>
                        <span>Junior</span>
                    </div>

                    <div
                        className={`w-full border h-2 rounded-full overflow-hidden p-[1px] ${isDark
                                ? "bg-[#51445b] border-[#756080]"
                                : "bg-[#e6ceac] border-[#a47551]"
                            }`}
                    >
                        <div className="bg-gradient-to-r from-orange-500 to-green-500 h-full rounded-full w-[85%]" />
                    </div>

                    <div className={`text-[8px] text-right mt-0.5 ${muted}`}>
                        Кібербезпека &amp; Threat Intel
                    </div>
                </div>

                {/* Стек */}
                <div
                    className={`border-2 rounded-none p-1.5 flex items-center gap-2 transition-colors duration-500 ${inner} ${innerFrame}`}
                >
                    <span
                        className={`text-lg p-1 border rounded shadow-sm ${isDark
                                ? "bg-[#302a3d] border-[#756080]"
                                : "bg-[#faebd7] border-[#a47551]"
                            }`}
                    >
                        💻
                    </span>

                    <div>
                        <div className={`text-[8px] font-bold uppercase ${heading}`}>
                            ОСНОВНИЙ СТЕК
                        </div>
                        <div className="text-[10px] font-semibold">
                            Python, Linux, Git
                        </div>
                    </div>
                </div>

                {/* Напрямки роботи */}
                <div>
                    <div className={`text-[9px] font-bold uppercase mb-1.5 ${heading}`}>
                        ⭐ Напрямки роботи
                    </div>

                    <div className="grid grid-cols-2 gap-1 text-[9px]">
                        {[
                            "Threat Intel",
                            "Security Ops",
                            "Аналіз даних",
                            "Захист мереж",
                        ].map((item) => (
                            <div
                                key={item}
                                className={`border-2 rounded-none text-center py-1 font-medium transition-colors duration-500 ${inner} ${innerFrame}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ДЕРЕВО РОЗВИТКУ */}
                <div className="relative w-full flex flex-col items-center py-1 mt-auto">
                    <div className={`text-[9px] font-bold uppercase text-center ${heading}`}>
                        🌱 Дерево розвитку
                    </div>

                    {/* Сцена */}
                    <div
                        className={`relative w-full h-[370px] flex justify-center items-end transition-colors duration-500 ${isDark
                                ? "bg-transparent border-0 shadow-none rounded-none"
                                : "bg-transparent border-0 shadow-none rounded-none"
                            }`}
                    >
                        {/* СОНЦЕ / МІСЯЦЬ */}
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label={
                                isDark
                                    ? "Увімкнути світлу тему"
                                    : "Увімкнути темну тему"
                            }
                            title={
                                isDark
                                    ? "Увімкнути світлу тему"
                                    : "Увімкнути темну тему"
                            }
                            className="absolute top-[-360px] left-1/2 -translate-x-1/2 z-30 cursor-pointer border-0 bg-transparent p-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                        >
                            {/* Сонячні промені */}
                            {!isDark && (
                                <div
                                    className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none w-[280px] h-[340px] blur-xl"
                                    style={{
                                        background:
                                            "linear-gradient(to bottom, rgba(255,210,70,0.30), rgba(255,210,70,0.13) 45%, transparent 100%)",
                                        clipPath:
                                            "polygon(38% 0, 62% 0, 100% 100%, 0 100%)",
                                    }}
                                />
                            )}


                            {/* Світіння сонця / місяця */}
                            <div
                                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500 ${isDark
                                        ? "w-[210px] h-[210px] bg-[radial-gradient(circle,rgba(224,231,255,0.65)_0%,rgba(165,180,252,0.35)_30%,rgba(129,140,248,0.15)_55%,transparent_75%)] blur-xl"
                                        : "w-[190px] h-[190px] bg-[radial-gradient(circle,rgba(255,220,100,0.48)_0%,rgba(255,205,70,0.22)_40%,transparent_72%)] blur-lg"
                                    }`}
                            />

                            {/* СОНЦЕ */}
                            {!isDark ? (
                                <svg
                                    viewBox="0 0 16 16"
                                    className="relative z-10 w-36 h-36 transition-transform duration-300 hover:scale-110"
                                    shapeRendering="crispEdges"
                                    style={{
                                        imageRendering: "pixelated",
                                        filter: "drop-shadow(0 0 12px rgba(255,195,40,0.8))",
                                    }}
                                >
                                    <rect x="6" y="0" width="4" height="2" fill="#f59e0b" />
                                    <rect x="6" y="14" width="4" height="2" fill="#f59e0b" />
                                    <rect x="0" y="6" width="2" height="4" fill="#f59e0b" />
                                    <rect x="14" y="6" width="2" height="4" fill="#f59e0b" />
                                    <rect x="3" y="2" width="2" height="2" fill="#fbbf24" />
                                    <rect x="11" y="2" width="2" height="2" fill="#fbbf24" />
                                    <rect x="3" y="12" width="2" height="2" fill="#fbbf24" />
                                    <rect x="11" y="12" width="2" height="2" fill="#fbbf24" />
                                    <rect x="5" y="2" width="6" height="1" fill="#fbbf24" />
                                    <rect x="2" y="5" width="12" height="6" fill="#fbbf24" />
                                    <rect x="5" y="13" width="6" height="1" fill="#fbbf24" />
                                    <rect x="4" y="4" width="8" height="8" fill="#fde68a" />
                                    <rect x="5" y="5" width="6" height="6" fill="#fcd34d" />
                                    <rect x="5" y="6" width="2" height="2" fill="#92400e" />
                                    <rect x="9" y="6" width="2" height="2" fill="#92400e" />
                                    <rect x="6" y="9" width="4" height="1" fill="#92400e" />
                                </svg>
                            ) : (
                                /* МІСЯЦЬ */
                                <svg
                                    viewBox="0 0 16 16"
                                    className="relative z-10 w-36 h-36 transition-transform duration-300 hover:scale-110"
                                    shapeRendering="crispEdges"
                                    style={{
                                        imageRendering: "pixelated",
                                        filter: `
                                            drop-shadow(0 0 5px rgba(255,255,255,0.9))
                                            drop-shadow(0 0 12px rgba(199,210,254,0.9))
                                            drop-shadow(0 0 24px rgba(165,180,252,0.8))
                                            drop-shadow(0 0 40px rgba(129,140,248,0.5))
                                         `,
                                    }}

                                >
                                    <rect x="2" y="3" width="1" height="1" fill="#e9d5ff" />
                                    <rect x="4" y="1" width="1" height="1" fill="#e9d5ff" />
                                    <rect x="13" y="4" width="1" height="1" fill="#e9d5ff" />
                                    <rect x="12" y="11" width="1" height="1" fill="#e9d5ff" />
                                    <rect x="3" y="12" width="1" height="1" fill="#e9d5ff" />
                                    <rect x="14" y="8" width="1" height="1" fill="#e9d5ff" />

                                    <rect x="6" y="1" width="4" height="2" fill="#a78bfa" />
                                    <rect x="4" y="3" width="8" height="2" fill="#a78bfa" />
                                    <rect x="3" y="5" width="9" height="6" fill="#a78bfa" />
                                    <rect x="4" y="11" width="7" height="2" fill="#a78bfa" />
                                    <rect x="6" y="13" width="4" height="1" fill="#a78bfa" />

                                    <rect x="6" y="2" width="3" height="2" fill="#f5f3ff" />
                                    <rect x="5" y="4" width="5" height="3" fill="#f5f3ff" />
                                    <rect x="4" y="7" width="5" height="3" fill="#f5f3ff" />
                                    <rect x="5" y="10" width="4" height="2" fill="#f5f3ff" />
                                    <rect x="7" y="12" width="2" height="1" fill="#f5f3ff" />

                                    <rect x="9" y="3" width="3" height="2" fill="#a78bfa" />
                                    <rect x="8" y="5" width="4" height="4" fill="#a78bfa" />
                                    <rect x="8" y="9" width="3" height="2" fill="#a78bfa" />
                                </svg>
                            )}
                        </button>

                        {/* МЕТЕЛИКИ ТА СЛІДИ */}
                        <div className="absolute top-[-185px] left-1/2 -translate-x-1/2 w-48 h-28 z-20 pointer-events-none">
                            <svg
                                className="absolute left-0 top-8 w-12 h-10"
                                viewBox="0 0 48 40"
                                fill="none"
                                shapeRendering="crispEdges"
                            >
                                <path
                                    d="M42 8 L34 12 L38 18 L27 20 L30 27 L17 29"
                                    stroke="#ec4899"
                                    strokeWidth="1.5"
                                    strokeDasharray="2 3"
                                    opacity="0.8"
                                />
                                <rect x="11" y="28" width="2" height="2" fill="#ec4899" opacity="0.6" />
                                <rect x="5" y="31" width="2" height="2" fill="#ec4899" opacity="0.4" />
                            </svg>

                            <svg
                                viewBox="0 0 16 16"
                                className="absolute left-3 top-10 w-6 h-6"
                                shapeRendering="crispEdges"
                                style={{
                                    imageRendering: "pixelated",
                                    transform: "rotate(-20deg) scaleX(-1)",
                                }}
                            >
                                <rect x="7" y="4" width="2" height="9" fill="#5c2c45" />
                                <rect x="5" y="2" width="2" height="3" fill="#5c2c45" />
                                <rect x="9" y="2" width="2" height="3" fill="#5c2c45" />
                                <rect x="2" y="2" width="4" height="4" fill="#f9a8d4" />
                                <rect x="1" y="5" width="5" height="4" fill="#ec4899" />
                                <rect x="3" y="9" width="3" height="3" fill="#f9a8d4" />
                                <rect x="10" y="2" width="4" height="4" fill="#f9a8d4" />
                                <rect x="10" y="5" width="5" height="4" fill="#ec4899" />
                                <rect x="10" y="9" width="3" height="3" fill="#f9a8d4" />
                            </svg>

                            <svg
                                className="absolute right-0 top-16 w-12 h-10"
                                viewBox="0 0 48 40"
                                fill="none"
                                shapeRendering="crispEdges"
                            >
                                <path
                                    d="M5 8 L14 12 L10 18 L22 21 L19 27 L31 30"
                                    stroke="#38bdf8"
                                    strokeWidth="1.5"
                                    strokeDasharray="2 3"
                                    opacity="0.8"
                                />
                                <rect x="33" y="29" width="2" height="2" fill="#38bdf8" opacity="0.6" />
                                <rect x="39" y="32" width="2" height="2" fill="#38bdf8" opacity="0.4" />
                            </svg>

                            <svg
                                viewBox="0 0 16 16"
                                className="absolute right-3 top-20 w-7 h-7"
                                shapeRendering="crispEdges"
                                style={{
                                    imageRendering: "pixelated",
                                    transform: "rotate(20deg)",
                                }}
                            >
                                <rect x="7" y="4" width="2" height="9" fill="#334155" />
                                <rect x="5" y="2" width="2" height="3" fill="#334155" />
                                <rect x="9" y="2" width="2" height="3" fill="#334155" />
                                <rect x="2" y="2" width="4" height="4" fill="#bae6fd" />
                                <rect x="1" y="5" width="5" height="4" fill="#38bdf8" />
                                <rect x="3" y="9" width="3" height="3" fill="#bae6fd" />
                                <rect x="10" y="2" width="4" height="4" fill="#bae6fd" />
                                <rect x="10" y="5" width="5" height="4" fill="#38bdf8" />
                                <rect x="10" y="9" width="3" height="3" fill="#bae6fd" />
                            </svg>
                        </div>

                        {/* ДЕРЕВО */}
                        <img
                            src="/tree.png"
                            alt="Дерево професійного розвитку"
                            className="relative z-10 w-[330px] h-[380px] object-contain"
                            style={{ imageRendering: "pixelated" }}
                        />

                        {/* ЯБЛУКА */}
                        {applePositions.slice(0, appleCount).map((pos, index) => (
                            <img
                                key={index}
                                src="/apple.png"
                                alt={`Яблуко ${index + 1}`}
                                className="absolute z-20 w-9 h-9 object-contain animate-[applePop_0.35s_ease-out]"
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    imageRendering: "pixelated",
                                }}
                            />
                        ))}

                        {/* ЛІЙКА */}
                        <button
                            type="button"
                            onClick={() => {
                                if (appleCount < applePositions.length) {
                                    setAppleCount((count) => count + 1);
                                }
                            }}
                            disabled={appleCount >= applePositions.length}
                            aria-label="Полити дерево"
                            title="Полити дерево"
                            className="absolute bottom-5 right-7 z-30 w-12 h-12 p-0 bg-transparent border-0 shadow-none cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-110 active:scale-95 disabled:opacity-60"
                        >
                            <img
                                src="/watering-can.png"
                                alt=""
                                className="w-full h-full object-contain"
                                style={{ imageRendering: "pixelated" }}
                            />
                        </button>
                    </div>

                    {/* ЛІЧИЛЬНИК */}
                    <div
                        className={`text-center text-[9px] mt-1 h-4 ${muted}`}
                        aria-live="polite"
                    >
                        {appleCount < applePositions.length
                            ? `Полий дерево: 🍎 ${appleCount}/${applePositions.length}`
                            : "🍎 Дерево принесло плоди!"}
                    </div>

                    <div className="h-7 flex items-center justify-center">
                        {appleCount === applePositions.length && (
                            <button
                                type="button"
                                onClick={() => setAppleCount(0)}
                                className={`text-[9px] underline ${isDark
                                        ? "text-[#d8b4fe] hover:text-[#f5d0fe]"
                                        : "text-[#795438] hover:text-[#5c2c16]"
                                    }`}
                            >
                                Почати спочатку
                            </button>
                        )}
                    </div>
                </div>

                {/* МОВИ */}
                <div className={`border-t pt-2 ${divider}`}>
                    <div className={`text-[9px] font-bold uppercase mb-1 ${heading}`}>
                        🗣️ Мови
                    </div>

                    <div className="flex justify-between text-[10px]">
                        <span>Українська:</span>
                        <span className="font-bold">Рідна</span>
                    </div>

                    <div className="flex justify-between text-[10px]">
                        <span>Англійська:</span>
                        <span className="font-bold">B2 (Technical)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;