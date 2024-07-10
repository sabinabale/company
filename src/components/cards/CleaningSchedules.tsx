import React from "react";
import CleanersCard from "./CleanersCard";
import AddScheduleButton from "../buttons/AddScheduleButton";

export default function CleaningSchedules() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8 px-2">
        <h4 className="">Cleaning Schedules</h4>
        <AddScheduleButton />
      </div>
      <CleanersCard />
    </div>
  );
}
