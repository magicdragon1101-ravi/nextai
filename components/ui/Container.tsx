import clsx from 'clsx';

interface ContainerI {
  as?: React.ElementType | string;
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  as: Component = 'div',
  className,
  children,
}: ContainerI) {
  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
}
