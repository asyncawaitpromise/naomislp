import { useState } from 'react';
import { ChevronDown, AlertCircle, CheckCircle } from 'react-feather';

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option...',
  required = false,
  error,
  success,
  helpText,
  compact = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  const baseSelectClasses = compact
    ? `w-full px-3 py-3 text-base border-2 rounded-lg transition-all duration-300 
       bg-white text-gray-900 appearance-none cursor-pointer
       focus:outline-none focus:ring-2 focus:ring-teal-500/20
       disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
       touch-manipulation ${hasValue || isFocused ? 'pt-6 pb-2' : ''}`
    : `w-full px-4 py-4 text-base border-2 rounded-xl transition-all duration-300 
       bg-white text-gray-900 appearance-none cursor-pointer
       focus:outline-none focus:ring-4 focus:ring-teal-500/20
       disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
       touch-manipulation`;
  
  const borderClasses = error 
    ? 'border-red-400 focus:border-red-500' 
    : success
    ? 'border-green-400 focus:border-green-500'
    : isFocused
    ? 'border-teal-500 shadow-lg'
    : 'border-gray-400 hover:border-gray-500';

  const labelClasses = compact
    ? `absolute left-3 transition-all duration-200 pointer-events-none z-10
       ${hasValue || isFocused 
         ? 'top-1.5 text-xs font-medium' 
         : 'top-3 text-base'
       }
       ${error ? 'text-red-700' : success ? 'text-green-700' : 'text-gray-600'}`
    : `block text-sm font-semibold mb-3 transition-colors duration-200
       ${error ? 'text-red-700' : success ? 'text-green-700' : 'text-gray-800'}`;

  return (
    <div className={`${compact ? 'space-y-1' : 'space-y-2'} ${className}`}>
      {!compact && (
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500 text-lg">*</span>}
        </label>
      )}
      
      <div className="relative">
        {compact && (
          <label className={labelClasses}>
            {label} {required && <span className="text-red-500 text-sm">*</span>}
          </label>
        )}
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`${baseSelectClasses} ${borderClasses} pr-12`}
          {...props}
        >
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown size={20} className="text-gray-500" />
        </div>
        
        {error && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-red-500">
            <AlertCircle size={20} />
          </div>
        )}
        
        {success && !error && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500">
            <CheckCircle size={20} />
          </div>
        )}
      </div>
      
      <div className={`${compact ? 'min-h-[1rem]' : 'min-h-[1.25rem]'}`}>
        {error && (
          <p className={`${compact ? 'text-xs' : 'text-sm'} text-red-600 font-medium flex items-start gap-1`}>
            <AlertCircle size={compact ? 12 : 16} className="mt-0.5 flex-shrink-0" />
            {error}
          </p>
        )}
        
        {success && !error && (
          <p className={`${compact ? 'text-xs' : 'text-sm'} text-green-600 font-medium flex items-center gap-1`}>
            <CheckCircle size={compact ? 12 : 16} />
            {success}
          </p>
        )}
        
        {helpText && !error && !success && (
          <p className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600`}>{helpText}</p>
        )}
      </div>
    </div>
  );
};

export default FormSelect;