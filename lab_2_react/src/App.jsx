import { useState } from 'react';

import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import bgImage from './background.png';

function App() {
    const [isDark, setIsDark] = useState(() => {
        const now = new Date();
        const hours = now.getHours();

        return hours < 7 || hours >= 21;
    });

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div
            className={`min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center p-4 md:p-8 transition-colors duration-500 ${isDark ? 'bg-[#211e2b]' : 'bg-[#2b1d0c]'
                }`}
            style={{
                backgroundImage: isDark
                    ? `linear-gradient(rgba(20,16,30,0.82), rgba(20,16,30,0.82)), url(${bgImage})`
                    : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})`
            }}
        >
            <div className="w-full max-w-5xl flex flex-col shadow-2xl">
                <Header isDark={isDark} />

                <main
                    className={`border-x-4 p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-inner transition-colors duration-500 ${isDark
                            ? 'bg-[#292434] border-[#756080]'
                            : 'bg-[#f4e2bb] border-[#795438]'
                        }`}
                >
                    {/* Ліва колонка: профіль */}
                    <div className="md:col-span-1">
                        <Profile
                            isDark={isDark}
                            onToggleTheme={toggleTheme}
                        />
                    </div>

                    {/* Права колонка: інформація */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <Education isDark={isDark} />
                        <Experience isDark={isDark} />
                        <Skills isDark={isDark} />
                        <Awards isDark={isDark} />
                        <Projects isDark={isDark} />
                        <Contacts isDark={isDark} />
                    </div>
                </main>

                <Footer isDark={isDark} />
                <Reviews isDark={isDark} />
                <ContactForm isDark={isDark} />
            </div>
        </div>
    );
}

export default App;