import { useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import {Popup} from "../../molecules/popup/popup";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";


export default function RulesPage() {

    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    return  <Box>
            <h2 className={styles.rules}>Zasady</h2>

            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet voluptatem atque. Necessitatibus facere id eligendi unde suscipit. Cum?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolorum consequatur minus eius ad quae libero ut. Vitae, molestias voluptate dignissimos neque quasi voluptatem vel. Voluptatum cupiditate quisquam voluptates quos!</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita ex harum obcaecati, fugiat alias rem aspernatur beatae nesciunt exercitationem! Autem, quasi voluptas. Quas in, animi officiis cupiditate adipisci soluta?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A debitis nam fugit numquam minima libero corrupti beatae accusantium nulla excepturi earum odit id, odio officia nemo saepe recusandae quisquam impedit!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid alias delectus aspernatur sapiente pariatur. Ad, deleniti. Magni reprehenderit fuga laboriosam iure accusantium id. Suscipit amet quis magni? Explicabo, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas perferendis, magnam vero nostrum porro modi ipsa sequi eveniet similique dolore quaerat dolores nam animi itaque, at impedit. Facilis, itaque voluptas?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt quo, quam nam, vero illum deserunt accusamus adipisci hic voluptatum explicabo! Eos est consequuntur libero tenetur excepturi ratione! Dolor, temporibus.</li>
            </ol>

            <ButtonsRow as="nav">
                <ButtonLike>
                <button onClick={() => { setShowGPSInfo(true) }}>Dalej</button>
                </ButtonLike>
            </ButtonsRow>
        

        {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}
        </Box>

}
