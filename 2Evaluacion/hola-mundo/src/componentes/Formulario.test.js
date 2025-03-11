import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import Formulario from "./Formulario";
test("El formulario se envía correctamente con el valor del input", () => {
render(<Formulario />);// Se remderiza el componente Formulario
// Se obtienen los elementos del DOM
const txtNombre = screen.getByLabelText("Nombre:");
const btnEnviar = screen.getByText("Enviar datos");
// Se espía alert para poder capturar su llamada
const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
// Mediante act() se envuelven las interacciones que causan cambios de estado
act(() => {
userEvent.type(txtNombre, "Juan Pérez"); // Se escribe en el cuadro de texto
fireEvent.click(btnEnviar); // Se simula el clic del botón
});
// Ahora se verifica que se haya llamado a alert con el valor correcto
expect(mockAlert).toHaveBeenCalledWith(
`Se ha enviado el formulario con el nombre: Juan Pérez`
);
// Se restaura la función alert original
mockAlert.mockRestore();
});
