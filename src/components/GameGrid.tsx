
import { SimpleGrid, Text } from '@chakra-ui/react';
import usegames from '../hooks/usegame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const{games,error,isLoading}=usegames();
    const Skeletons=[1,2,3,4,5,6]; 
  
    return (
    <>
    {error && <Text>{error}</Text>}
   <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={10}>
    {isLoading &&
       Skeletons.map((Skeleton)=> <GameCardContainer><GameCardSkeleton key={Skeleton}/></GameCardContainer>)}
    {games.map(game=>
        <GameCardContainer>
          <GameCard key={game.id} game={game}/>
        </GameCardContainer>
    )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
