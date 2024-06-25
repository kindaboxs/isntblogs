import MainMenuNavbar from "./MenuNavbar";

export function MainHeader() {
  return (
    <header className="border-border bg-background/85 supports-[backdrop-filter]:bg-background/60 sticky top-0 w-full border-b backdrop-blur">
      <MainMenuNavbar />
    </header>
  );
}
