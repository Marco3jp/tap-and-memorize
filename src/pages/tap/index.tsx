import React, {MouseEvent as ReactMouseEvent, MouseEventHandler} from "react";
import {BasicButton} from "../../components/shared/basicButton";
import {TapCategory} from "../../types/tapCategory";
import styled from "styled-components";

// 「記録」画面
export function TapPage() {
    const category: TapCategory = {
        uuid: "0c8f2d87-8b0c-4e25-8678-0093e2c992d8",
        title: "飲食店",
        tapTargets: {
            rows: [{
                columns: [{
                    cell: {
                        uuid: "a",
                        title: "a",
                        isSelected: false
                    }
                }, {
                    cell: {
                        uuid: "b",
                        title: "b",
                        isSelected: false
                    }
                }]
            }, {
                columns: [{
                    cell: {
                        uuid: "c",
                        title: "c",
                        isSelected: false
                    }
                }, {
                    cell: {
                        uuid: "d",
                        title: "d",
                        isSelected: false
                    }
                }]
            }, {
                columns: [{
                    cell: {
                        uuid: "e",
                        title: "e",
                        isSelected: false
                    }
                }, {
                    cell: {
                        uuid: "f",
                        title: "f",
                        isSelected: false
                    }
                }, {
                    cell: {
                        uuid: "g",
                        title: "g",
                        isSelected: false
                    }
                }]
            }]
        }
    }

    const Row = styled.div``
    const onClickButton = (e: ReactMouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    const TapTargetGrids = category.tapTargets.rows.map((row, index) => {
        const buttons = row.columns.map(column => {
            return <BasicButton key={column.cell.uuid} text={column.cell.title} onClick={onClickButton}  />
        })

        return <Row key={index}>{buttons}</Row>
    })

    return (
        <div>
            <h1>Tap</h1>
            <div>{TapTargetGrids}</div>
        </div>
    )
}
