import { useState } from "react";
import Rerenderizable from "./Rerenderizable";
    const RerenderizadorSinCambioProps = () => {
        const [, setContador] = useState(0); // #1
        return (
            <div>
                <button onClick={() => setContador((c) => c + 1) /* #2 */}>
                    Click para re-renderizar
                </button>
                <Rerenderizable /> {/* #3 */}
            </div>
        );
    };
export default RerenderizadorSinCambioProps;