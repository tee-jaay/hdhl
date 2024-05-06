import React from "react"

const CalculatorShowResult: React.FC<{ preStr: string, value: number, postStr: string }> = ({ preStr, value, postStr }) => {
    return (
        <div className="mt-10 mb-4">{preStr} <span className="text-[#43A047]">{value.toFixed(2)}</span> {postStr}</div>
    );
}

export default CalculatorShowResult;