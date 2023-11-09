export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl sm:text-4xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
