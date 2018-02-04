const redbird = require('redbird');

/**
 * El Proxy de @Particle, permite el autodiscovery, Registro Manual
 * de MicroServicios
 * @method constructor
 * @param  {Object}    config {port, microServicesPath}
 */

class Traffic {
  constructor(config) {
    this.port = config.port;
    initProxy(this.port)
  }

  /**
   * El autoDiscovery es solo compatible con la arquitectura de MicroServices,
   * porporcionada, se encarga de autoDescubrir las rutas e incluso hacer
   * Balanceo de Carga automaticamente con el algoritmo Round Robin.
   * @method autoDiscovery
   */
  // TODO:
  autoDiscovery() {

  }

  /**
   * Permite el registro manual de Microservicios. Tambien puede actuar
   * de Proxy Inverso o Balanceador de Carga
   * @method manualRegister
   * @param  {String}       from  Direccion local entrante
   * @param  {String}       to    Hacia
   */

  manualRegister(from, to) {
    redbird.register(from, to);
  }

}

/**
 * [initProxy description]
 * @method initProxy
 * @param  {[type]}  port [description]
 * @return {[type]}       [description]
 */

const initProxy = (port) => {
  redbird({
    port: port,
    xfwd: false,
  });
}

module.exports = Traffic;