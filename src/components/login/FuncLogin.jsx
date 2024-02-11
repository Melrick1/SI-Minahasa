// usePasswordToggle.js
import { useState } from 'react';

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    handleTogglePassword,
  };
};

export default usePasswordToggle;