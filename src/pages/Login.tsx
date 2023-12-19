import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useSuggestions } from "../api/suggestions";
import { login } from "../api/login";

type LoginInfo = {
  userName: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();

  const { categories } = useSuggestions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>();

  const onSubmit: SubmitHandler<LoginInfo> = async (
    loginDetails: LoginInfo
  ) => {
    const { token } = await login(loginDetails);
    localStorage.setItem("token", token);

    navigate("/products");
  };

  return (
    <div>
      <div className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-[30%]  bg-slate-100 px-8 py-12"
        >
          <input
            placeholder="User name"
            className="form-input"
            {...register("userName")}
          />

          <input
            placeholder="Password"
            className="form-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <button className="action-button" type="submit">
            Login
          </button>
          <p>Login to buy the items</p>
        </form>
        <div className="p-4 w-full">
          <h1>All categories</h1>
          <div className="flex flex-wrap gap-8 w-full mt-4">
            {categories.map((category: string) => {
              return (
                <div className="h-1/2 w-[48%] bg-slate-100 border capitalize font-bold text-center p-4 text-xl">
                  {category}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
