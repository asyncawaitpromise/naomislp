const Testimonial = ({ 
  quote, 
  author, 
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'border-l-4 border-teal-500 pl-6 bg-white/90 rounded-r-lg p-4 hover:bg-white transition-all duration-300',
    card: 'bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300',
    highlight: 'border-l-4 border-teal-500 pl-6 bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-r-lg p-4 hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-300'
  };
  
  const textColors = {
    default: 'text-gray-800',
    card: 'text-gray-800', 
    highlight: 'text-white'
  };
  
  const authorColors = {
    default: 'text-gray-600',
    card: 'text-gray-600',
    highlight: 'text-gray-300'
  };
  
  return (
    <div className={`${variants[variant]} ${className}`}>
      <p className={`${textColors[variant]} italic mb-2 leading-relaxed`}>
        "{quote}"
      </p>
      <p className={`text-sm font-semibold ${authorColors[variant]}`}>
        - {author}
      </p>
    </div>
  );
};

export default Testimonial;