import { vistaRegistro, resgContenido } from "../src/lib/registro.js";

jest.mock("../src/lib/fireBaseConfig.js");
jest.mock("../src/lib/auth.js");

describe("testing funcion vistaRegistro", () => {
  beforeAll(() => {
    document.body.innerHTML = '<main id="root"></main>';
  });

  beforeEach(() => {
    document.getElementById("root").innerHTML = resgContenido;
  });

  it("debe mostrar correctamente vista registro", () => {
    //expect(document.body.innerHTML).toMatchSnapshot();
    expect(document.getElementById("registrate")).toBeTruthy();
  });

  it("debe mostrar error '❌ Correo electrónico no válido'", (done) => {
    vistaRegistro();
    expect(document.querySelector("#errorMessageJoin").innerHTML).toBe("");
    document.getElementById("registrate").click();
    setTimeout(() => {
      expect(document.querySelector("#errorMessageJoin").innerHTML).toBe(
        "❌ Correo electrónico no válido"
      );
      done();
    }, 1000);
  });

  it("debe mostrar error '⚠️ La contraseña debe contener un mínimo de seis caracteres'", (done) => {
    vistaRegistro();
    expect(document.querySelector("#errorMessageJoin").innerHTML).toBe("");

    document.querySelector("#correo").value = "messi";

    document.getElementById("registrate").click();
    setTimeout(() => {
      expect(document.querySelector("#errorMessageJoin").innerHTML).toBe(
        "⚠️ La contraseña debe contener un mínimo de seis caracteres"
      );
      done();
    }, 1000);
  });

  // it('asdasd', async()=>{
  //   //hacemos click
  //   await {};

  // });
});
