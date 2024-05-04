import { cn } from "../utils";

export default function FooterButton({ label, disabled = false, onClick }) {
    const buttonStyle = () => {
        if(disabled) {
            return "bg-slate-800";
        }

        return "bg-[#ABEF09]";
    };

    return (
        <div
            className="w-full h-fit text-center fixed bottom-5"
        >
            <button
                className={cn(
                    "w-[90%] h-12 rounded-lg text-lg font-semibold",
                    buttonStyle()
                )}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}