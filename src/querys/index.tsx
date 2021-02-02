import { gql } from '@apollo/client';

export const CHARACTERS = (page: number, type: string, filter: string) => {

    if (filter.length >= 3) {
        const CHARACTERS = `
        {
            characters(page: ${page}, filter: { ${type}: "${filter}"}) {
                info {
                    pages
                }
                results {
                    id
                    name
                    type
                    gender
                    species
                    image
                }
            }
        }`;
        return gql`${CHARACTERS}`

    } else {
        const CHARACTERS = `
        {
            characters(page: ${page}) {
                info {
                    pages
                }
                results {
                    id
                    name
                    type
                    gender
                    species
                    image
                }
            }
        }`;
        return gql`${CHARACTERS}`
    }


}

export const LOCATIONS = (page: number, type: string, filter: string) => {
    if (filter.length >= 3) {
        const LOCATIONS = `
    {
        locations(page: ${page}, filter: { ${type}: "${filter}"}) {
            info {
                count
                pages
            }
            results {
                id
                name
                dimension
                type
                residents{
                    id
                    name
                    image
                    type
                    species
                    gender
                }
            }
        }
    }`;
        return gql`${LOCATIONS}`
    } else {
        const LOCATIONS = `
        {
            locations(page: ${page}) {
                info {
                    count
                    pages
                }
                results {
                    id
                    name
                    dimension
                    type
                    residents{
                        id
                        name
                        image
                        type
                        species
                        gender
                    }
                }
            }
        }`;
        return gql`${LOCATIONS}`
    }



}

export const EPISODES = (page: number, type: string, filter: string) => {
    if (filter.length >= 3) {
        if (type === "type") {
            type = "episode"
        }
        const EPISODES = `
        {
            episodes(page: ${page}, filter: { ${type}: "${filter}"}) {
                info {
                    pages
                }
                results {
                    id
                    name
                    episode
                    air_date
                    characters {
                    id
                    name
                    type
                    image
                    species
                    gender
                    }
                }
            }
        }`;
        return gql`${EPISODES}`
    } else {
        const EPISODES = `
        {
            episodes(page: ${page}) {
                info {
                    pages
                }
                results {
                    id
                    name
                    episode
                    air_date
                    characters {
                    id
                    name
                    type
                    image
                    species
                    gender
                    }
                }
            }
        }`;
        return gql`${EPISODES}`
    }
}