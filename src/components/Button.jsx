import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '', 
  fullWidth = false,
  as: Component = 'button',
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-teal-600 to-blue-700 text-white hover:from-teal-700 hover:to-blue-800 focus:ring-teal-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-teal-700 focus:ring-white',
    gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 hover:from-yellow-300 hover:to-orange-400 focus:ring-yellow-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    white: 'bg-white text-teal-700 hover:bg-gray-100 focus:ring-teal-500 shadow-lg hover:shadow-xl transform hover:scale-105'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component ref={ref} className={classes} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;