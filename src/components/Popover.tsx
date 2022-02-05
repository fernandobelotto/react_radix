import * as PopoverPrimitive from '@radix-ui/react-popover';
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = PopoverPrimitive.Content


export default function CustomPopover() {

    return (
        <>
            <h1>popover primitivo</h1>
            <Popover>
                <PopoverTrigger>
                    esse é um trigger
                </PopoverTrigger>
                <PopoverContent>
                    <div>
                        <h2>popover title</h2>
                        <p>esse é o conteudo</p>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}