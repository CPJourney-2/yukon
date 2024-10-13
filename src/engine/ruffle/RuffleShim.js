// deno-lint-ignore-file no-window
export default class RuffleShim {
  /**
   * Ruffle controller
   */
  #controller;

  constructor(controller) {
    this.#controller = controller;
    window.ruffle = this;

    const keys = [...controller.getKeys(), ...controller.privateKeys];

    for (const func of keys) {
      this[func] = (...args) => {
        //https://stackoverflow.com/a/57023880
        let caller =
          (new Error()).stack.split("\n")[2].trim().split("https://")[1]; //.split(" ")[1]

        caller = caller?.split("@").slice(0, 2).join("@");
        /*if(caller != "cdn.jsdelivr.net/npm/@ruffle-rs/ruffle") {
                    return
                }*/

        return this.#controller[func](...args);
      };
    }
  }

  getKeys() {
    return this.#controller.getKeys();
  }
}
