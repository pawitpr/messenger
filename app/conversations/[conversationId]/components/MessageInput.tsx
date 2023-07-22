'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister
} from "react-hook-form";
import localFont from 'next/font/local'
const myFont = localFont({ src: './SF-Pro-Display-Regular.otf', weight:"28px" })

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  placeholder, 
  id, 
  type, 
  required, 
  register, 
}) => {
  return (  
     <div className="relative w-full">
    <div className={myFont.className}>
 
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          w-full 
          rounded-full
          focus:outline-none
        "

      />
    </div></div>
   );
}
 
export default MessageInput;