import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2,PlusCircle } from "lucide-react";

const Tadarus = () => {
  const navigate = useNavigate();
  
  const [qariList, setQariList] = 
    useState<{ name: string; start: number; end: number }[]>([
      { name: "", start: 1, end: 30 }
    ]);
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
    navigate("/tracking", { state: { qariList } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Tadarus</h1>
        <span className="text-2xl font-bold text-blue-400 pt-5">
          {remainingJuz} Juzu' Remaining
        </span>
      </div>

      <div className="shadow-md rounded-lg p-6 text-black bg-white/30
      backdrop-filter backdrop-blur-sm overflow-hidden">
        <div className="overflow-y-auto max-h-96">
          {qariList.map((qari, index) => (
            <div key={index} className="flex gap-4 items-center mb-4">
              <input
                type="text"
                className="w-1/3 px-3 py-2 border rounded-md shadow-sm text-sm"
                placeholder="Enter Qari name"
                value={qari.name}
                onChange={(e) => updateQari(index, "name", e.target.value)}
                disabled={index < qariList.length - 1}
              />

              <div className={`w-1/2 flex flex-col`}>
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

              {index < qariList.length - 1 ? (
                <button 
                  onClick={() => removeQari(index)} 
                  className="flex items-center gap-2 p-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                  <span className="text-sm">Remove Qari</span>
                </button>
              ) : (
                remainingJuz > 0 ? 
                (
                  <button
                    onClick={addQari}
                    className="flex items-center gap-2 p-2 text-green-600 hover:text-green-800"
                  >
                    <PlusCircle size={18} />
                    <span className="text-sm w-14">Add Qari</span>
                  </button>
                )
                : 
                <div className="w-1/5 flex items-center gap-2 p-2">
                  <span className="text-sm w-14"></span>
                </div>
              )}
            </div>
          ))}
        </div>

        {qariList.length > 0 && qariList[qariList.length - 1].name.trim() !== "" && remainingJuz === 0 && (
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={startTadarus}
              className="w-1/4 py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Start Tadarus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tadarus;
