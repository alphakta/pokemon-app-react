import React, { FunctionComponent, useState } from 'react';
import { formatDate } from '../../../helpers/utils';
import Pokemon from '../../../models/pokemon';
import PokemonTypes from '../PokemonType/pokemon-type';
import './pokemon-card.css'
import { useNavigate } from 'react-router-dom';

type Props = {
    pokemon: Pokemon;
    borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {
    const DEFAULT_BORDER_COLOR = '#f5f5f5';
    const navigate = useNavigate();
    const [colorBorderColor, setColorBorderColor] = useState<string>();

    const showBorder = () => { setColorBorderColor(borderColor); }
    const hideBorder = () => { setColorBorderColor(DEFAULT_BORDER_COLOR); }
    const handleClick = (id: number) => { navigate(`/pokemon/${id}`)}

    return (
        <div className="col s6 m4" onClick={() => handleClick(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: colorBorderColor }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                        {
                            pokemon.types.map((type) => (
                                <PokemonTypes key={type} type={type} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;