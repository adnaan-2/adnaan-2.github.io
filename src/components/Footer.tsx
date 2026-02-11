const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="mx-auto max-w-6xl text-center">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">$</span> Thanks for visiting • Built with React & TypeScript
      </p>
      <p className="mt-2 font-mono text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Adnan Khalil. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
