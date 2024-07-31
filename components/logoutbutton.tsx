import { link } from "@nextui-org/theme";

export const LogoutButton = ({ onClick }: { onClick?: VoidFunction }) => {
  return (
    <form action="/auth/sign-out" method="post">
      <button
        className={link({ color: "danger", size: "lg" })}
        type="submit"
        onClick={onClick}
      >
        Logout
      </button>
    </form>
  );
};
