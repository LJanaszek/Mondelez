import useGameProgress from "../../modules/main/hooks/use-game-progress";

export default function GameProgress() {
    const progress = useGameProgress();

    const value = (progress * 100) | 0;

    return <div role="progressbar" aria-live="polite" aria-label="Progres gry" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <span role="presentation">{value}%</span>
    </div>
}
