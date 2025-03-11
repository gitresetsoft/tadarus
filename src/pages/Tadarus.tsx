import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Tadarus = () => {
  const [qariList, setQariList] = useState<{ name: string; start: number; end: number }[]>([]);
  const remainingJuz = 30 - (qariList.length > 0 ? qariList[qariList.length - 1].end : 0);
  const canAddQari = remainingJuz > 0 && (qariList.length === 0 || qariList[qariList.length - 1].name.trim() !== "");

  const addQari = () => {
    if (!canAddQari) return;
    const lastQari = qariList[qariList.length - 1];
    const newStart = lastQari ? lastQari.end + 1 : 1;
    setQariList([...qariList, { name: "", start: newStart, end: 30 }]);
  };

  const updateQari = (index: number, field: string, value: string | number) => {
    setQariList((prev) =>
      prev.map((qari, i) => (i === index ? { ...qari, [field]: value } : qari))
    );
  };

  const removeQari = (index: number) => {
    setQariList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      if (newList.length > 0) newList[newList.length - 1].end = 30;
      return newList;
    });
  };

  const startTadarus = () => {
    console.log("Tadarus started", qariList);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tadarus</h1>

      <div className="bg-white shadow-md rounded-lg p-6 text-black">
        <div className="text-right mb-4">
          <span className="text-2xl font-bold text-blue-400">{remainingJuz} Juzu' Remaining</span>
        </div>

        {qariList.map((qari, index) => (
          <div key={index} className="flex gap-4 items-center mb-4">
            <input
              type="text"
              className="w-1/2 px-3 py-2 border rounded-md shadow-sm"
              placeholder="Enter Qari name"
              value={qari.name}
              onChange={(e) => updateQari(index, "name", e.target.value)}
              disabled={index < qariList.length - 1}
            />

            <div className="w-1/2 flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                Juzu' {qari.start} - {qari.end}
              </span>
              <input
                type="range"
                min={qari.start}
                max={index < qariList.length - 1 ? qari.end : 30}
                value={qari.end}
                onChange={(e) => updateQari(index, "end", Math.max(Number(e.target.value), qari.start))}
                disabled={index < qariList.length - 1}
              />
            </div>

            {index > 0 && (
              <button onClick={() => removeQari(index)} className="p-2 text-red-600 hover:text-red-800">
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}

        {remainingJuz !== 0 ? (
          <button
          type="button"
          onClick={addQari}
          className="w-full mt-4 py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Add Qari
          </button>
        ) : ''}
          <button
            type="button"
            onClick={startTadarus}
            className="w-full mt-4 py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Start Tadarus
          </button>
      </div>
    </div>
  );
};

export default Tadarus;
