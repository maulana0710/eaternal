"use client";
import { CardComponent } from "@/components/app-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Revenue from "@/public/Revenue.svg";
import { useEffect, useState } from "react";
import { ChartComponent } from "@/components/app-chart";

type UserData = {
  id: number;
  username: string;
  count_transactions: number;
};

type ChartData = {
  xaxis: string;
  desktop: number;
};

export default function Index() {
  const [data, setData] = useState<UserData[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  const fetchData = async () => {
    try {
      const response = await fetch("http://45.64.99.242:9116/users"); // replace with your API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result.data); // Assuming the API returns the data in a "data" field
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData(); // call fetchData once on component mount
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // Create chart data based on fetched user data
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Shuffle the data and assign it to months randomly
      const shuffledUsers = [...data].sort(() => 0.5 - Math.random());
      const chartDataArray: ChartData[] = months.map((month, index) => {
        const userIndex = index < shuffledUsers.length ? index : 0; // Default to the first user if not enough data
        return {
          xaxis: month,
          desktop: shuffledUsers[userIndex].count_transactions,
        };
      });

      setChartData(chartDataArray);
    }
  }, [data]);

     // Calculate total revenue based on `chartData`
  useEffect(() => {
    const total = chartData.reduce((acc, { desktop }) => {
      const randomMultiplier = Math.random() * 10000;
      return acc + desktop * randomMultiplier;
    }, 0);
    setTotalRevenue(total);
  }, [chartData]);

  // Format totalRevenue with dot separator for thousands
  const formattedTotalRevenue = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalRevenue);
  return (
    <div className="items-center p-8 pb-20 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Transaction</h1>

      {/* card */}
      <CardComponent className="mt-8 sm:max-w-full w-full lg:w-1/2 xl:w-1/4">
        <CardHeader>
          <CardTitle className="text-xl">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center">
            <Image src={Revenue} alt="Revenue Icon" width={20} height={20} />
            <h1 className="text-lg mx-2 font-bold">RP {formattedTotalRevenue}</h1>
          </div>
        </CardContent>
      </CardComponent>
      
      {/* charts */}
      <div className="mt-8">
        <ChartComponent params={{ title: 'Sales Order', chartData, typeChart: "line" }} />
      </div>
    </div>
  );
}
