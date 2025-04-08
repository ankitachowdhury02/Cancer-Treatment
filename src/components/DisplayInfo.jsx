import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
IconAlertCircle,
IconCircleDashedCheck,
IconFolder,
IconHourglassHigh,
IconUserScan,
} from "@tabler/icons-react";
import MetricsCard from "./MetricsCard";

const DisplayInfo =() => {
  const navigate = useNavigate();
    const [metrics, setMetrics] = useState({
         totalFolders: 0,
         aiPersonalizedTreatment: 0,
         totalScreenings: 0,
         completedScreenings: 0,
         pendingScreenings: 0,
         overdueScreenings: 0
    })

    const metricsData = [
      {
        title: "Specialist Appointments Pending",
        subtitle: "View",
        value: metrics.pendingScreenings,
        icon: IconHourglassHigh,
        onClick: () => navigate("/appointments/pending"),
      },
      {
        title: "Treatment Progress Update",
        subtile: "view",
        value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
        icon: IconCircleDashedCheck,
        onClick: ()=> navigate("/appointments/progress"),
      },
      {
        title: "Total Folders",
        subtile: "view",
        value: metrics.totalFolders,
        icon: IconFolder,
        onClick: ()=> navigate("/folders"),
      },
      {
        title: "Total Screenings",
        subtile: "view",
        value: metrics.totalFolders,
        icon: IconUserScan,
        onClick: ()=> navigate("/screenings"),
      },
      {
        title: "Completed Screenings",
        subtile: "view",
        value: metrics.completedScreenings,
        icon: IconCircleDashedCheck,
        onClick: ()=> navigate("/screenings/completed"),
      },
      {
        title: "Pending Screenings",
        subtile: "view",
        value: metrics.pendingScreenings,
        icon: IconHourglassHigh,
        onClick: ()=> navigate("/screenings/pending"),
      },
      {
        title: "Overdue Screenings",
        subtile: "view",
        value: metrics.overdueScreenings,
        icon: IconAlertCircle,
        onClick: ()=> navigate("/screenings/overdue"),
      },
    ];

    return (
      <div className="flex flex-wrap gap-[26px]">
        <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {metricsData.slice(0, 2).map((metric) => (
            <MetricsCard key={metric.title} {...metric} />
          ))}
        </div>
  
        <div className="mt-[9px] grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {metricsData.slice(2).map((metric) => (
            <MetricsCard key={metric.title} {...metric} />
          ))}
        </div>
      </div>
    );
};

  export default DisplayInfo ;
