import ContactHero from "./components/ContactHero";
import ContactLayout from "./components/ContactLayout";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ContactHero />
      <ContactLayout />
    </main>
  );
}
