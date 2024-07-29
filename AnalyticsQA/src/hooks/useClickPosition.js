import { useState } from "react";

const useClickPosition = () => {
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        if (position === 0) {
            setPosition(16);
        } else {
            setPosition(0);
        }
    };

    return { position, handleClick };
};

export default useClickPosition;