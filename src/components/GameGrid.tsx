
import { SimpleGrid, Text } from '@chakra-ui/react';
import usegames from '../hooks/usegame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';


interface Props{
  selectedGenre: Genre|null
}
const GameGrid = ({selectedGenre}:Props) => {
    const{data,error,isLoading}=usegames(selectedGenre);
    const Skeletons=[1,2,3,4,5,6]; 
  
    return (
    <>
    {error && <Text>{error}</Text>}
   <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={3}>
    {isLoading &&
       Skeletons.map((Skeleton)=> <GameCardContainer key={Skeleton}><GameCardSkeleton /></GameCardContainer>)}
    {data.map((game)=>
        <GameCardContainer key={game.id}>
          <GameCard  game={game}/>
        </GameCardContainer>
)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
