import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type CurrencyContextType = {
  fromCurrency: string;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  convertedValue: number;
  setConvertedValue: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValue = {
  fromCurrency: "🇧🇷 BRL - Brazil",
  setFromCurrency: () => null,
  toCurrency: "🇺🇸 USD - United States",
  setToCurrency: () => null,
  amount: 0,
  setAmount: () => null,
  convertedValue: 0,
  setConvertedValue: () => null,
};

export const CurrencyContext = createContext<CurrencyContextType>(defaultValue);

export const CurrencyProvider = ({ children }: Props) => {
  const [fromCurrency, setFromCurrency] = useState<string>("🇧🇷 BRL - Brazil");
  const [toCurrency, setToCurrency] = useState<string>(
    "🇺🇸 USD - United States"
  );
  const [amount, setAmount] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number>(0);

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    convertedValue,
    setConvertedValue,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
