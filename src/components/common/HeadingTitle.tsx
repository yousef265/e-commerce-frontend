import { Heading, HeadingProps } from "@chakra-ui/react";

interface IProps extends HeadingProps {
    title: string;
}

function HeadingTitle({ title, ...props }: IProps) {
    return (
        <Heading textTransform={"uppercase"} {...props}>
            {title}
        </Heading>
    );
}

export default HeadingTitle;
