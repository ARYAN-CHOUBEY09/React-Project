import React from 'react';
import { motion } from 'framer-motion';

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
  label?: string;
  description?: string;
}

const Toggle: React.FC<ToggleProps> = ({ 
  enabled, 
  onChange, 
  label, 
  description 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        {label && <div className="font-medium">{label}</div>}
        {description && (
          <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
        )}
      </div>
      <button
        type="button"
        onClick={onChange}
        className={`${
          enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1`}
      >
        <span className="sr-only">Toggle {label}</span>
        <motion.span
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30
          }}
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </button>
    </div>
  );
};

export default Toggle;