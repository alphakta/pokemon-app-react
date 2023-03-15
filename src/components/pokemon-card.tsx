import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'

type Props = {
    pokemon : Pokemon;
    borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {
    const DEFAULT_BORDER_COLOR = '#f5f5f5';
    const [colorBorderColor, setColorBorderColor] = useState<string>();

    const showBorder = () => { setColorBorderColor(borderColor); }
    const hideBorder = () => { setColorBorderColor(DEFAULT_BORDER_COLOR); }

    return (
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: colorBorderColor }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div> 
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{pokemon.created.toString()}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;