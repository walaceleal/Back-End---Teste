'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Avaliacao extends Model {
    static get table(){
        return 'avaliacoes';
    }
}

module.exports = Avaliacao
