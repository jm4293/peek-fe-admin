interface IProps {
  title: string;
  color?: 'base' | 'delete' | 'gray';
  type?: 'submit' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
}

const buttonColor = {
  base: 'bg-[#5A4FCF] hover:bg-[#786DE8] disabled:bg-[#A7A3D3]',
  delete: 'bg-[#FF6666] hover:bg-[#FF9999] disabled:bg-[#FFCCCC]',
  gray: 'bg-[#D1D5DB] hover:bg-[#E5E7EB] disabled:bg-[#F1F5F9] text-black',
};

export const Button = (props: IProps) => {
  const { title, color = 'base', type = 'button', onClick, className, disabled } = props;

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`w-full py-4 ${buttonColor[color]} ${className}`}
      type={type}
      onClick={clickHandler}
      disabled={disabled}>
      <p className={`text-base font-normal whitespace-nowrap ${color === 'gray' ? 'text-black' : 'text-white'}`}>
        {title}
      </p>
    </button>
  );
};
