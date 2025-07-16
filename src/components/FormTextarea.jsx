import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'react-feather';

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  success,
  helpText,
  rows = 4,
  maxLength,
  showCounter = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseTextareaClasses = `
    w-full px-4 py-4 text-base border-2 rounded-xl transition-all duration-300 
    bg-white placeholder-gray-400 text-gray-900 resize-y min-h-[120px]
    focus:outline-none focus:ring-4 focus:ring-teal-500/20
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    touch-manipulation
  `;
  
  const borderClasses = error 
    ? 'border-red-400 focus:border-red-500' 
    : success
    ? 'border-green-400 focus:border-green-500'
    : isFocused
    ? 'border-teal-500 shadow-lg'
    : 'border-gray-400 hover:border-gray-500';

  const labelClasses = `
    block text-sm font-semibold mb-3 transition-colors duration-200
    ${error ? 'text-red-700' : success ? 'text-green-700' : 'text-gray-800'}
  `;

  return (
    <div className={`space-y-2 ${className}`}>
      <label className={labelClasses}>
        {label} {required && <span className="text-red-500 text-lg">*</span>}
      </label>
      
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          maxLength={maxLength}
          className={`${baseTextareaClasses} ${borderClasses}`}
          {...props}
        />
        
        {error && (
          <div className="absolute right-3 top-4 text-red-500">
            <AlertCircle size={20} />
          </div>
        )}
        
        {success && !error && (
          <div className="absolute right-3 top-4 text-green-500">
            <CheckCircle size={20} />
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-start min-h-[1.25rem]">
        <div className="flex-1">
          {error && (
            <p className="text-sm text-red-600 font-medium flex items-start gap-1">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              {error}
            </p>
          )}
          
          {success && !error && (
            <p className="text-sm text-green-600 font-medium flex items-center gap-1">
              <CheckCircle size={16} />
              {success}
            </p>
          )}
          
          {helpText && !error && !success && (
            <p className="text-sm text-gray-600">{helpText}</p>
          )}
        </div>
        
        {showCounter && maxLength && (
          <div className="text-sm text-gray-500 ml-2 flex-shrink-0">
            {value?.length || 0}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTextarea;