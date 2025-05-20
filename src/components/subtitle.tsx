type Props = {
    name: string
}

export function Subtitle(props : Props){
    return <small>{ props.name }</small>
}