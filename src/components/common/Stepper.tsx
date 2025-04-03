import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";

interface IProps {
    setToggleCart: (toggle: boolean) => void;
}

function Stepper({ setToggleCart }: IProps) {
    return (
        <NumberInput.Root
            defaultValue="1"
            unstyled
            spinOnPress={false}
            onValueChange={(Details) => {
                if (Details.valueAsNumber === 0) setToggleCart(true);
            }}
        >
            <HStack gap="2">
                <NumberInput.DecrementTrigger asChild>
                    <IconButton variant="outline" size="sm">
                        <LuMinus />
                    </IconButton>
                </NumberInput.DecrementTrigger>
                <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                <NumberInput.IncrementTrigger asChild>
                    <IconButton variant="outline" size="sm">
                        <LuPlus />
                    </IconButton>
                </NumberInput.IncrementTrigger>
            </HStack>
        </NumberInput.Root>
    );
}

export default Stepper;
