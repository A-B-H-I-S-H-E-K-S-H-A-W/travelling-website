import loginBg from "../../assets/images/login.jpg";
import Layout from "../../Layout";

export default function Auth() {
  return (
    <>
      <Layout showFooter={false}>
        <div
          className="w-screen min-h-screen overflow-hidden"
          style={{
            background: `url(${loginBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div className="flex flex-col px-6 py-12 lg:px-10 h-screen w-xl justify-center rounded-4xl">
              <div className="sm:mx-auto text-center">
                <h1 className="md:text-5xl text-4xl text-white font-semibold style-regular">
                  WanderSphere
                </h1>
                <h2 className="mt-10 text-center text-xl/9 md:text-2xl font-bold tracking-tight text-gray-200">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-200"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-200"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-cyan-600 hover:text-cyan-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <p className="mt-10 text-center text-sm/6 text-gray-300">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold text-cyan-600 hover:text-cyan-500"
                  >
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
