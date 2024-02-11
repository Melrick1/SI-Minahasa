import { useState } from 'react';

const usePasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword1);
    };

    const handleTogglePassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handleTogglePassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return {
        showPassword,
        showPassword1,
        showPassword2,
        handleTogglePassword,
        handleTogglePassword1,
        handleTogglePassword2,
    };
};

export default usePasswordToggle;