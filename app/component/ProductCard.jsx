"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../Helpers/Data";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

const ProductCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Separate Men and Women Products
  const menProducts = products.filter((product) => product.category === "men");
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );

  // Open Modal with selected product details
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Men's Wear Section */}
      <section>
        <h2
          style={{
            fontFamily: "Dancing Script, cursive",
            fontSize: "2rem", // You can adjust the size as per your preference
            fontWeight: "700", // This gives it a bold, cursive effect
          }}
          className="text-2xl font-bold mt-36 text-gray-800 my-6"
        >
          Gents Wear
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {menProducts.map((product) => (
            <motion.div
              key={product.id}
              className="relative border rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="group relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full rounded-t-lg"
                />
                <motion.button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => openModal(product)} // Trigger modal on click
                >
                  View Details
                </motion.button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Women's Wear Section */}
      <section>
        <h2
          className="text-2xl font-bold text-gray-800 my-6"
          style={{
            fontFamily: "Dancing Script, cursive",
            fontSize: "2rem", // You can adjust the size as per your preference
            fontWeight: "700", // This gives it a bold, cursive effect
          }}
        >
          Womens Wear
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {womenProducts.map((product) => (
            <motion.div
              key={product.id}
              className="relative border rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="group relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full rounded-t-lg"
                />
                <motion.button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => openModal(product)} // Trigger modal on click
                >
                  View Details
                </motion.button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <ProductDetailModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProductCard;
