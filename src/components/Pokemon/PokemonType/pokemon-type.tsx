import React, { FunctionComponent } from "react";
import { formatType } from "../../../helpers/utils";

type Props = {
    type: string;
};

const PokemonTypes: FunctionComponent<Props> = ({ type }) => {
    return (
        <span className={formatType(type)}> { type } </span>
    )
}

export default PokemonTypes; 