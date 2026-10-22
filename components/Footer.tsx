import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-8 text-center text-sm">
      <p className="font-bold text-white">
        Feito por <span className="text-accent">@{profile.name}</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}