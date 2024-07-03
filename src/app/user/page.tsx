import ListUser from "./listUser";

export const metadata = {
  title: "User",
};

export default function User() {
  return (
    <div className="min-h-screen px-3 pt-3">
      <ListUser/>
    </div>
  );
}
