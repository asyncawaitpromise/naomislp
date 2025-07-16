const Section = ({ 
  children, 
  className = '', 
  background = 'transparent',
  padding = 'default'
}) => {
  const backgrounds = {
    transparent: '',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-teal-50',
    white: 'bg-white',
    dark: 'bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white'
  };
  
  const paddings = {
    none: '',
    sm: 'py-8',
    default: 'py-16',
    lg: 'py-20'
  };
  
  const classes = [
    backgrounds[background],
    paddings[padding],
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {children}
    </section>
  );
};

export default Section;