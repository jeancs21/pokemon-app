import { IndexedType } from "./models/pokemon/pokemon.model";

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2"
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`
export const POKEMON_IMAGES_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const POKEMON_TYPES: IndexedType[] = [
    {
      name: "normal",
      url: "https://pokeapi.co/api/v2/type/1/",
      color: "neutral-400",
    },
    {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
      color: "red-500",
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
      color: "violet-500",
    },
    {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
      color: "purple-950",
    },
    {
      name: "ground",
      url: "https://pokeapi.co/api/v2/type/5/",
      color: "amber-950",
    },
    {
      name: "rock",
      url: "https://pokeapi.co/api/v2/type/6/",
      color: "yellow-950",
    },
    {
      name: "bug",
      url: "https://pokeapi.co/api/v2/type/7/",
      color: "lime-500",
    },
    {
      name: "ghost",
      url: "https://pokeapi.co/api/v2/type/8/",
      color: "violet-950",
    },
    {
      name: "steel",
      url: "https://pokeapi.co/api/v2/type/9/",
      color: "slate-700",
    },
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
      color: "orange-600",
    },
    {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
      color: "blue-500",
    },
    {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
      color: "green-600",
    },
    {
      name: "electric",
      url: "https://pokeapi.co/api/v2/type/13/",
      color: "yellow-400",
    },
    {
      name: "psychic",
      url: "https://pokeapi.co/api/v2/type/14/",
      color: "pink-600",
    },
    {
      name: "ice",
      url: "https://pokeapi.co/api/v2/type/15/",
      color: "cyan-500",
    },
    {
      name: "dragon",
      url: "https://pokeapi.co/api/v2/type/16/",
      color: "purple-600",
    },
    {
      name: "dark",
      url: "https://pokeapi.co/api/v2/type/17/",
      color: "gray-800",
    },
    {
      name: "fairy",
      url: "https://pokeapi.co/api/v2/type/18/",
      color: "pink-300",
    },
  ];