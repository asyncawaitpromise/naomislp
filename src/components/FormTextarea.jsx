import { useState, useEffect, useRef } from 'react';
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
  compact = false,
  autoResize = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);
  const hasValue = value && value.length > 0;

  // Auto-resize functionality
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = Math.max(textarea.scrollHeight, compact ? 80 : 120) + 'px';
    }
  }, [value, autoResize, compact]);

  const baseTextareaClasses = compact
    ? `w-full px-3 py-3 text-base border-2 rounded-lg transition-all duration-300 
       bg-white placeholder-gray-400 text-gray-900 resize-y min-h-[80px]
       focus:outline-none focus:ring-2 focus:ring-teal-500/20
       disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
       touch-manipulation ${hasValue || isFocused ? 'pt-6 pb-2' : ''} ${autoResize ? 'resize-none' : 'resize-y'}`
    : `w-full px-4 py-4 text-base border-2 rounded-xl transition-all duration-300 
       bg-white placeholder-gray-400 text-gray-900 resize-y min-h-[120px]
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
        <textarea
          ref={textareaRef}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          placeholder={compact ? (hasValue || isFocused ? placeholder : '') : placeholder}
          required={required}
          rows={autoResize ? undefined : rows}
          maxLength={maxLength}
          className={`${baseTextareaClasses} ${borderClasses}`}
          style={autoResize ? { minHeight: compact ? '80px' : '120px' } : {}}
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
      
      <div className={`flex justify-between items-start ${compact ? 'min-h-[1rem]' : 'min-h-[1.25rem]'}`}>
        <div className="flex-1">
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
        
        {showCounter && maxLength && (
          <div className={`${compact ? 'text-xs' : 'text-sm'} text-gray-500 ml-2 flex-shrink-0`}>
            {value?.length || 0}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTextarea;