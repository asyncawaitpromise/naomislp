import Container from './Container';

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  badge,
  badges = [],
  actions,
  backgroundPattern = true,
  className = ''
}) => {
  return (
    <section className={`relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {backgroundPattern && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
      )}
      
      <Container className="relative">
        <div className="text-center">
          {badge && (
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8">
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              {description}
            </p>
          )}
          
          {badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                  {badge}
                </div>
              ))}
            </div>
          )}
          
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;