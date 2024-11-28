import Input from "@/components/molecules/form/input";
import Link from "next/link";
import React from "react";
import MainData from "./MainData";
import { Form, Formik } from "formik";
import LoginIcon from "@/components/atoms/icons/loginIcon";
import Button from "@/components/molecules/Button";
import Image from "next/image";
import { useMutate } from "@/hooks";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth/AuthProvider";
import { notify } from "@/utils/toast";
import Cookies from "js-cookie";

function Main() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const { mutate: register, isPending: loadingData } = useMutate({
    mutationKey: [`client/auth/register`],
    endpoint: `client/auth/register`,
    onSuccess(data) {
      if (data?.data?.status) {
        notify("success");
        setUser(data?.data?.user);
        Cookies.set("token", data?.data?.token);
        router.push("/");
      } else {
        notify("error", data?.data?.errors[0]);
      }
    },
    onError(err) {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  return (
    <main className="flex justify-center items-center cursor-default">
      <div className="log-form panel p-6 w-full sm:w-[30rem]">
        <div className="flex justify-center items-center flex-col gap-2">
          <LoginIcon />
          <div className="text-[1.4rem] font-bold text-primary tracking-wide">
            Register
          </div>
        </div>

        <Formik
          initialValues={{}}
          onSubmit={(values) => register(values)}
          className="w-full space-y-4 my-5"
        >
          <Form>
            <MainData />

            <Button label="Register" type="submit" isLoading={loadingData} />
          </Form>
        </Formik>

        <div className="w-full space-y-7 py-3">
          <p className="w-full h-[1px] flex justify-center items-center bg-gray-300 select-none">
            <span className="bg-white px-3 text-[.85rem] text-gray-500 font-semibold tracking-wide -mt-[1px]">
              OR
            </span>
          </p>

          <div className="w-full grid grid-cols-2 gap-3">
            <Link
              href="/login"
              className="w-full py-2.5 border border-gray-300 rounded-md flex justify-center items-center hover:bg-primary-light duration-300"
            >
              <Image
                src="/media/layout/google.png"
                alt="Google"
                width={27}
                height={27}
                className="w-[1.7rem] h-[1.7rem]"
              />
            </Link>

            <Link
              href="/login"
              className="w-full py-2.5 bg-[#3a559c] border border-gray-300 rounded-md flex justify-center items-center hover:opacity-[.8] duration-300"
            >
              <Image
                src="/media/layout/facebook.png"
                alt="Facebook"
                width={27}
                height={27}
                className="w-[1.7rem] h-[1.7rem]"
              />
            </Link>
          </div>
        </div>

        <div className="space-y-3 pt-3 pb-2 select-none">
          <p className="w-full flex justify-center items-center gap-2 text-[.9rem] text-gray-600 tracking-wide font-semibold">
            <span>Already have an account?</span>
            <Link
              href="/login"
              className="text-primary hover:opacity-[.8] hover:underline duration-300"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
