import { useRef } from "react";
import Rerenderizable from "./Rerenderizable";
    const NoRenderizadorConCambioProps = () => {
        const contador = useRef(0); // #4
        return (
            <div>
                <button onClick={() => contador.current++ /* #5 */}>
                    Click para re-renderizar
                </button>
                <Rerenderizable contador={contador.current} /> {/* #6 */}
            </div>
        );
    };
export default NoRenderizadorConCambioProps;