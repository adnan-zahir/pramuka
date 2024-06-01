import LinkBtn from "./LinkBtn";

export default function Header() {
  return (
    <div className="flex flex-col gap-8 justify-center items-start bg-background text-white py-14 px-5">
      <h1 className="text-3xl font-display">Pengembaraan</h1>
      <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque?</span>
      <LinkBtn />
    </div>
  );
}
