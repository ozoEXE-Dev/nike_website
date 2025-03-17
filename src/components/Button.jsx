const Button = ({text, transparent,widthFull}) => (
    <button className={ `${widthFull && 'w-full'} cursor-pointer ${transparent === true? "text-slate-gray border-1" : "bg-red text-white"} rounded-4xl py-3 px-8  text-lg font-montserrat`}>{text}</button>
);

export default Button;
