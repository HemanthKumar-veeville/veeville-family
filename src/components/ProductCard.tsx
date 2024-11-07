import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
