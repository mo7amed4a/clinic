/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "../../hooks";
import { request } from "../../utils/axios-util";

type SettingProviderProps = {
  children: ReactNode;
};

type SettingContextType = {
  setting: Record<string, never>;
  setSetting: (value: never) => void;
};

type DataItem = {
  id: string | number;
  value: never;
};

type Item = {
  title: string;
  data: DataItem[];
};

type ApiResponse = {
  data: {
    data: {
      reduce(arg0: (acc: Record<string, never>, item: Item) => Record<string, never>, arg1: {}): Record<string, never>;
      data: Item[];
    };
  };
};

const SettingContext = createContext<SettingContextType | undefined>(undefined);

export const SettingProvider = ({ children }: SettingProviderProps) => {
  const [setting, setSetting] = useLocalStorage<Record<string, never>>(
    "setting",
    {}
  );

  const formatInitialValues = (
    data: ApiResponse | undefined
  ): Record<string, never> => {
    if (!data?.data?.data) {
      return {};
    }

    return data.data.data.reduce((acc: Record<string, never>, item: Item) => {
      item.data.forEach((dataItem) => {
        //@ts-ignore
        acc[dataItem?.key_en.replace(/\s+/g, '')] = dataItem.value;
      });
      return acc;
    }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request<ApiResponse>({
          method: "GET",
          url: "master-data/settings",
        });
        setSetting(formatInitialValues(response));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setSetting]);

  const value = useMemo(
    () => ({
      setting,
      setSetting,
    }),
    [setting, setSetting]
  );

  return (
    //@ts-ignore
    <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
  );
};

export const useSetting = (): SettingContextType => {
  const context = useContext(SettingContext);
  if (context === undefined) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return context;
};
