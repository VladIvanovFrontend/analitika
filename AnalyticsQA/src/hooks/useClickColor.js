import { useState } from 'react';

const useClickColor = () => {
    // Состояние для хранения текущего цвета кнопки
    const [isClicked, setIsClicked] = useState(false);

    // Функция для переключения состояния кнопки
    const toggleColor = () => {
        setIsClicked(prevState => !prevState);
    };

    // Возвращаем текущее состояние и функцию для изменения цвета
    return { isClicked, toggleColor };
};

export default useClickColor;