import Image from 'next/image';


type ButtonProps={
    type?: "button" | "submit";
    title: string,
    icon?: string,
    variant: 'btn_purple';
}

const Button = ({type, title, icon , variant}: ButtonProps) => {
  return (
    <button
    type={type}
    className={`flexCenter gap-3 rounded-full ${variant} border`}
    >
        {icon && <Image src={icon} width={24} height={24} alt={title}/>}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button