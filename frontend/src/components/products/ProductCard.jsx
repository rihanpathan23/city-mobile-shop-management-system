import React from 'react';

const ProductCard = ({
  image,
  name = 'Product Name',
  brand = 'Generic',
  condition = 'Good',
  sellingPrice = 0,
  originalPrice,
  whatsappNumber = '',
  className = '',
}) => {
  // Condition badge color mapping
  const conditionColors = {
    Excellent: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300',
    Good: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300',
    Fair: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300',
  };

  const badgeStyle = conditionColors[condition] || conditionColors.Good;

  // Placeholder image if none is provided
  const imageUrl =
    image ||
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I am interested in buying *${name}* (${brand}) listed for ₹${Number(
        sellingPrice
      ).toLocaleString('en-IN')}. Is it still available?`
    );
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    const url = cleanNumber
      ? `https://wa.me/${cleanNumber}?text=${message}`
      : `https://wa.me/?text=${message}`;
    
    window.open(url, '_blank');
  };

  return (
    <div
      className={`group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden ${className}`.trim()}
    >
      {/* Product Image & Condition Badge */}
      <div className="relative aspect-square w-full bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md ${badgeStyle}`}
        >
          {condition}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
            {brand}
          </p>
          <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
        </div>

        {/* Pricing */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-gray-900 dark:text-white">
            ₹{Number(sellingPrice).toLocaleString('en-IN')}
          </span>
          {originalPrice && Number(originalPrice) > Number(sellingPrice) && (
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 line-through">
              ₹{Number(originalPrice).toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* WhatsApp Action Button */}
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-[0.98]"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="text-sm font-semibold">Contact on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;