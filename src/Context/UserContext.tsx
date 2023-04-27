import { createContext } from "react";

interface IMyContext {
    adminData: object,
    setAdmin: (adminData: object) => void,
    userData: object,
    setUser: (userData: object) => void,
    createBee: string,
    setCreationBee: (createBee: string) => void
}

export const MyContext = createContext<IMyContext>({
    adminData: {},
    setAdmin: () => {},
    userData: {},
    setUser: () => {},
    createBee: '',
    setCreationBee: () => {}
})