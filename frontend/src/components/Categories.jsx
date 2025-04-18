import React from 'react';
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-6 px-4 gap-3 rounded-lg flex flex-col justify-center items-center min-h-[140px]"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <p className="text-sm font-medium text-center mt-2">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
