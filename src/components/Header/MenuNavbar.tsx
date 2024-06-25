import MenuNavbarStart from "./MenuNavbarStart";
import MenuNavbarEnd from "./MenuNavbarEnd";

export default function MainMenuNavbar() {
  return (
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <MenuNavbarStart />
      <MenuNavbarEnd />
    </div>
  );
}
