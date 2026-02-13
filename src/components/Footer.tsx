const Footer = () => (
  <footer className="border-t border-border px-4 py-6 sm:px-6 sm:py-8">
    <div className="mx-auto max-w-6xl text-center">
      <p className="font-mono text-xs text-muted-foreground sm:text-sm">
        <span className="text-primary">$</span> Thanks for visiting • Built with React & TypeScript
      </p>
      <p className="mt-2 font-mono text-[10px] text-muted-foreground/60 sm:text-xs">
        © {new Date().getFullYear()} Adnan Khalil. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
