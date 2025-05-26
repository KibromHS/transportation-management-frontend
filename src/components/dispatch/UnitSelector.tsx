import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust import as needed

const UnitSelector = ({ handleWeight, handleLength }) => {
  const [selectedWeightUnit, setSelectedWeightUnit] = useState(null);
  const [selectedLengthUnit, setSelectedLengthUnit] = useState(null);

  const weightUnits = ["lbs", "kg", "ton"];
  const lengthUnits = ["ft", "in", "m", "cm"];

  return (
    <div className="space-y-4">
      {/* Weight selection */}
      <div>
        <p className="text-sm mb-2 font-medium">Select Weight Unit:</p>
        <div className="flex space-x-2">
          {weightUnits.map((unit) => (
            <Button
              key={unit}
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedWeightUnit(unit);
                handleWeight(unit);
              }}
              className={
                selectedWeightUnit === unit
                  ? "bg-primary/10 border-primary"
                  : ""
              }
            >
              {unit}
            </Button>
          ))}
        </div>
      </div>

      {/* Length selection */}
      <div>
        <p className="text-sm mb-2 font-medium">Select Length Unit:</p>
        <div className="flex space-x-2">
          {lengthUnits.map((unit) => (
            <Button
              key={unit}
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedLengthUnit(unit);
                handleLength(unit);
              }}
              className={
                selectedLengthUnit === unit
                  ? "bg-primary/10 border-primary"
                  : ""
              }
            >
              {unit}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitSelector;
