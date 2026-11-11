export function getBrowserInfo() {
    const ua = navigator.userAgent;

    // Визначаємо операційну систему
    let os = "Невідома";

    if (ua.includes("Windows")) {
        os = "Windows";
    } else if (ua.includes("Android")) {
        os = "Android";
    } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        os = "iOS";
    } else if (ua.includes("Mac OS")) {
        os = "macOS";
    } else if (ua.includes("Linux")) {
        os = "Linux";
    }

    // Визначаємо браузер
    let browser = "Невідомий";

    if (ua.includes("Edg/")) {
        browser = "Microsoft Edge";
    } else if (ua.includes("OPR/")) {
        browser = "Opera";
    } else if (ua.includes("Firefox/")) {
        browser = "Mozilla Firefox";
    } else if (ua.includes("Chrome/")) {
        browser = "Google Chrome";
    } else if (ua.includes("Safari/")) {
        browser = "Safari";
    }

    return {
        operatingSystem: os,
        browser: browser,
        userAgent: ua,
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        online: navigator.onLine,
        screenWidth: screen.width,
        screenHeight: screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
}
