import { HeartIcon } from '@heroicons/react/24/outline';
import {FunctionComponent} from 'react';
import { ListPokemon } from '../../models/pokemon/pokemon.model';

type Props = {
    pokemon: ListPokemon
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
            <p className='font-medium text-lg'>{props.pokemon.name}</p>
            {props.pokemon.types.map((type, index) => (
                <p
                    key={index}
                    className={`p-1 rounded-full w-32 text-center`}
                >
                    {type}
                </p>
            ))}
          </div>
          {/*

          <div className='cursor-pointer'>
            {props.isFavorite ?
            (
              <HeartIcon className='w-8 h-8 fill-red-500' onClick={props.onFavorite} />
            )
            :
            (
              <HeartIcon className='w-8 h-8 fill-transparent' onClick={props.onFavorite} />
            )
            }
          </div>
          */}
        </div>
        <img className='' src={props.pokemon.image} alt={props.pokemon.name} />
      </div>
    </div>
  )
}

export default Card