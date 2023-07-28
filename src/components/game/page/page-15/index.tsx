import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page15({onNext}: Props) {
    return <Box>
        <p>START/STOP - zadanie matematyczne, oblicz o ile różni się spalanie auta Janusza z i bez włączonego systemu. założenia: miesięcznie przejeżdżane km - 2500 km,</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
