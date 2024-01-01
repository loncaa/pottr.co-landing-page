export default function SectionWrapper({ children }: { children: unknown }) {
  return (
    <div className="py-14 md:py-20">
      <section className="relatve flex items-center w-full px-5 mx-auto max-w-7xl">
        {children}
      </section>
    </div>
  );
}
