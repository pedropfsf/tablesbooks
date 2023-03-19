import { toast } from "react-toastify";
import { useEffect, useState } from "react";

type TypeMessageProps = "info" | "success" | "warning" | "error";

type UseMessageErrorEffectPropsObject = {
  message: string;
  isError: boolean;
};

export default function useMessageErrorEffect(typeMessage: TypeMessageProps, 
  { message, isError }: UseMessageErrorEffectPropsObject  
) {
  useEffect(() => {
    if (isError) {
      toast[typeMessage](message);
    }
  }, [isError]);
}