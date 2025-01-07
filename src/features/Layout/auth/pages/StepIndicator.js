import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import "../assets/css/index.css"
const StepIndicator = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                index < currentStep
                  ? 'bg-pink-600'
                  : index === currentStep
                  ? 'bg-pink-500'
                  : 'bg-gray-300'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <span className="text-white">{index + 1}</span>
              )}
            </motion.div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-600">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-20 h-1 mx-2 ${
                index < currentStep ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
