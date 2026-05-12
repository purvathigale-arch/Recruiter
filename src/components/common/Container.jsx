export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        max-w-[1440px]
        mx-auto
        px-6
        lg:px-[96px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}