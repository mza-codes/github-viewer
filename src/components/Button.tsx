type ButtonProps = {
  size?: string;
  color?: string;
  label?: string;
  props?: any;
};
const Button = ({ size, color, label, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${size} ${color ?? "bg-amber-400"} `}>
      {label}
    </button>
  );
};

export default Button;
