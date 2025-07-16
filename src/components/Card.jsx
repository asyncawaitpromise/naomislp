const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  gradient = false,
  padding = 'lg'
}) => {
  const baseClasses = 'bg-white rounded-2xl border border-gray-100 shadow-lg';
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 hover:border-teal-300 transform hover:-translate-y-1' : '';
  const gradientClasses = gradient ? 'relative overflow-hidden' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };
  
  const classes = [
    baseClasses,
    hoverClasses,
    gradientClasses,
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-blue-50/30"></div>
      )}
      <div className={gradient ? 'relative' : ''}>
        {children}
      </div>
    </div>
  );
};

export default Card;