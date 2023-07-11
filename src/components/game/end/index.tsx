import { Link } from "react-router-dom";
import Box from "../../../components/layout/box/box";
import ScrollToMe from "../../../utils/widgets/scroll-to-me";
import { getHomeRoute } from "../../../routes/routes";
import { ButtonsRow } from "../../../atoms/buttons-row/buttons-row";

export default function EndGamePage() {
    return <div>
        <ScrollToMe behavior="smooth" />
        <Box>
            <h2>Drodzy gracze</h2>
            <p>Dziękujemy wam za wzięcie udziału w naszej grze.</p>
        </Box>
        <ButtonsRow as='nav' className="actions">
            <Link to={getHomeRoute()} className="button">Koniec</Link>
        </ButtonsRow>

    </div>
}
