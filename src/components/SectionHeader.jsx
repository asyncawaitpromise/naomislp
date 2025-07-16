const SectionHeader = ({ 
  badge,
  title, 
  subtitle, 
  className = '',
  align = 'center' 
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 px-4 sm:px-0">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;