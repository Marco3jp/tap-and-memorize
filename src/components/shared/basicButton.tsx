import styled from "styled-components";

type BasicButtonProps = {
    text: string
    width?: string
    height?: string
}

export function BasicButton(props: BasicButtonProps) {
    const Button = styled.button`
      width: ${props.width};
      height: ${props.height};
    }
    `

    return (
        <Button type={"button"}>
            {props.text}
        </Button>
    )
}
