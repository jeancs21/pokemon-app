import { HeartIcon } from '@heroicons/react/24/outline';
import {FunctionComponent} from 'react';

type Props = {
    id?: string,
    name: string,
    type: string,
    image: string,
    onFavorite: () => void
}

const Card: FunctionComponent<Props> = (props) => {

  //const userLogged = useSelector((store: AppStore) => store.user)

  return (
    <div
      className='flex w-64 rounded-md p-3 m-2 flex-wrap hover:scale-[1.1] duration-300 bg-slate-200'
    >
      <div className='flex flex-col w-full'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-4'>
            <p className='font-medium text-lg'>{props.name}</p>
            <p className='p-1 bg-slate-300 rounded-full w-32 text-center'>{props.type}</p>
          </div>
          <div className='cursor-pointer'>
            <HeartIcon className='w-8 h-8 fill-transparent' onClick={props.onFavorite} />
          </div>
        </div>
        <img className='' src={props.image} alt='pokemon-image' />
      </div>
    </div>
  )
}

export default Card