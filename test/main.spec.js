// importamos la funcion que vamos a testear
import { cambioRuta } from "../src/main";

jest.mock("../src/lib/fireBaseConfig.js");

describe("Social Network", () => {
  beforeAll(() => {
    document.body.innerHTML = '<main id="root"></main>';
  });

  it("La pagina de registro debe mostrarse por defecto", () => {
    cambioRuta("");
    const formRegistro = document.querySelector("form#registro");
    expect(formRegistro.textContent).toContain("Nombre y Apellido");
    expect(formRegistro.textContent).toContain("Correo electrónico");
    expect(formRegistro.textContent).toContain("Regístrate");
  });

  it("La pagina de inicio de sesión debe mostrarse correctamente", () => {
    cambioRuta("#iniciarSesion");
    const formRegistro = document.querySelector("form#ingresar");
    expect(formRegistro.textContent).toContain("Correo electrónico");
    expect(formRegistro.textContent).toContain("Contraseña");
    expect(formRegistro.textContent).toContain("Iniciar Sesión");
  });
  it("La pagina del muro debe mostrarse correctamente", () => {
    cambioRuta("#muro");
    const sectionMuro = document.querySelector("section#muro");
    expect(sectionMuro.textContent).toContain("Escribe aqui...");
    expect(sectionMuro.textContent).toContain("Publicar");
  });
});
