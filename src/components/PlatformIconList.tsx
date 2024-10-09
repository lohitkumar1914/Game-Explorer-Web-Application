import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import{MdPhoneIphone } from 'react-icons/md'
import{SiNintendo}  from 'react-icons/si'
import{BsGlobe}  from 'react-icons/bs'

import { HStack, Icon, Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGame'
import { IconType } from 'react-icons'

interface Props{
    platforms:Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
    const iconmap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid


    }
  return (
    
 <HStack marginY={'10px'}> 
    {platforms.map((platform)=><Icon as={iconmap[platform.slug]} color='gray.5000'/>)}
 </HStack>
    
  ) 
}

export default PlatformIconList
