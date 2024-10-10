import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

type IconButtonProps = ButtonProps;

export function IconButton({ className, ...buttonProps }: IconButtonProps) {
  return (
    <Button
      {...buttonProps}
      className={cn(
        `
        shadow-custom shadow-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px] 
        transition-colors duration-100 ease-in-out
        `,
        className
      )}
      variant="outline"
      size="icon"
    />
  );
}

// custom-btn text-xl max-h-[50px] shadow-custom shadow-primary-500 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-gray-200 px-5s py-2 border border-primary-500 hover:text-primary-500 transition-colors duration-100 ease-in-out bg-gray-900 cursor-pointer rounded-lg
