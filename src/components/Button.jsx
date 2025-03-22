
export const Button = ({onClick,name,startIcon,endIcon}) => {
  return (
    <button type="submit" onClick={onClick} className=" w-50 bg-secondary border transition hover:bg-transparent cursor-pointer hover:border hover:border-primary hover:text-primary flex items-center justify-center gap-2 text-white px-5 py-3 font-manrope rounded-4xl "> {startIcon && <span>{startIcon}</span>}
    {name}
    {endIcon && <span>{endIcon}</span>}</button>
  )
}

