import FormData from "form-data";
import fs from "fs";
import path from "path";

// Utility function to construct the form payload
export function constructFormData() {
  const formData = new FormData();
  formData.append(
    "images",
    fs.createReadStream(path.join(path.resolve(), "fixtures/homeAloneHouse.png")),
    "homeAloneHouse.png"
  );
  formData.append("title", "Beautiful House");
  formData.append("address", "123 Main Street");
  formData.append("city", "Los Angeles");
  formData.append("state", "CA");
  formData.append("zipCode", "90001");
  formData.append("price", 750000);
  formData.append("bedrooms", 3);
  formData.append("bathrooms", 2);
  formData.append("garage", 1);
  formData.append("sqft", 2000);
  formData.append("lotSize", 8000);
  formData.append("isPublished", true);
  formData.append("description", "A lovely home with modern amenities.");
  return formData;
}
