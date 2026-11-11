import { useEffect, useState } from "react";
import { getBrowserInfo } from "../utils/browserInfo";

function Footer({ isDark }) {
    const [browserInfo] = useState(() => {
        const savedInfo = localStorage.getItem("browserInfo");

        return savedInfo ? JSON.parse(savedInfo) : getBrowserInfo();
    });

    useEffect(() => {
        localStorage.setItem("browserInfo", JSON.stringify(browserInfo));
    }, [browserInfo]);

    return (
        <footer
            className={`border-4 border-t-0 rounded-b-xl text-center p-4 text-xs shadow-lg ${isDark
                    ? "bg-[#292434] border-[#756080] text-[#c9b8d6]"
                    : "bg-[#f4e2bb] border-[#8B5A2B] text-[#5c3a21]"
                }`}
        >
            <p>© 2026 Конечна Анна Федорівна</p>

            <div className="mt-3 border-t border-dashed pt-3">
                <h3 className="font-bold mb-2">
                    Інформація про систему та браузер
                </h3>

                {browserInfo ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-left break-words">
                        {Object.entries(browserInfo).map(([key, value]) => (
                            <p key={key}>
                                <span className="font-bold">{key}:</span>{" "}
                                {Array.isArray(value)
                                    ? value.join(", ")
                                    : String(value)}
                            </p>
                        ))}
                    </div>
                ) : (
                    <p>Інформація недоступна.</p>
                )}
            </div>
        </footer>
    );
}

export default Footer;