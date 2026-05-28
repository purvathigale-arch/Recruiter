export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
<<<<<<< HEAD
        max-w-[1280px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
=======
        max-w-[1440px]
        mx-auto
        px-6
        lg:px-[96px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
        ${className}
      `}
    >
      {children}
    </div>
  );
}