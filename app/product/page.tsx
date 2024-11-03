"use client";
import { CardComponent } from "@/components/app-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TotalItem from "@/public/Total Order.svg";
import { useEffect, useState } from "react";
import { ChartComponent } from "@/components/app-chart";

type ItemData = {
  id: number;
  name: string;
  count_sold: number;
};

type ChartData = {
  xaxis: string;
  desktop: number;
};

export default function Index() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0); // State to hold the total count of transactions

  const fetchData = async () => {
    try {
      const response = await fetch("http://45.64.99.242:9116/brands"); // replace with your API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      
      // Transform the data into the format required for the chart
      const transformedData: ChartData[] = result.data.map((user: ItemData) => ({
        xaxis: user.name,         
        desktop: user.count_sold, 
      }));
      setChartData(transformedData);

      // Calculate the total items by summing all count_sold
      const totalCount = result.data.reduce((sum: number, user: ItemData) => sum + user.count_sold, 0);
      setTotalItems(totalCount);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="items-center p-8 pb-20 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Product</h1>

      {/* card */}
      <CardComponent className="mt-8 sm:max-w-full w-full lg:w-1/2 xl:w-1/4">
        <CardHeader>
          <CardTitle className="text-xl">Total Item</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center">
            <Image src={TotalItem} alt="Total Item Icon" width={20} height={20} />
            <h1 className="text-lg mx-2 font-bold">{totalItems}</h1>
          </div>
        </CardContent>
      </CardComponent>
      {/* charts */}
      <div className="mt-8">
        <ChartComponent params={{ title: 'Sales Order', chartData, typeChart: "bar" }} />
      </div>
    </div>
  );
}
