// AppContext.js
const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [fav, setFav] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFav = localStorage.getItem("favourites");
            if (storedFav) {
                setFav(JSON.parse(storedFav));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("favourites", JSON.stringify(fav));
        }
    }, [fav]);

    const handleAddToFav = (product) => {
        setFav((prevFav) => {
            const isExists = prevFav.some((item) => item.id === product.id);
            return isExists ? prevFav.filter((item) => item.id !== product.id) : [...prevFav, product];
        });
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const value = {
        handleAddToFav,
        fav,
        isModalOpen,
        openModal,
        closeModal,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
