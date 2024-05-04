export default function FooterButton({ label, onClick }) {
    return (
        <div
            className="w-full h-fit text-center fixed bottom-5"
        >
            <button
                className="bg-[#7cf31b] w-[90%] h-12 rounded-lg text-lg font-semibold"
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}