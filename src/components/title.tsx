type Props = {
    name: string
}

export function Title(props: Props) {
    return <h1>{props.name}</h1>
}