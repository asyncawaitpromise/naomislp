import Card from './Card';
import Button from './Button';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  price, 
  features = [], 
  buttonText = 'Learn More',
  buttonVariant = 'primary',
  onButtonClick,
  className = '',
  gradient = 'from-teal-500 to-blue-600'
}) => {
  return (
    <Card hover className={`h-full ${className}`}>
      <div className="flex flex-col h-full">
        <div className={`inline-flex p-4 bg-gradient-to-br ${gradient} rounded-xl mb-6 self-start group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        
        {price && (
          <div className="text-2xl font-bold text-teal-700 mb-4">{price}</div>
        )}
        
        {features.length > 0 && (
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          variant={buttonVariant} 
          onClick={onButtonClick} 
          fullWidth
          className="mt-auto"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;