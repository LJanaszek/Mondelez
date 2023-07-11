import { Link, useNavigate } from "react-router-dom";
import Box from "../../components/layout/box/box";
import { getRulesPageRoute } from "../routes";
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";

export default function PolicyPage() {

    const navigate = useNavigate();

    return <>
        <Box>
            <h2>Polityka Prywatności</h2>

            <p>
                TBA
            </p>

            <ButtonsRow as='nav' aria-label="Porwót">
                <Link className="button" to={getRulesPageRoute()} onClick={() => navigate(-1)}>Powrót</Link>
            </ButtonsRow>

        </Box>
    </>
}
