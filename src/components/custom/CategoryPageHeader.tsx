interface CategoryPageHeaderProps {
  title: string;
  subtitle: string;
}

export function CategoryPageHeader({ title, subtitle }: CategoryPageHeaderProps) {
  return (
    <header className="w-full bg-secondary text-secondary-foreground shadow-md py-4">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">{title}</h1>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">{subtitle}</p>
      </div>
    </header>
  );
}
