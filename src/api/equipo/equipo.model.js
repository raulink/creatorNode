/**
 * From queryman lib syntaxis (Check https://www.npmjs.com/package/bodymen)
 * Which could be use as validating fetching tool at controller or event at express
 * example of schema definitions:
 * attribute: {
 *   type: String,
 *   match: /^\S+@\S+\.\S+$/,
 *   required: true,
 *   unique: true,
 *   trim: true,
 *   lowercase: true,
 *   minlength: 6,
 *   enum: roles
 * }
 *
 */
export const equipoDataSchema = {
        idequpadre: 
   {  
       type:  Number,
       required: true 
   }, 
    idequloc: 
   {  
       type:  Number,
       required: true 
   }, 
    fkcomentario: 
   {  
       type:  Number,
       required: true 
   }, 
    fkcatequtipoequ: 
   {  
       type:  Number,
       required: true 
   }, 
    fkproved: 
   {  
       type:  Number,
       required: true 
   }, 
    fkcatcc: 
   {  
       type:  Number,
       required: true 
   }, 
    fkequplan: 
   {  
       type:  Number,
       required: true 
   }, 
    fksistema: 
   {  
       type:  Number,
       required: true 
   }, 
    fksubsistema: 
   {  
       type:  Number,
       required: true 
   }, 
    fksisprioridad: 
   {  
       type:  Number,
       required: true 
   }, 
    fkmodel: 
   {  
       type:  Number,
       required: true 
   }, 
    idsisequtipo: 
   {  
       type:  Number,
       required: true 
   }, 
    concatena: 
   {  
       type:  String,
       required: true 
   }, 
    fcarranque: 
   {  
       type:  Date,
       required: true 
   }, 
    idequfueraserv: 
   {  
       type:  Number,
       required: true 
   }, 
    localizacion: 
   {  
       type:  String,
       required: true 
   }, 
    fechacreacion: 
   {  
       type:  Date,
       required: true 
   }, 
    identificadorserie: 
   {  
       type:  String,
       required: true 
   }, 
    tieneequipos: 
   {  
       type:  Number,
       required: true 
   }, 
    rutaidslocalizacion: 
   {  
       type:  String,
       required: true 
   }, 
    fccompra: 
   {  
       type:  Date,
       required: true 
   }, 
    aniofabricacion: 
   {  
       type:  Number,
       required: true 
   }, 
    fkcattipoespecif: 
   {  
       type:  Number,
       required: true 
   }, 
    edocordgeog: 
   {  
       type:  Number,
       required: true 
   }, 
    latitudindiv: 
   {  
       type:  String,
       required: true 
   }, 
    longitudindiv: 
   {  
       type:  String,
       required: true 
   }, 
    latitudhereda: 
   {  
       type:  String,
       required: true 
   }, 
    longitudhereda: 
   {  
       type:  String,
       required: true 
   } 

}

/**
 * This method build usefull attr to be declared in many places as it could be necessary (migrations example)
 * @param {*} DataTypes From Sequelize instance
 */
export const equipoAttributes = (DataTypes) => {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
      idequpadre: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    idequloc: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkcomentario: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkcatequtipoequ: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkproved: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkcatcc: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkequplan: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fksistema: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fksubsistema: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fksisprioridad: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkmodel: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    idsisequtipo: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    concatena: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    fcarranque: 
   {  
       type:  DataTypes.DATE,
       allowNull: false 
   }, 
    idequfueraserv: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    localizacion: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    fechacreacion: 
   {  
       type:  DataTypes.DATE,
       allowNull: false 
   }, 
    identificadorserie: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    tieneequipos: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    rutaidslocalizacion: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    fccompra: 
   {  
       type:  DataTypes.DATE,
       allowNull: false 
   }, 
    aniofabricacion: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkcattipoespecif: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    edocordgeog: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    latitudindiv: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    longitudindiv: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    latitudhereda: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    longitudhereda: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   } 
  
  }
}


/**
 * Sequelize model
 */
export default (sequelize, DataTypes) => {
  const equipo = sequelize.define('equipo', {
    ...equipoAttributes(DataTypes)
  }, {
    tableName: 'equipos',
    hooks: {
      /**
       * hooks methods from models recognize some
       * lifecycle hooks from the user model component
       * to execute some custom 'scripts' on them
       * (Check https://sequelize.org/master/manual/hooks.html)
       */
      beforeSave: async (user) => {
        // My before save logic
      }
    }
  });

  equipo.associate = function(models) {
    /**
     * An example of association is the follow
     * Guess equipo has a collection of cookies table.
     * At the same time, cookies just saves one reference 
     * (foreign key) to it's equipo's
     * 
     *   models.equipo.hasMany(models.cookie, {
     *     as: 'cookies', allowNull: true
     *   }, {
     *     onDelete: 'CASCADE',
     *     hooks: true
     *   })
     * 
     * At cookie.model.js must be declared the reference to it's equipo owner 
     * on associate function as follow:
     * 
     *   models.cookie.belongsTo(models.equipo, {
     *     foreignKey: 'equipoId',
     *     allowNull: true
     *   })
     * 
     * 
     */
  };

  return equipo;
}



  