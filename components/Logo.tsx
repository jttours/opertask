const sizeClasses = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
} as const;

type LogoSize = keyof typeof sizeClasses;

type LogoProps = {
  size?: LogoSize;
};

export function Logo({ size = "md" }: LogoProps) {
  return (
    <span className={`font-display text-ink ${sizeClasses[size]}`}>
      <span className="text-accent">O</span>
      pertask
    </span>
  );
}
