/* eslint-disable @typescript-eslint/ban-ts-comment */
import LoginIcon from "@/components/atoms/icons/loginIcon";
import Button from "@/components/molecules/Button";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import MainData from "./MainData";
import { useAuth } from "@/context/auth/AuthProvider";
import { useRouter } from "next/router";
import { useMutate } from "@/hooks";
import { notify } from "@/utils/toast";
import Cookies from "js-cookie";

function Main() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const { mutate: LoginPost, isPending: loadingData } = useMutate({
    mutationKey: [`client/auth/login`],
    endpoint: `client/auth/login`,
    onSuccess(data) {
      //@ts-ignore
      if (data?.data?.status) {
        notify("success");
              //@ts-ignore

        setUser(data?.data?.user);
              //@ts-ignore

        Cookies.set("token", data?.data?.token);
        router.push("/");
      } else {
              //@ts-ignore

        notify("error", data?.data?.errors[0]);
      }
    },
    onError(err) {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  return (
    <div>
      <main className="flex cursor-default items-center justify-center">
        <div className="log-form panel w-full p-6 sm:w-[27rem]">
          <div className="flex flex-col items-center justify-center gap-2">
            <LoginIcon />
            <div className="text-[1.4rem] font-bold tracking-wide text-primary">
              Log In
            </div>
          </div>

          <Formik
            initialValues={{}}
            onSubmit={(values) => LoginPost(values)}
            className="my-5 w-full space-y-5"
          >
            <Form>
              <MainData />
              <Button type="submit" label="Log in" isLoading={loadingData} />
            </Form>
          </Formik>

          <div className="w-full space-y-7 py-3">
            <p className="flex h-[1px] w-full select-none items-center justify-center bg-gray-300">
              <span className="-mt-[1px] bg-white px-3 text-[.85rem] font-semibold tracking-wide text-gray-500">
                OR
              </span>
            </p>

            <div className="grid w-full grid-cols-2 gap-3">
              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2.5 duration-300 hover:bg-primary-light"
              >
                <Image
                  src="/media/layout/google.png"
                  alt="Google"
                  width={27}
                  height={27}
                />
              </Link>

              <Link
                href="/auth/login"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-[#3a559c] py-2.5 duration-300 hover:opacity-[.8]"
              >
                <Image
                  src="/media/layout/facebook.png"
                  alt="Facebook"
                  width={27}
                  height={27}
                />
              </Link>
            </div>
          </div>

          <div className="select-none space-y-3 pb-2 pt-3">
            <p className="flex w-full items-center justify-center gap-2 text-[.9rem] font-semibold tracking-wide text-gray-600">
              <Link
                href="/auth/recovery"
                className="text-primary duration-300 hover:underline hover:opacity-[.8]"
              >
                Forgot your password?
              </Link>
            </p>

            <p className="flex w-full items-center justify-center gap-2 text-[.9rem] font-semibold tracking-wide text-gray-600">
              <span> Don t have an account yet?</span>

              <Link
                href="/register"
                className="text-primary duration-300 hover:underline hover:opacity-[.8]"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
