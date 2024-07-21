import { link } from "@nextui-org/theme";

export const LogoutButton = () => {
  return (
    <form action="/auth/sign-out" method="post">
      <button className={link({ color: "danger", size: "lg" })} type="submit">
        Logout
      </button>
    </form>
  );
};
