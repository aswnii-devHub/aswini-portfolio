export function Brand() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
      aria-label="Aswini Kumari Gundu, home"
    >
      <span className="grid size-10 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
        AG
      </span>
      <span>
        <strong className="block font-display text-sm leading-tight text-foreground">
          Aswini Gundu
        </strong>
        <span className="text-xs text-muted-foreground">Frontend Engineer</span>
      </span>
    </a>
  );
}
