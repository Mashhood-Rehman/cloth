"use client";
import Image from "next/image";
import { Icon } from "@iconify/react"; // Import Iconify
import { useState } from "react";

const ProductDetailModal = ({ product, closeModal }) => {
  const [previewImage, setPreviewImage] = useState(product.images[0]); // Initially set to the first image

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 text-3xl"
        >
          <Icon icon="mdi:close" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Side: Main Product Image */}
          <div className="flex justify-center mb-6 md:mb-0">
            <Image
              src={previewImage}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain rounded-md"
            />
          </div>

          {/* Right Side: Product Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="text-xl text-gray-600 mt-2">{product.price}</p>
            <p className="text-gray-800 mt-4">{product.description}</p>

            {/* Preview Images */}
            <div className="mt-6 flex gap-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer w-20 h-20 border rounded-md overflow-hidden"
                  onClick={() => setPreviewImage(image)} // Change main image when clicked
                >
                  <Image
                    src={image}
                    alt={`Preview ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
