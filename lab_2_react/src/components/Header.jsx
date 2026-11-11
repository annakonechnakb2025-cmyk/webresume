function Header({ isDark }) {
    return (
        <header
            className={`border-4 rounded-t-xl p-4 text-center shadow-md relative transition-colors duration-500 ${isDark
                    ? 'bg-[#45384f] border-[#756080]'
                    : 'bg-[#dcb372] border-[#795438]'
                }`}
        >
            <h1
                className={`text-2xl md:text-3xl font-extrabold tracking-wider transition-colors duration-500 ${isDark
                        ? 'text-[#f0e5f5] drop-shadow-[1px_1px_0px_#45384f]'
                        : 'text-[#4a2e12] drop-shadow-[1px_1px_0px_#f4e8c1]'
                    }`}
            >
                РЕЗЮМЕ
            </h1>

            <div
                className={`absolute top-3 right-4 border-2 px-3 py-1 rounded text-xs font-bold shadow transition-colors duration-500 ${isDark
                        ? 'bg-[#62506f] border-[#756080] text-[#f0e5f5]'
                        : 'bg-[#b58863] border-[#795438] text-[#fff8dc]'
                    }`}
            >
                PROFILE!
            </div>
        </header>
    );
}

export default Header;