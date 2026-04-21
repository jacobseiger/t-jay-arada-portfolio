export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/40 text-center">
      <p className="text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} T Jay Arada. Built with care.
      </p>
    </footer>
  );
}