"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchSection() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const fetchLocations = async (query: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&components=country:in&key=YOUR_API_KEY`
      );
      const data = await response.json();
      const locationOptions = data.predictions.map((place: any) => ({
        id: place.place_id,
        name: place.description,
      }));
      setLocations(locationOptions);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length > 2) {
      fetchLocations(query);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-8 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">Find Your Dream Job</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <Input placeholder="Job type or keyword" className="bg-white" />
        </div>
        <div>
         
          <Select onValueChange={(value) => setSelectedLocation(value)}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.name}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-3">0-3 years</SelectItem>
              <SelectItem value="3-6">3-6 years</SelectItem>
              <SelectItem value="6-9">6-9 years</SelectItem>
              <SelectItem value="9+">9+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select salary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50k">₹0 - ₹50k</SelectItem>
              <SelectItem value="50k-1lakh">₹50k - ₹1 lakh</SelectItem>
              <SelectItem value="1-5lakh">₹1 lakh - ₹5 lakh</SelectItem>
              <SelectItem value="5lakh+">₹5 lakh+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-full mt-6 bg-white text-blue-700 font-semibold hover:bg-blue-100">
        <Search className="mr-2 h-4 w-4" /> Search Jobs
      </Button>
    </div>
  );
}
