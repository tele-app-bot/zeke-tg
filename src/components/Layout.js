export default function Layout({ children, title = false }) {
    return (
        <div
            className="bg-[#7cf31b] w-screen h-screen absolute"
        >
            <div
                className="bg-[#000000] w-full h-[95vh] bottom-0 rounded-t-3xl absolute"
            >
                <div>
                    <div
                        className="text-center"
                        hidden={!title}
                    >
                        <div
                            className="text-[#7cf31b] text-[3rem] font-bold"
                        >
                            ZEKE
                        </div>
                    </div>
                    <div
                        className="relative"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}