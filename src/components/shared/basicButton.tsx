import styled from "styled-components";
import {MouseEvent as ReactMouseEvent} from "react";

type BasicButtonProps = {
    onClick?: (event: ReactMouseEvent<HTMLButtonElement>) => void;
    text: string
    width?: string
    height?: string
}

export function BasicButton(props: BasicButtonProps) {
    const Button = styled.button`
      width: ${props.width};
      height: ${props.height};
      border-radius: 12px;
    }
    `

    return (
        <Button type={"button"} onClick={props.onClick}>
            {props.text}
        </Button>
    )
}
