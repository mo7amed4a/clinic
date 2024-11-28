import { t } from "i18next";
import { CFile_TP } from "../types";

//  PDF OR IMAGE
type pdfOrImageReturn = "pdf" | "image" | "unknown";
export const pdfOrImage = (file: CFile_TP): pdfOrImageReturn => {
  const pdfWordOccurrence = file?.type?.indexOf("pdf");
  const imageWordOccurrence = file?.type?.indexOf("image");
  if (pdfWordOccurrence !== -1) {
    return "pdf";
  } else if (imageWordOccurrence !== -1) {
    return "image";
  } else {
    return "unknown";
  }
};
export const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const getFileTypeFromURL = (url: string) => {
  const extension = url?.split(".")?.pop()?.toLowerCase();
  if (
    extension === "png" ||
    extension === "jpg" ||
    extension === "jpeg" ||
    extension === "gif"
  ) {
    return "image";
  } else if (extension === "pdf") {
    return "pdf";
  } else {
    return "unknown";
  }
};

// translate
export const link = () =>
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const Must_be_only_number = () => `${t("Must be only number")}`;
export const Enter_correct_url = () => `${t("Enter correct url!")}`;
export const requiredTranslation = () => `${t("required")}`;

export const pagePaginate = 10;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
export type OptionType = {
  value: string;
  label?: string;
};

// delete string spaces
export const deleteSpaces = (str: string) => str.replace(/\s+/g, "");



export const indexTable = (index: never, page: never) => {
  return index + 1 + Math.abs(page - 1) * pagePaginate;
};


export function convertToDynamicShape(value: { key_ar: never; key_en: never; value_ar: never; value_en: never; }[]) {
  return value.map((item: { key_ar: never; key_en: never; value_ar: never; value_en: never; }) => ({
    key: {
      ar: item.key_ar,
      en: item.key_en,
    },
    value: {
      ar: item.value_ar,
      en: item.value_en,
    },
  }));
}



export function convertDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const formattedDate = date.toISOString().split("T")[0];
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hours >= 12 ? "م" : "ص";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // return ` ${formattedTime} ${period} / ${formattedDate} `;
  return ` ${formattedDate} `;
}
export function formateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return ` ${formattedTime} ${period} `;
}




export function getInitials(name: string | undefined): string {
  if (!name) return "NA";
  const nameParts = name.split(" ");
  const firstInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastInitial = nameParts[1] ? nameParts[1][0] : "";
  return `${firstInitial}${lastInitial}`.toUpperCase();
}



export function hexToRgba(hex: string, opacity: number) {
  const bigint = parseInt(hex?.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
export function convertFileToLink(file: Blob | MediaSource) {
  const objectURL = URL.createObjectURL(file);
  return objectURL;
}
