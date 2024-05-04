export default function Layout({ children, title = false }) {
    return (
        <div
            className="bg-[#ABEF09] w-screen h-screen absolute overflow-hidden"
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
                            className="text-[#ABEF09] text-6xl mt-48"
                        >
                            ZEKE
                        </div>
                        <div
                            className="-mt-14"
                        >
                            <img
                                src="portal.png"
                                className=""
                            />
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