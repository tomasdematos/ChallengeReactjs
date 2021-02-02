import React from 'react';

import CharactersCard from './CharactersCard';
import LocationsCard from './LocationsCard'
import EpisodesCard from './EpisodesCard'

export interface CardsProps {
    data: any;
}

const Cards: React.SFC<CardsProps> = ({ data }) => {

    return (
        <>
            {
                data.characters ?

                    <CharactersCard
                        results={data.characters.results}
                    />
                    : data.locations ?

                        <LocationsCard
                            results={data.locations.results}
                        />
                        : data.episodes ?
                            <EpisodesCard
                                results={data.episodes.results}
                            />
                            : null
            }
        </>
    )
}


export default Cards;

