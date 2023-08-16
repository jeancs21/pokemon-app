import { FunctionComponent } from "react"

type Props = {
    buttonText: string,
    paginateTo: () => void,
}

const PaginateButton:FunctionComponent<Props> = (props) => {
  return (
    <button
        className={`bg-slate-300 text-black w-44 border-1 border-black cursor-pointer p-2 self-center rounded-full hover:bg-slate-400 duration-300`}
        onClick={props.paginateTo}
    >
        {props.buttonText}
    </button>
  )
}

export default PaginateButton