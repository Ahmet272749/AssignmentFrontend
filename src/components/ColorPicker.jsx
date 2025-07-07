
const colorMap = {
    yellow: { label: "Yellow Gold", code: "#E6CA97" },
    white: { label: "White Gold", code: "#D9D9D9" },
    rose: { label: "Rose Gold", code: "#E1A4A9" }
};

function ColorPicker({ selectedColor, onChange }) {
    return (
        <div className="flex gap-2 mt-2">
            {Object.entries(colorMap).map(([key, { label, code }]) => (
                <button
                    key={key}
                    onClick={() => onChange(key)}
                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === key ? "border-black" : "border-gray-300"}`}
                    style={{ backgroundColor: code }}
                    title={label}
                />
            ))}
        </div>
    );
}

export default ColorPicker;
