import * as RadixTooltip from '@radix-ui/react-tooltip';
export default function Tooltip() {
    return (

        <RadixTooltip.Provider>

            <RadixTooltip.Root>

                <RadixTooltip.TooltipTrigger asChild>
                    <h1>Aqui tem um tooltip</h1>
                </RadixTooltip.TooltipTrigger>



                <RadixTooltip.Content>
                    <h1> aqui vai um conteúdo</h1>

                </RadixTooltip.Content>

            </RadixTooltip.Root>

        </RadixTooltip.Provider>

    );
}