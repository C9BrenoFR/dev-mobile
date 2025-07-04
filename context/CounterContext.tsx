import React, { createContext, useContext, useReducer } from 'react';

type Action =
    | { type: "INCREMENT", payload: number }
    | { type: "DECREMENT", payload: number }
    | { type: "RESET", payload: number };

interface CounterContextType {
    counter: number;
    increment: (num: number) => void;
    decrement: (num: number) => void;
    reset: () => void;
}

function CounterReducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        case "RESET":
            return action.payload;
        default:
            return state;
    }
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface ContextProps {
    children: React.ReactNode
}

export const CounterProvider = ({ children }: ContextProps) => {

    const [counter, dispatch] = useReducer(CounterReducer, 0);

    function increment(num: number) {
        dispatch({ type: "INCREMENT", payload: num })
    }

    function decrement(num: number) {
        dispatch({ type: "DECREMENT", payload: num })
    }

    function reset() {

        dispatch({ type: "RESET", payload: 0 })
    }


    return (
        <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter deve ser usado dentro de <CounterProvider>');
    }
    return context; // { state, dispatch }
};