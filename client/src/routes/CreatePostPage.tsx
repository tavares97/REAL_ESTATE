import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadWidget from "@/components/UploadWidget";
import apiRequest from "@/lib/apiRequest";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const {
      title,
      price,
      address,
      city,
      bedroom,
      bathroom,
      latitude,
      longitude,
      type,
      property,
      description,
      utilities,
      pet,
      income,
      size,
      school,
      bus,
      restaurant,
    } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/post", {
        postData: {
          title,
          price: parseInt(price as string),
          images,
          address,
          city: (city as string).toLowerCase(),
          bedroom: parseInt(bedroom as string),
          bathroom: parseInt(bathroom as string),
          latitude: parseFloat(latitude as string),
          longitude: parseFloat(longitude as string),
          type,
          property,
          userId: user?.id,
        },
        postDetail: {
          description,
          utilities,
          pet,
          income,
          size: parseInt(size as string),
          school: parseInt(school as string),
          bus: parseInt(bus as string),
          restaurant: parseInt(restaurant as string),
        },
      });

      navigate(`/post/${res.data.id}`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-full flex ">
      <div className="flex-3 overflow-scroll">
        <h1 className="text-2xl font-bold">Add New Post</h1>
        <div className="mt-[30px] mr-[50px] mb-[100px]">
          <form
            className="flex justify-between flex-wrap gap-5 px-1"
            onSubmit={handleSubmit}
          >
            <div className="w-1/3 flex flex-col gap-2 ">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <Input id="title" name="title" type="text" placeholder="Title" />
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="price" className="text-sm">
                Price
              </label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Price"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
              />
            </div>

            <div className="flex flex-col gap-2 w-full h-[120px]">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <Input id="city" name="city" type="text" placeholder="City" />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="bedroom" className="text-sm">
                Bedroom Number
              </label>
              <Input
                id="bedroom"
                name="bedroom"
                type="number"
                min={1}
                placeholder="Bedroom Number"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="bathroom" className="text-sm">
                Bathroom Number
              </label>
              <Input
                id="bathroom"
                name="bathroom"
                type="number"
                min={1}
                placeholder="Bathroom Number"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="latitude" className="text-sm">
                Latitude
              </label>
              <Input
                id="latitude"
                name="latitude"
                type="text"
                placeholder="Latitude"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="longitude" className="text-sm">
                Longitude
              </label>
              <Input
                id="longitude"
                name="longitude"
                type="text"
                placeholder="Longitude"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="type" className="text-sm">
                Type
              </label>

              <Select defaultValue="RENT" name="type">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RENT">Rent</SelectItem>
                  <SelectItem value="BUY">Buy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="property" className="text-sm">
                Property
              </label>

              <Select name="property">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="APARTMENT">Apartment</SelectItem>
                  <SelectItem value="HOUSE">House</SelectItem>
                  <SelectItem value="CONDO">Condo</SelectItem>
                  <SelectItem value="LAND">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="utilities" className="text-sm">
                Utilities Policy
              </label>

              <Select name="utilities">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner is responsible</SelectItem>
                  <SelectItem value="tenant">Tenant is responsible</SelectItem>
                  <SelectItem value="shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="pet" className="text-sm">
                Pet Policy
              </label>

              <Select name="pet">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pets" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="not-allowed">Not Allowed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="income" className="text-sm">
                Income Policy
              </label>
              <Input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="size" className="text-sm">
                Total Size (sqft)
              </label>
              <Input
                min={0}
                id="size"
                name="size"
                type="number"
                placeholder="Total Size (sqft)"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="school" className="text-sm">
                School
              </label>
              <Input
                min={0}
                id="school"
                name="school"
                type="number"
                placeholder="School"
              />
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="bus" className="text-sm">
                Bus
              </label>
              <Input
                min={0}
                id="bus"
                name="bus"
                type="number"
                placeholder="Bus"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <label htmlFor="restaurant" className="text-sm">
                Restaurant
              </label>
              <Input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                placeholder="Restaurant"
              />
            </div>
            <button className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer w-full">
              Add
            </button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="flex-2 bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center md:flex-none sm:flex-none ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="image"
            className="w-1/2 h-[180px] object-cover rounded-md"
          />
        ))}

        <UploadWidget setState={setImages} />
      </div>
    </div>
  );
};

export default CreatePostPage;
